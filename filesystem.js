var fs = require('fs');
var fileName = process.argv[2];
var buf;
var bufferString;
var lineCount;
var	stringLength;

var numberOfLines = 0;

buf = fs.readFile(fileName, function callback(err, data){
	if (err) {
		console.log(err);
	}
	else{
		var numberOfLines = data.toString().split('\n').length -1;
		// bufferString = data.toString();
		// stringLength = bufferString.length;

		// //Find number of lines

		// for (var i = 0; i < stringLength; i++) {
		// 	if (bufferString.charAt(i) == '\n') {
		// 		numberOfLines++;
		// 	}
		// }
		console.log(numberOfLines);

	}
});

