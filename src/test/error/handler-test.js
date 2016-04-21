let expect = require('chai').expect;

let errorHandler = require('../../main/error/handler');

function createMockResponse() {
	let res = {};
	res.status = (code) => {
		res._status = code;
	};
	res.json = (data) => {
		res._json = data;
	};
	return res;
}

describe('App error handler', () => {

	let req, res, error, status, json;

	describe('404', () => {

		let next = (arg) => {
			error = arg;
		};

		beforeEach(() => {
			error = undefined;
		});

		it('should call next', () => {
			errorHandler.create404(req, res, next);

			//noinspection BadExpressionStatementJS
			expect(error).not.to.be.undefined;
		});

		it('should create a new error', () => {
			errorHandler.create404(req, res, next);

			expect(error).to.be.a('Error');
		});
		it('should set status to 404', () => {
			errorHandler.create404(req, res, next);

			expect(error.status).to.be.equal(404);
		});
	});

	describe('Send error for developers', () => {

		beforeEach(() => {
			res = createMockResponse();
			error = new Error('Error message');
		});

		it('should set default status 500', () => {
			errorHandler.sendErrorDev(error, req, res);

			expect(res._status).to.be.equal(500);
		});

		it('should set status from error if available', () => {
			error.status = 403;
			errorHandler.sendErrorDev(error, req, res);

			expect(res._status).to.be.equal(403);
		});

		it('should send json with message and error object', () => {
			errorHandler.sendErrorDev(error, req, res);

			expect(res._json.message).to.be.equal(error.message);
			expect(res._json.error).to.be.equal(error);
		});

	});

	describe('Send error for prod', () => {

		beforeEach(() => {
			res = createMockResponse();
			error = new Error('Error message');
		});

		it('should send json with message and without error object', () => {
			errorHandler.sendErrorProd(error, req, res);

			expect(res._json.message).to.be.equal(error.message);
			expect(res._json.error).to.deep.equal({});
		});

	});
});