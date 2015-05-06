var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];
var buffer;

buffer = fs.readdir(dir, function callback(err, list){
	if (err) {
		console.log('The error is:'+err);
	}
	else{
		list.forEach(function(file){
			if (file.indexOf('.'+ext) > -1){
				console.log(file);
			}
		});
	}
});

