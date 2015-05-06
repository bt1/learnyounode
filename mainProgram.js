var myModule = require('./printFiles.js');
var dir = process.argv[2];
var ext = process.argv[3];

myModule(dir,ext, function(err, list){
	if (err) {
		console.log('Error:'+ err);
	}
	else{
		list.forEach(function(file){
			console.log(file);
		});
	}
});