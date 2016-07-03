let expect = require('chai').expect;
let unroll = require('unroll');
let hello = require('./hello-gear');

// wrap mochas it function
unroll.use(it);

describe('Hello gear', () => {
	
	unroll('should react to #message', (done, fixture) => {
		expect(hello.regex.test(fixture.message)).to.equal(true);
		done();
	}, [
		['message'],
		['Hi'],
		['Hi Caesar'],
		['Sehr geehrte Damen und Herren'],
		['Geehrter Typ'],
		['Hallo Du'],
		['hallo du'],
		['moin moin'],
		['moinsen'],
		['tach'],
		['tag'],
		['Hey'],
		['HI'],
		['hi']
	]);

	it('when executed should return a Caesar like response', () => {
		let response = hello.execute("Hello");

		expect(response).to.be.oneOf(['Ave!', 'Salve!']);
	});
	
});