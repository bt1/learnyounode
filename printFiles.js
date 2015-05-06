var fs = require('fs');
var newList = [];

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function (err, list){
		if (err) {
			return callback(err);
		}
		else{
			list.forEach(function(file){
				if (file.indexOf('.'+ ext) > -1){
					newList.push(file);
				}
			});
			return callback(null, newList);
		}
	});
}