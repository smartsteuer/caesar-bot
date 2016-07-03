const Gear = require('../gear');



class XGear extends Gear {
	constructor() {
		super(/\b(?=[MDCLXVI])(M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3}))(\W|$)/,
				(text) => {
					let match = text.match(this.regex);

					if( match ) {
						let arabic = XGear.translate(match[1]);
						return 'In Eurer Welt sind dies ' + arabic;
					} else {
						return 'Dies vermag ich nicht zu übersetzen';
					}
				});
	}

	static translate(roman) {
		let r = roman;
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
}

module.exports = new XGear( );
