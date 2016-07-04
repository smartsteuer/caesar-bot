const gearbox = require('./gearbox');
const Gear = require('./gear');

const idling = new Gear(/.*/, function (text) {
	console.log('Unhandled text: ' + text);
	return 'Beim Jupiter! Ich weiß nicht, wie ich Euch antworten soll. Würdet Ihr mir eine römische Zahl ' +
			'zum Übersetzen nennen, könnte ich Euch helfen.';
});

// things this bot does not - but could learn to:
// 1. preprocess incomming text
// - split sentences
// - normalize
// - auto correct typos
// - …
// 2. build a relationship with the user
// - store a context per user
// - remember the user when she returns
// - create dialogs - ask questions and react on the answers
// - learn what your users need the most
// - …
// 3. be more extensible
// - store gears somewhere else (db)
// - use web services to guess the intent of a user
// - …
function handleIncommingText(text) {
	let gearToHandle;

	try {
		gearToHandle = gearbox.findGearToHandle(text);
		if (gearToHandle) {
			return gearToHandle.execute(text);
		}
	} catch (e) {
		console.log('CaesarBot: Error while handling input.');
		console.log(e.message);
	}

	return idling.execute(text);
}

module.exports = {
	handleIncommingText
};
