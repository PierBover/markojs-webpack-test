const path = require('path');

const options = {
	entry: {
		app: path.join(__dirname, 'index.js')
	},
	output: {
		filename: path.join(__dirname, 'build.js')
	},
	resolveLoader: {
		alias: {
			"marko-loader": path.join(__dirname, "./marko-loader.js")
		}
	},
	module: {
		loaders:[
			{ test: /\.marko$/, loader: 'marko-loader' }
		]
	}
}

module.exports = options;
