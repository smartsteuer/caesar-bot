let expect = require('chai').expect;
let sinon = require('sinon');
let mockery = require('mockery');

let webhookPost = require('../../main/webhook/webhook-post');

describe('Webhook GET', () => {

	let req,res,fbSendMessage, sendMessage;

	// mock the fb message
	fbSendMessage = (sender, text) => {
		sendMessage = new FbTextMessage(sender, text);
	};

	before('configure modules to mock', () => {
		mockery.registerMock('./fb-send-message', fbSendMessage);
		mockery.enable();
	});

	after(() => {
		mockery.disable();
	});

	beforeEach('set up request and response stubs', () => {
		req = res = {};

		req.query = [];
		req.query['hub.verify_token'] = 'smarties';
		req.query['hub.challenge'] = 'challenge';

		res_send = res.send = sinon.spy();
	});

	it('should look for the Verify Token and respond with the challenge sent in the verification request', () => {

		webhookPost(req, res);
		expect(res_send.calledWithMatch('challenge'));
	});

	it('should look for the Verify Token and respond with error if the FB_ACCESS_TOKEN is wrong', () => {

		req.query['hub.verify_token'] = 'wrong FB_ACCESS_TOKEN';

		webhookPost(req, res);
		expect(res_send.calledWithMatch('Error, wrong validation FB_ACCESS_TOKEN'));
	});
});

class FbTextMessage {
	constructor(sender, text) {
		this.sender = sender;
		this.text = text;
	}
}
