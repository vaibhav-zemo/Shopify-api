const request = require('request-promise');

module.exports.fetch = async function (req,res) {
    let url = "https://messoldtech-test.myshopify.com/admin/api/2022-04/products.json";

    let options = {
        method: 'GET',
        url: url,
        json: true,
        headers: {
            'X-Shopify-Access-Token': "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",
            'content-type': 'application/json',
        }
    }

    request(options).then(function (body) {
        return res.json(200, {
            message: 'List of Products',
            data: body,
        })
    }).catch(function (err) {
        return res.json(500, {
            message: 'Some Error has occured',
        })
    })
};