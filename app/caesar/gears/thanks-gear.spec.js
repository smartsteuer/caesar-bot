let expect = require('chai').expect;
let unroll = require('unroll');
let thanks = require('./thanks-gear');

// wrap mochas it function
unroll.use(it);

describe('Thanks gear', () => {
	
	unroll('should react to #message', (done, fixture) => {
		expect(thanks.regex.test(fixture.message)).to.equal(true);
		done();
	}, [
		['message'],
		['Danke'],
		['Vielen Dank'],
		['Dankeschön'],
		['Das war toll! danke!']
	]);

	it('when executed should return a Caesar like response', () => {
		let response = thanks.execute("Thanks");

		expect(response).to.be.oneOf(['Schön, wenn es Euch gefallen hat', 'Stets zu Diensten', 'Äußerst gern', 'Gratias', 'Ipsa felix']);
	});
	
});