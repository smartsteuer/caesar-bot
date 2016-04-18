var expect = require('chai').expect;
var sinon = require('sinon');

var webhookGet = require('../../main/webhook/webhook-get');

describe('Webhook GET', function() {

	var req,res,res_send;

	beforeEach('set up request and response stubs', function () {
		req = res = {};

		req.query = [];
		req.query['hub.verify_token'] = 'smarties';
		req.query['hub.challenge'] = 'challenge';

		res_send = res.send = sinon.spy();
	});

	it('should look for the Verify Token and respond with the challenge sent in the verification request', function () {

		webhookGet(req, res);
		expect(res_send.calledWith('challenge'));
	});

	it('should look for the Verify Token and respond with error if the token is wrong', function () {

		req.query['hub.verify_token'] = 'wrong token';

		webhookGet(req, res);
		expect(res_send.calledWith('Error, wrong validation token'));
	});
});