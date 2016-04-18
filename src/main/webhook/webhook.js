let router = require('express').Router();
let webhookGet = require('./webhook-get');

router.get('/', webhookGet);

module.exports = router;
