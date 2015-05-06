var http = require('http');
var results = [];
var count = 0;

for (var i = 0; i < 3; i++) {
  	httpGet(i);
 };


function printResult(){
	for (var i = 0; i < 3; i++){
		console.log(results[i]);
	}
}

function httpGet(index){
	http.get(process.argv[index + 2], function(res){
		res.setEncoding('utf8');
		res.on('error', console.error);
		results[index] = ''

		res.on('data', function(data){
			results[index] += data;
		});

		res.on('end', function(data){
			count++;
			if (count == 3) {
				printResult();
			};

		})
	})
}
