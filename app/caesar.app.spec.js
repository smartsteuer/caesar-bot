let request = require('supertest');
let http = require('http');

describe('Smoke testing running app', function () {
	let app, server;

	beforeEach(function () {
		delete require.cache[require.resolve('./caesar.app')];
		app = require('./caesar.app');
		server = http.createServer(app);
		server.listen();
	});

	afterEach(function (done) {
		server.close(done);
	});

	it('responds to /', function testSlash(done) {
		request(server)
				.get('/')
				.expect(200, done);
	});

	it('404 everything else', function testPath(done) {
		request(server)
				.get('/foo/bar')
				.expect(404, done);
	});
});