let request = require("request");

const FB_ACCESS_TOKEN = "EAAWdYsStVAoBAFYgMQsmCDYZCXYq1Rb52tMlGSuHq7bFOOAX6yQmD1YZA2yzJ0KZCqpl6n0j5n6a7iG9F0ipDMiAapw7RjHqENARUy9FaAZAUpDZCZAEUVmW6ph2gxRyl3KRaceFPjvDC7KfCPpJDgdumZAMMh21E4wbSZBPL4tcfgZDZD";

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

module.exports = sendTextMessage;