var template = require('./template.marko')

var data = {
	msg:"Hello Marko!"
}

template.render(data,function (err,output) {
	console.log(output);
})
