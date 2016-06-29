let expect = require('chai').expect;
let mockRequire = require('proxyquire');
let mockTextMessage = require('./incomming-test-message');


describe('Webhook POST', () => {

	let req,res,sendMessage,statusCode;

	let webhookPost = mockRequire('./webhook-post', {
		'./fb-send-message': {
			sendTextMessage: (sender, text) => {
				sendMessage = {
					sender: sender,
					text: text
				}
			}
		}

	});

	beforeEach('set up request and response stubs', () => {
		req = {};
		req.body = mockTextMessage("XIV");

		res = {};
		statusCode = null;
		res.sendStatus = (code) => {
			statusCode = code;
		};

		sendMessage = null;
	});

	it('should send status 200', () => {

		webhookPost(req, res);

		expect(statusCode).to.equal(200);
	});


	it('should send result back to sender', () => {

		webhookPost(req, res);

		//noinspection BadExpressionStatementJS
		expect(sendMessage).not.to.be.null;
		expect(sendMessage.sender).to.be.equal(1135310036513916);
		expect(sendMessage.text).to.be.equal("In Deiner Welt sind es 14");
	});

	it('should only respond if a text messages is present', () => {
		req.body.entry[0].messaging[0].message.text = undefined;

		webhookPost(req, res);

		//noinspection BadExpressionStatementJS
		expect(sendMessage).to.be.null;

		expect(statusCode).to.equal(200);
	});

	it('should only respond if a messages is present', () => {
		req.body.entry[0].messaging[0].message = undefined;

		webhookPost(req, res);

		//noinspection BadExpressionStatementJS
		expect(sendMessage).to.be.null;

		expect(statusCode).to.equal(200);
	});

	it('should work if messaging is empty', () => {
		req.body.entry[0].messaging = [];

		webhookPost(req, res);

		//noinspection BadExpressionStatementJS
		expect(sendMessage).to.be.null;

		expect(statusCode).to.equal(200);
	});

});
