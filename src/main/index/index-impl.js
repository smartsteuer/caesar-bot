var info = require('./info');

module.exports = {
	get: function(req, res, next) {
		res.json(info);
	}
};
