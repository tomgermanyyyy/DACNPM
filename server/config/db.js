const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

class PrivateServer {
	constructor() {
		mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
			.then(() => { console.log('MongoDB Connected...🎄') })
			.catch(err => {
				console.error(err.message);
				process.exit(1);
			})
	}
}

class GlobalServer {
	constructor() {
		throw new Error("Use GlobalServer.getInstance()");
	}
	static getInstance() {
		if (!GlobalServer.instance) {
			GlobalServer.instance = new PrivateServer();
		}

		return GlobalServer.instance;
	}
}

module.exports = GlobalServer
