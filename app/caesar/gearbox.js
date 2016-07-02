const gears = require('./gears');

function addGear( key, gear ) {
	gears[key] = gear;
}

function findGearToHandle( text ) {
	for( const key in gears ) {
		let gear = gears[key];
		if (gear.regex.test(text)) {
			return gear;
		}
	}
}

function size() {
	return Object.keys(gears).length
}

module.exports = {
	addGear,
	findGearToHandle,
	size
};