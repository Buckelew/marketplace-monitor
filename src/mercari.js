const cloudscraper = require("cloudscraper");
const qs = require("node:querystring");
const Product = require("./classes/Product");

const getProducts = (config) =>
  new Promise((resolve, reject) => {
    const queryString = qs.stringify({
      operationName: "searchFacetQuery",
      variables: `{"criteria":{"offset":0,"soldItemsOffset":0,"promotedItemsOffset":0,"sortBy":2,"length":30,"query":"${config.query}","itemConditions":[],"shippingPayerIds":[],"sizeGroupIds":[],"sizeIds":[],"itemStatuses":[],"customFacets":[],"facets":[1,2,3,5,7,8,9,10,11,13],"authenticities":[],"deliveryType":"all","state":null,"locale":null,"shopPageUri":null,"withCouponOnly":null},"categoryId":0}`,
      extensions:
        '{"persistedQuery":{"version":1,"sha256Hash":"a234c160e270e63c7689739e191d207884eea0c46f344b66a17a59bcc7f725fa"}}',
    });
    const url = `https://www.mercari.com/v1/api?${queryString}`;

    cloudscraper
      .get(url)
      .then((res) => {
        const result = JSON.parse(res);

        const items = [];
        result.data.search.itemsList.forEach((i) => {
          const price = parseInt(i.price) / 100;
          items.push(
            new Product(
              i.id,
              config.store,
              i.name,
              `https://www.mercari.com/us/item/${i.id}`,
              price,
              i.photos ? i.photos[0].large : "",
              i.description
            )
          );
        });

        resolve(items);
      })
      .catch(reject);
  });

// getProducts({query:'macbook'})

module.exports = getProducts;
