let expect = require('chai').expect;
let unroll = require('unroll');
let x = require('./x-gear');

// wrap mochas it function
unroll.use(it);

describe('X gear', () => {
	
	unroll('should react to #message with a hit? (#hit)', (done, fixture) => {
		expect(x.regex.test(fixture.message)).to.equal(fixture.hit);
		done();
	}, [
		['message', 'hit'],
		['X', true],
		['Könnten Sie bitte dies römische Zahl: MMMCCXVI übersetzen?', true],
		['Dann bis dann', false]
	]);

	unroll('when executed should translate #input to #output', (done, fixture) => {
		let output = x.execute(fixture.input);
		expect(output).to.equal(fixture.output);
		done();
	}, [
		['input', 'output'],
		['X', 'In Eurer Welt sind dies 10'],
		['Könnten Sie bitte diese römische Zahl: MMMCCXVI übersetzen?', 'In Eurer Welt sind dies 3216']
	]);
	
});