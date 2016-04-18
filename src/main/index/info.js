var pjson = require('../../../package.json');

module.exports = {
	description: "This is the " + pjson.name,
	version: pjson.version
};