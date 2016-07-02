const Gear = require('../gear');
const answers = ['Schön, wenn es Euch gefallen hat', 'Stets zu Diensten', 'Äußerst gern', 'Gratias', 'Ipsa felix'];

module.exports = new Gear(
		/Dank\w*/i,
		() => {
			return Gear.randomAnswer(answers);
		}
);
