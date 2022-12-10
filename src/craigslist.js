const cloudscraper = require('cloudscraper');

const config = { query: 'macbook' }

cloudscraper.get({
    url: 'https://sapi.craigslist.org/web/v7/postings/search/full?batch=350-0-360-1-0&cc=US&lang=en&query=macbook&searchPath=sss&sort=date'
})
    .then(res => {
        const result = JSON.parse(res);

        console.log(res);
        console.log(result.data.items[0]);
        const productNames = result.data.items.map(i => i[i.length - 1]);
        // console.log(productNames);
    })
    .catch(console.error);