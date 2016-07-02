let expect = require('chai').expect;

let Gear = require('./gear');
let gearbox = require('./gearbox');

let gearI = new Gear(/A/);
let gearII = new Gear(/B/);
let gearIII = new Gear(/C/);

function addSomeGears() {
	gearbox.addGear('A', gearI);
	gearbox.addGear('b', gearII);
	gearbox.addGear('c', gearIII);
}

describe('Gearbox', () => {

	it('should create and add default gears', () => {
		//noinspection BadExpressionStatementJS
		expect(gearbox.findGearToHandle('Hallo')).to.exist;
		//noinspection BadExpressionStatementJS
		expect(gearbox.findGearToHandle('Danke')).to.exist;
		//noinspection BadExpressionStatementJS
		expect(gearbox.findGearToHandle('Tschüß')).to.exist;
	});

	it('should be able to add gears', () => {
		let size = gearbox.size();

		// when
		gearbox.addGear('g1', gearI);
		// then
		expect(gearbox.size()).to.equal(size + 1);
		// when
		gearbox.addGear('g2', gearII);
		// then
		expect(gearbox.size()).to.equal(size + 2);
	});

	it('should find a fitting gear for incoming text', () => {
		addSomeGears();

		// when
		let targetGear = gearbox.findGearToHandle('A');

		// than
		expect(targetGear).to.equal(gearI);
	});

});