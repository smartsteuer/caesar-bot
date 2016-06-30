// let caesar = require('')
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
		console.log(text);
		// Handle a text message from this sender
		try {
			let arabic = fromRoman(text);
			result = "In Deiner Welt sind es " + arabic
		} catch (e) {
			console.log(e.message)
		}

		if(!result) {
			result = "Schreibt mir einfach eine Zahl, welche ich übersetzten soll."
		}
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

function fromRoman(roman) {
  let r = roman.toUpperCase();
  let n = 0;
	let v = 0;

	while (r !== "") {
		let len = 1;
		switch(r.substr(0, 1)) {
    case 'M':
      v = 1000;
      break;
    case 'D':
      v = 500;
      break;
		case 'C':
		  if (r.startsWith("CM")) {
				v = 900;
				len = 2;
			} else if (r.startsWith("CD")) {
				v = 400;
				len = 2;
			} else {
				v = 100;
			}
		  break;
		case 'X':
			if (r.startsWith("XC")) {
				v = 90;
				len = 2;
			} else if (r.startsWith("XL")) {
				v = 40;
				len = 2;
			} else {
				v = 10;
			}
			break;
		case 'L':
			v = 50;
			break;
		case 'I':
			if (r.startsWith("IX")) {
				v = 9;
				len = 2;
			} else if (r.startsWith("IV")) {
				v = 4;
				len = 2;
			} else {
				v = 1;
			}
			break;
		case 'V':
			v = 5;
			break;
    default:
        throw new Error("invalid roman numerals: " + roman);
		}

		n += v;
		r = r.slice(len, r.length);
	}
	return n;
}


module.exports = webhookPost;
