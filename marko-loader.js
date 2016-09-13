var marko = require('marko/compiler');

module.exports = function (source) {
	return marko.compile(source, '.', {
		writeToDisk: false
	})
}
