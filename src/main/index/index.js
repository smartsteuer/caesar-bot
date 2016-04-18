let router = require('express').Router();
let indexImpl = require('./index-impl');

/* GET some version info. */
router.get('/', indexImpl.get);

module.exports = router;
