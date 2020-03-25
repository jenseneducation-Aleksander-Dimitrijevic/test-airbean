const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});

router.post('/order/:uuid', async (req, res) => {

    let uuid = req.params.uuid
    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
        items:req.body.items,
        total:0,
        timeStamp: Date.now()
    }
    console.log(order)

    setTimeout(() => {
        res.send(JSON.stringify(order));
    }, 2000);
});

router.get('/key', (req, res) => {
    const key = {
        key: uuid()
    }
    res.send(JSON.stringify(key));
})

module.exports = router