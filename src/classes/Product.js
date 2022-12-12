const rp = require('request-promise')

class Product {
  constructor(id, store, title, url, price,img,extra = '') {
    this.id = id;
    this.store = store;
    this.title = title;
    this.url = url;
    this.price = price;
    this.img = img;
    this.extra = extra;
  }

  ping(webhook) {
    rp({
      method: 'POST',
      url: webhook,
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({
          embeds: [{
            "title": this.title,
            "description": this.extra,
            "url": this.url,
            "color": 9982959,
            "timestamp": new Date(),
            "thumbnail": {
              "url": this.img
            },
            "author": {
              "name": `${this.store.charAt(0).toUpperCase() + this.store.slice(1)} Monitor`
            },
            "footer": {
              "text": "created by XXX#0001"
            },
            "fields": [
              {
                "name": "Price",
                "value": `$${this.price}`
              }
            ]
          }]
      })
  })
      .then(res => {
        console.log('WEBHOOK SENT');
      })
      .catch(console.error)
  }
}

module.exports = Product;