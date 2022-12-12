const craigslist = require("./craigslist");
const mercari = require("./mercari");
const facebook = require("./facebook");
const Product = require("./classes/Product");

const monitor = async (config) => {
  try {
    let newItems = [];
    if (config.store == "craigslist") newItems = await craigslist(config);
    else if (config.store == "mercari") newItems = await mercari(config);
    else if (config.store == "facebook") newItems = await facebook(config);

    // if (Math.random() > .8) newItems.push(newItems[0]); newItems[newItems.length - 1].id = 'test'
    newItems.forEach((i) => {
      if (!config.items.has(i.id) && !config.first) {
        console.log("NEW ITEM:", i.title);
        i.ping(config.webhook);
        config.items.add(i.id);
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
  m.first = true;
  m.items = new Set();
  if (!m.webhook) m.webhook = settings.webhook;
  if (!m.delay) m.delay = settings.delay;

  monitor(m);
});
