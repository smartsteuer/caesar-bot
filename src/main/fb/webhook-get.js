
function webhookGet(req, res) {
	if (req.query['hub.verify_token'] === 'smarties') {
		res.send(req.query['hub.challenge']);
	}
	res.send('Error, wrong validation FB_ACCESS_TOKEN');
}

module.exports = webhookGet;