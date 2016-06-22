let request = require("request");

const FB_ACCESS_TOKEN = "EAAPbJ9GulzQBAKOOo5gD4EAtEYTI3Oj7xhtbB3ChUvfYd9oCZBIs7QnJ1AEevbZCwam0IdnjYzlZCJ286scYgabnF0twdvYmz9RiebxmaMHdLE7wGQ5eUlXVRF9FtYw0LfvWx9p811bzbX2mKdepgP42Co5GZBZBrpKdbyB3rPgZDZD";


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
		qs: {access_token: FB_ACCESS_TOKEN},
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
