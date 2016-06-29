let request = require("request");


function errorHandler(error, response/*, body*/) {
	if (error) {
		console.log('Error sending message: ', error);
	} else if (response.body.error) {
		console.log('Error: ', response.body.error);
	}
}

function sendTextMessage(sender, text) {
	let messageData = {
		text: text
	};
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token: process.env.FB_ACCESS_TOKEN},
		method: 'POST',
		json: {
			recipient: {id: sender},
			message: messageData
		}
	}, errorHandler);
}

module.exports = {
	sendTextMessage: sendTextMessage,
	_errorHandler: errorHandler
};
