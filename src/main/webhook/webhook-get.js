
 var webhookGet = function(req, res) {
	 if (req.query['hub.verify_token'] === 'smarties') {
		 res.send(req.query['hub.challenge']);
	 }
	 res.send('Error, wrong validation token');
};

module.exports = webhookGet;