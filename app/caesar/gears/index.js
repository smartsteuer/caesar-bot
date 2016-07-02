let requireDirectory = require('require-directory');

module.exports = requireDirectory(module, {
	include:/.+\-gear\.js$/,
	rename: (name) => {return name.replace('-gear', '')}
});
