const Gear = require('../gear');
const answers = ['Ave!', 'Salve!'];

module.exports = new Gear(
		/(Ave|Salve|Hi|Hallo|Hey|Moin\w*|Tach|^\w*\bTag|(Sehr\b)?geehrte)/i,
		() => {
			return Gear.randomAnswer(answers);
		}
);
