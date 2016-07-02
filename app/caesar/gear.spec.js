let expect = require('chai').expect;

const Gear = require('./gear');

describe("Gear", () => {

	it('should execute its function', () => {
		let gear = new Gear(/A/, (text) => {return text});

		let result = gear.execute('lorem itsum');

		expect(result).to.equal('lorem itsum');
	});


	it('should return a random answer from array', () => {
		// given
		const possibleAnswers = ['A', 'B', 'C'];

		// when
		let answer = Gear.randomAnswer(possibleAnswers);

		// than
		expect(answer).to.be.oneOf(possibleAnswers);
	});

	// add tests for bad usage here. (empty or null possible answers)
});