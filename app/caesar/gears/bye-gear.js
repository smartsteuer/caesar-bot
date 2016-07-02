const Gear = require('../gear');
const answers = ['Ave!', 'Vale!'];

module.exports = new Gear(
		/(Ciao|Bis bald|Adios|Auf Wieder|Bis denne|Tschü|Tschö|mach'?s?\W?(et)? (g|j)ut)/i,
		() => {
			return Gear.randomAnswer(answers);
		}
);
