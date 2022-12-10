const rp = require('request-promise');

const discord = {};

discord.ping = (webhook, content) => {
    rp({
        method: 'POST',
        url: webhook,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            content
        })
    })
        .then(res => {
            console.log(res);
        })
        .catch(console.error)
}

module.exports = discord;