const craigslist = require("./craigslist");
const mercari = require("./mercari");
const facebook = require("./facebook");
const offerup = require("./offerup");
const Product = require("./classes/Product");

const monitor = async (config) => {
  try {
    let newItems = [];
    if (config.store == "craigslist") newItems = await craigslist(config);
    else if (config.store == "mercari") newItems = await mercari(config);
    else if (config.store == "facebook") newItems = await facebook(config);
    else if (config.store == "offerup") newItems = await offerup(config);

    // if (Math.random() > .8) newItems.push(newItems[0]); newItems[newItems.length - 1].id = 'test'
    newItems.every((i) => {
      if (!config.items.has(i.id) && !config.first) {
        // filter out products from price
        if ((settings.maxPrice && settings.maxPrice !== -1 && i.price > settings.maxPrice) || (settings.minPrice && settings.minPrice !== -1 && i.price < settings.minPrice)) {
          return;
        }

        // check keyword filters
        const pKws = settings.keywords.filter(kw => kw.startsWith('+'));
        const nKws = settings.keywords.filter(kw => kw.startsWith('-'));
        // pos kw check
        pKws.every(kw => {
          if (i.title.includes(kw) || i.extra.join(' ').includes(kw)) {
            i.extra.push(`<@${settings.discordMentionId}>`);
            return;
          }
        })

        // neg kw check
        nKws.every(kw => {
          if (!i.title.includes(kw)) {
            console.log("NEW ITEM:", i.title);
            i.ping(config.webhook);
            config.items.add(i.id);
            return;
          }
        })
      } else if (!config.items.has(i.id) && config.first) {
        config.items.add(i.id);
      }
    });

    config.first = false;
    setTimeout(() => {
      monitor(config);
    }, config.delay);
  } catch (e) {
    console.error(e);
    setTimeout(() => {
      monitor(config);
    }, config.errorDelay);
  }
};

const monitors = require("../files/monitors");
const settings = require("../files/settings");

monitors.forEach((m) => {
  // check that files exist in files dir

  m.first = true;
  m.items = new Set();
  if (!m.webhook) m.webhook = settings.webhook;
  if (!m.delay) m.delay = settings.delay;

  monitor(m);
});
