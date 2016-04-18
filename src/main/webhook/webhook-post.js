var request = require("request");


var webhookPost = function (req, res) {
	console.log(JSON.stringify(req.body, null, 2));
	var messaging_events = req.body.entry[0].messaging;
	var event, sender,i;

	for (i = 0; i < messaging_events.length; i++) {
		event = messaging_events[i];
		sender = event.sender.id;
		if (event.message && event.message.text) {
			text = event.message.text;
			// Handle a text message from this sender
			console.log("received text: " + text);
			sendTextMessage(sender, text);
		}
	}
	res.sendStatus(200);
};

var token = "EAAWdYsStVAoBAFYgMQsmCDYZCXYq1Rb52tMlGSuHq7bFOOAX6yQmD1YZA2yzJ0KZCqpl6n0j5n6a7iG9F0ipDMiAapw7RjHqENARUy9FaAZAUpDZCZAEUVmW6ph2gxRyl3KRaceFPjvDC7KfCPpJDgdumZAMMh21E4wbSZBPL4tcfgZDZD";

function sendTextMessage(sender, text) {
	var messageData = {
		text: text
	};
	request({
		uri: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending message: ', error);
		} else if (response.body.error) {
			console.log('Error: ', response.body.error);
		}
	});
}

module.exports = webhookPost;
