
const hello = /(Hi|Hallo|Hey|Moin\w*|Tach|^\w*\bTag|(Sehr\b)?geehrte)/i;
const thanks = /Dank\w*/i;
const bye = /(Ciao|Bis bald|Adios|Auf Wieder|Bis denne|Tschü|Tschö|mach'?s?\W?(et)? (g|j)ut)/i;
const offset = /((von der Steuer )?(absetzen|abschreiben))/i;
// const help = //TODO
// const tax_filing = // TODO
		
module.exports = (message) => {

	if( hello.test(message)) {
		return 'hello';
	}
	else if(thanks.test(message)) {
		return "thanks";
	}
	else if(bye.test(message)) {
		return "bye";
	}
	else if(offset.test(message)) {
		return "offset";
	}
	return 'unknown';
};