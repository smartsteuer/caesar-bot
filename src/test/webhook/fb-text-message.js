let jsonBody = require('./fb-text-message.json');

function cloneJson(json) {
	return JSON.parse(JSON.stringify(json));
}

function textMessage(text) {
	let json = cloneJson(jsonBody);
	json.entry[0].messaging[0].message.text = text;
	return json;
}

module.exports = textMessage;