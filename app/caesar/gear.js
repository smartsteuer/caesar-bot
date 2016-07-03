
class Gear {

	constructor(regex, action) {
		this.regex = regex;
		this.action = action;
	}

	execute( text ) {
		return this.action(text);
	}
	
	static randomAnswer( alternatives ) {
		let index = Math.floor((Math.random() * alternatives.length));
		return alternatives[index];
	}

}

module.exports = Gear;