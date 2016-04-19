let expect = require('chai').expect;
let sinon = require('sinon');

let indexImpl = require('../../main/index/index-impl');
let info = require('../../main/index/info');

describe('Index implementation', () => {

	describe('GET request', () => {

		it('should send info object to json method', () => {
			let req = {};
			let res = {};
			let spy;

			spy = res.json = sinon.spy();

			indexImpl.get(req, res);

			expect(spy.calledWith(info));
		});
	});
});