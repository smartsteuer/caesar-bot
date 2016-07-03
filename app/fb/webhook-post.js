let caesar = require('../caesar/bot');
let sendTextMessage = require('./fb-send-message').sendTextMessage;


function getFirstMessaging(req) {
	return req.body.entry[0].messaging;
}

function handleMessagingEvent(event) {
	let sender, text;
	sender = event.sender.id;
	if (event.message && event.message.text) {
		let result;
		text = event.message.text;
		// Handle a text message from this sender
		result = caesar.handleIncommingText(text);
		sendTextMessage(sender, result);
	}
}

function webhookPost(req, res) {
	let messaging_events = getFirstMessaging(req);
	let i;

	for (i = 0; i < messaging_events.length; i++) {
		handleMessagingEvent(messaging_events[i]);
	}
	res.sendStatus(200);
}


module.exports = webhookPost;
