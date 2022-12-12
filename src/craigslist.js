const cloudscraper = require('cloudscraper');
const deob = require('./deob')
const Product = require('./classes/Product');


const getProducts = (config) => new Promise((resolve,reject) => {
    cloudscraper.get({
        url: `https://sapi.craigslist.org/web/v7/postings/search/full?batch=350-0-360-1-0&cc=US&lang=en&query=${config.query}&searchPath=sss&sort=date`
    })
        .then(res => {
            const result = JSON.parse(res);
            const items = deob(result.data);
            
            const formattedItems = [];
            items.forEach(i => {
                const image = i.kwargs.imageIds ? `https://images.craigslist.org/${i.kwargs.imageIds[0].split('3:')[1]}_300x300.jpg` : ''
                formattedItems.push(new Product(i.kwargs.postingId, config.store, i.kwargs.title, `https://${i.location.hostname}.craigslist.org/${i.kwargs.categoryAbbr}/${i.kwargs.postingId}.html`, i.kwargs.price, image))
            })


            resolve(formattedItems)
        })
        .catch(reject);
})

module.exports = getProducts;