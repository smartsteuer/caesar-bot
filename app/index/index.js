let router = require('express').Router();
let indexGet = require('./index-get');

/* GET some version info. */
router.get('/', indexGet);

module.exports = router;
