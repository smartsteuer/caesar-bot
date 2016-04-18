let router = require('express').Router();
let webhookGet = require('./webhook-get');
let webhookPost = require('./webhook-post');

router.get('/', webhookGet);
router.post('/', webhookPost);

module.exports = router;
