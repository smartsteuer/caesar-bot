const matcher = /(\w*?) (von der Steuer absetzen|absetzen|abschreiben)/i;

module.exports = (text) => {
	let result = matcher.exec(text);
	if( null === result ) {
		return null;
	}
    return result[1];
};