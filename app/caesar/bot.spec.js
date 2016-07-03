let expect = require('chai').expect;
let proxyquire = require('proxyquire');
let Gear = require('./gear');


describe('Caesar-bot', () => {

	let caesar;
	let handlingGear;
	let incomingText;

	beforeEach(() => {
		incomingText = '';
		handlingGear = null;

		delete require.cache[require.resolve('./bot')];
		caesar = proxyquire('./bot', {
			'./gearbox': {
				findGearToHandle: (text) => {
					incomingText = text;
					return handlingGear;
				}
			}

		});
	});

	it('should find and use a gear to handle incoming messages', () => {
		// given
		handlingGear = new Gear(/.*/, (text) => {
			incomingText = text;
			return 'an answer';
		});

		// when
		let answer = caesar.handleIncommingText('a message');

		// than
		expect( answer ).to.equal('an answer');
		expect(incomingText).to.equal('a message');
	});

	it('should handle situations with no found gear nicely', () => {
		// given
		handlingGear = undefined;

		// when
		let answer = caesar.handleIncommingText('a message');

		// than
		expect( answer ).to.equal('Beim Jupiter! Ich weiß nicht, wie ich Euch antworten soll. Würdet Ihr mir eine Zahl ' +
				'zum Übersetzten nennen, könnte ich Euch helfen.');
	});


});