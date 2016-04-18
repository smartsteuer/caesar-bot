var expect = require('chai').expect;
var sinon = require('sinon');

var indexImpl = require('../../main/index/index-impl');
var info = require('../../main/index/info');

describe('Index implementation', function() {

	describe('GET request', function () {

		it('should send info object to json method', function () {
			var req,res,spy;

			req = res = {};
			spy = res.json = sinon.spy();

			indexImpl.get(req, res);

			expect(spy.calledWith(info));
		});
	});
});