const rp = require('request-promise');
const cloudscraper = require('cloudscraper')
const qs = require('node:querystring');
const discord = require('./discord.js')

const items = new Set();
let first = true;

const init = (config) => {

    try {
        const queryString = qs.stringify({
            'operationName': 'searchFacetQuery',
            variables: `{"criteria":{"offset":0,"soldItemsOffset":0,"promotedItemsOffset":0,"sortBy":2,"length":30,"query":"${config.query}","itemConditions":[],"shippingPayerIds":[],"sizeGroupIds":[],"sizeIds":[],"itemStatuses":[],"customFacets":[],"facets":[1,2,3,5,7,8,9,10,11,13],"authenticities":[],"deliveryType":"all","state":null,"locale":null,"shopPageUri":null,"withCouponOnly":null},"categoryId":0}`,
            extensions: '{"persistedQuery":{"version":1,"sha256Hash":"a234c160e270e63c7689739e191d207884eea0c46f344b66a17a59bcc7f725fa"}}'
        });
        const url = `https://www.mercari.com/v1/api?${queryString}`

        cloudscraper.get(url)
            .then(res => {
                const result = JSON.parse(res);

                result.data.search.itemsList.forEach(i => {
                    if (!items.has(i.id) && !first) {
                        console.log('NEW ITEM:', i.name);
                        discord.ping(config.webhook, `NEW ITEM FOUND!\n${i.name}\n${i.description}\n$${i.price}\nhttps://www.mercari.com/us/item/${i.id}\n${i.photos ? i.photos[0].large : ''}`);
                        items.add(i.id)
                    } else if (!items.has(i.id) && first) {
                        items.add(i.id);
                    }
                })

                first = false;

                setTimeout(() => {
                    init(config)
                }, config.delay);
            })
            .catch(console.error)
    } catch (e) {
        console.error(e)
        setTimeout(() => {
            init(config)
        }, 60000);
    }
}

const config = {
    query: 'macbook',
    webhook: 'https://discord.com/api/webhooks/549757108367917056/UnrRw52i_ZWtmo-6t84FGEPcATfFi93NE6DrW7gAuew5--aNt5yAerPt7e4t5QBJOff3',
    delay: 2000
}

init(config)