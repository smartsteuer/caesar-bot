let template = require('./incomming-test-message.template.json');

function cloneJson(json) {
	return JSON.parse(JSON.stringify(json));
}

function textMessage(text) {
	let json = cloneJson(template);
	json.entry[0].messaging[0].message.text = text;
	return json;
}

module.exports = textMessage;