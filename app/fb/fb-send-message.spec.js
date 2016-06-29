let expect = require('chai').expect;
let mockRequire = require('proxyquire');
let MockConsole = require('../test-util/mock-console');


describe('Sending facebook messages', () => {

	let requestCallArguments;

	let fbSendMessage = mockRequire('./fb-send-message', {
		'request': (options, callback) => {
			requestCallArguments = {
				options: options,
				errorCallback: callback
			}
		}
	});

	describe('Send text message', () => {

		beforeEach(() => {
			requestCallArguments = {};
			fbSendMessage.sendTextMessage('sendId', 'text of message to send.');
		});

		it('should call the fb url', () => {
			expect(requestCallArguments.options.url).to.equal("https://graph.facebook.com/v2.6/me/messages");
		});

		it('should provide an access token', () => {
			expect(requestCallArguments.options.qs.access_token).to.be.a('string');
		});

		it('should use the POST method', () => {
			expect(requestCallArguments.options.method).to.equal('POST');
		});

		it('should address the sender', () => {
			expect(requestCallArguments.options.json.recipient.id).to.equal('sendId');
		});

		it('should send the text as text', () => {
			expect(requestCallArguments.options.json.message.text).to.equal('text of message to send.');
		});

		it('should provice an error handler', () => {
			//noinspection BadExpressionStatementJS
			expect(requestCallArguments.errorCallback).not.to.undefined;
		});

	});

	describe('Error handling', () => {

		let mockConsole = new MockConsole();

		beforeEach('reset log calls', () => {
			mockConsole.enable();
		});

		afterEach(() => {
			mockConsole.disable();
		});

		it('should log error objects', () => {

			let error = {error: "ERROR"};
			fbSendMessage._errorHandler(error);

			//noinspection BadExpressionStatementJS
			expect(mockConsole.logCalls).not.to.be.empty;
			expect(mockConsole.logCalls[0][0]).to.equal('Error sending message: ');
			expect(mockConsole.logCalls[0][1]).to.equal(error);
		});

		it('should log errors in the response', () => {

			let error = {error: "ERROR"};
			let res, body;
			res = body = {};
			res.body = body;
			body.error = error;
			fbSendMessage._errorHandler(undefined, res);

			//noinspection BadExpressionStatementJS
			expect(mockConsole.logCalls).not.to.be.empty;
			expect(mockConsole.logCalls[0][0]).to.equal('Error: ');
			expect(mockConsole.logCalls[0][1]).to.equal(error);
		});

		it('should not do anything if no error was found', () => {

			let res, body;
			res = body = {};
			res.body = body;
			fbSendMessage._errorHandler(undefined, res);

			//noinspection BadExpressionStatementJS
			expect(mockConsole.logCalls).to.be.empty;
		});
	})
});



