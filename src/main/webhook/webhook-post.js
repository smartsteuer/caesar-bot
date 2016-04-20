let sendTextMessage = require('./fb-send-message');


function getFirstMessaging(req) {
	console.log(req.body);
	return req.body.entry[0].messaging;
}

var handleMessagingEvent = function (event) {
	let sender, text;

	sender = event.sender.id;
	if (event.message && event.message.text) {
		text = event.message.text;
		// Handle a text message from this sender
		sendTextMessage(sender, text);
	}
};

function webhookPost(req, res) {
	let messaging_events = getFirstMessaging(req);
	let i;

	for (i = 0; i < messaging_events.length; i++) {
		handleMessagingEvent(messaging_events[i]);
	}
	res.sendStatus(200);
}

module.exports = webhookPost;