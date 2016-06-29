module.exports = class MockConsole {
	constructor() {
		this.orgLogMethod = this.getOriginalLogMethod();
		this.logCalls = [];
	}

	getOriginalLogMethod() {
		if (this.orgLogMethod === undefined) {
			return console.log;
		} else {
			return this.orgLogMethod;
		}
	}

	enable() {
		this.logCalls = [];
		console.log = (...args) => {
			this.logCalls.push(args)
		};
	}

	disable() {
		console.log = this.orgLogMethod;
	}

};
