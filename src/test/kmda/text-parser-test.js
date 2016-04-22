let expect = require('chai').expect;
let unroll = require('unroll');

let kmdaTextParser = require('../../main/kmda/text-parser');

unroll.use(it);

describe('Text parsing', () => {
	unroll('should parse #input into #output', (done, fixture) => {
		expect(kmdaTextParser(fixture.input)).to.be.equal(fixture.output);
		done();
	},[
		['input', 'output'],
		["Kann ich meine Brille von der Steuer absetzen?", "Brille"],
		["Kann ich eine brille von der Steuer absetzen?", "brille"],
		["Kann ich Telefonkosten von der Steuer absetzen?", "Telefonkosten"],
		["Kann ich Telefonkosten abschreiben?", "Telefonkosten"],
		["Kann ich Telefonkosten absetzen?", "Telefonkosten"],
		["Kann ich Mist?", null]
	] );
});
