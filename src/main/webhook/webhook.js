let router = require('express').Router();
let webhookGet = require('./webhook-get');

router.get('/webhook/', webhookGet);

module.exports = router;
