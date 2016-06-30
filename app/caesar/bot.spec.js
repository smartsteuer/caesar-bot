let expect = require('chai').expect;

let caesar = require('./bot');

describe('Caesar-bot', () => {

	it.skip('should respond to greetings with a caesar like answer', () => {
		// when
		let reply = caesar.respondTo("Hallo Caesar!");

		// then
		expect(reply).to.match(/^(Ave|Salve).*/);
	})

});