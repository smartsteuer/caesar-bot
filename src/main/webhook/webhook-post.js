(function(){

	var webhookPost = function (req, res) {
		var messaging_events = req.body.entry[0].messaging;
		var event, sender,i;

		for (i = 0; i < messaging_events.length; i++) {
			event = req.body.entry[0].messaging[i];
			sender = event.sender.id;
			if (event.message && event.message.text) {
				text = event.message.text;
				// Handle a text message from this sender
				console.log("received text: " + text)
			}
		}
		res.sendStatus(200);
	};

	module.exports = webhookPost;

})();
