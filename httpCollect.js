var http = require('http');
var url = process.argv[2];
var collection = "";

http.get(url, function (response){
	response.setEncoding('utf8');
	response.on("data",function(data){
		
		collection = collection.concat(data);
	});
	response.on("end",function(){
		console.log(collection.length);
		console.log(collection);
	});
	response.on("error",console.error)

})