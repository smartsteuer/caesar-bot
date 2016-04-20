let request = require("request");

const FB_ACCESS_TOKEN = "EAAWdYsStVAoBAFYgMQsmCDYZCXYq1Rb52tMlGSuHq7bFOOAX6yQmD1YZA2yzJ0KZCqpl6n0j5n6a7iG9F0ipDMiAapw7RjHqENARUy9FaAZAUpDZCZAEUVmW6ph2gxRyl3KRaceFPjvDC7KfCPpJDgdumZAMMh21E4wbSZBPL4tcfgZDZD";

function webhookPost(req, res) {
	let messaging_events = req.body.entry[0].messaging;
	let event, sender, text;

	for (var i of messaging_events) {
		event = messaging_events[i];
		sender = event.sender.id;
		if (event.message && event.message.text) {
			text = event.message.text;
			// Handle a text message from this sender
			sendTextMessage(sender, text);
		}
	}
	res.sendStatus(200);
}


function sendTextMessage(sender, text) {
	let messageData = {
		text: text
	};
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token: FB_ACCESS_TOKEN},
		method: 'POST',
		json: {
			recipient: {id: sender},
			message: messageData
		}
	}, (error, response/*, body*/) => {
		if (error) {
			console.log('Error sending message: ', error);
		} else if (response.body.error) {
			console.log('Error: ', response.body.error);
		}
	});
}

module.exports = webhookPost;
