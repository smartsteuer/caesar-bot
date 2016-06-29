let info = require('./info');

let infoGet = (req, res) => res.json(info);

module.exports = infoGet;