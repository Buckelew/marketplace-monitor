const cloudscraper = require("cloudscraper");
const deob = require("./deob");
const Product = require("./classes/Product");
const fs = require("fs");
const cheerio = require("cheerio");
const path = require("path");

const getProducts = (config) =>
  new Promise((resolve, reject) => {
    const cookies = fs.readFileSync(
      path.join(__dirname, "../files/cookies.txt"),
      "utf-8"
    );
    cloudscraper
      .get({
        url: `https://www.facebook.com/marketplace/104028649634847/search?sortBy=creation_time_descend&query=${config.query}&exact=false`,
        headers: {
          cookie: cookies,
        },
      })
      .then((res) => {
        const $ = cheerio.load(res);
        const scripts = $('script[type="application/json"]');

        let result = "";
        scripts.each((i, el) => {
          if ($(el).html().includes("marketplace_listing_title")) {
            try {
              result = JSON.parse($(el).html());
              result =
                result.require[0][3][0]["__bbox"].require[0][3][1]["__bbox"]
                  .result.data;
            } catch (e) {
              // BAD RESPONSE
              reject("Bad response");
            }
          }
        });

        const formattedItems = [];

        if (result) {
          result.marketplace_search.feed_units.edges.forEach((i) => {
            const item = i.node.listing;
            let image;
            if (
              item.primary_listing_photo &&
              item.primary_listing_photo.image &&
              item.primary_listing_photo.image.uri
            )
              image = item.primary_listing_photo.image.uri;
            formattedItems.push(
              new Product(
                item.id,
                config.store,
                item.marketplace_listing_title,
                `https://www.facebook.com/marketplace/item/${item.id}`,
                item.listing_price.amount,
                image
              )
            );
          });
        } else {
          reject("Bad response");
        }

        resolve(formattedItems);
      })
      .catch(reject);
  });

module.exports = getProducts;
