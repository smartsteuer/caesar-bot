let expect = require('chai').expect;
let proxyquire = require('proxyquire');

let gearbox = require('./gearbox');


describe('Caesar-bot', () => {

	let caesar;
	let gear;
	let incomingText;

	beforeEach(() => {
		incomingText = '';
		gear = null;
	});

	it('should find and use gears to handle incoming messages');
	it('should the found gear handle the message and return its response');

});