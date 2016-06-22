
function webhookGet(req, res) {
	if (req.query['hub.verify_token'] === 'AveCaesar') {
		res.send(req.query['hub.challenge']);
	} else {
		res.send('Error, wrong validation FB_ACCESS_TOKEN');
	}
}

module.exports = webhookGet;
