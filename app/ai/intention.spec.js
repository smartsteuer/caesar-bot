let expect = require('chai').expect;
let unroll = require('unroll');
let intention = require('./intention');

// wrap mochas it function
unroll.use(it);

describe('Intention', () => {
	unroll('should recognize #message as intention #intention.', (done, fixture) => {
		expect(intention(fixture.message)).to.be.equal(fixture.intention);
		done();
	}, [
			['message', 'intention'],

			// unknown
			['Ich weiß nicht was soll es bedeuten', 'unknown'],
			['', 'unknown'],
			[' ', 'unknown'],
			['grimpf', 'unknown'],
			['lasjfökladjf', 'unknown'],

			// hello
			['Hi', 'hello'],
			['Hi Steuermann', 'hello'],
			['Hi smartsteuer', 'hello'],
			['Sehr geehrte Damen und Herren', 'hello'],
			['Geehrter Typ', 'hello'],
			['Hallo Du', 'hello'],
			['hallo du', 'hello'],
			['moin moin', 'hello'],
			['moinsen', 'hello'],
			['tach', 'hello'],
			['tag', 'hello'],
			['Hey', 'hello'],
			['HI', 'hello'],
			['hi', 'hello'],

			// thanks
			['Danke', 'thanks'],
			['Vielen Dank', 'thanks'],
			['Dankeschön', 'thanks'],
			['Das war toll! danke!', 'thanks'],

			// bye
			['Und Tschüß!', 'bye'],
			['tschüss', 'bye'],
			['tschö', 'bye'],
			['ciao ciao', 'bye'],
			['Na, dann adios', 'bye'],
			['Auf wiedersehen', 'bye'],
			['Auf wiederhören', 'bye'],
			['Auf wiederlesen', 'bye'],
			['mach gut', 'bye'],
			['mach\'s gut', 'bye'],
			['machs gut', 'bye'],
			['machet jut', 'bye'],
			['mach et jut', 'bye']

			// // TODO: roman numbers
			// ["Kann ich meine Brille von der Steuer absetzen?", "offset"],
			// ["Kann ich eine brille von der Steuer absetzen?", "offset"],
			// ["Kann ich Telefonkosten von der Steuer absetzen?", "offset"],
			// ["Kann ich Telefonkosten abschreiben?", "offset"],
			// ["Kann ich Telefonkosten absetzen?", "offset"]

	])
});
