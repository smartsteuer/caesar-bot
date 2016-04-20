let packageJson = require('../../../package.json');

let indexInfo = {
	description: `This is the ${packageJson.name}`,
	version: packageJson.version
};

module.exports = indexInfo;