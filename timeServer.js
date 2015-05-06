var net = require('net');

var server = net.createServer(function(socket){
	var date = new Date();
	date.setMonth(5);
	var month = addZero(date.getMonth());
	var day = addZero(date.getDate());
	socket.end(date.getFullYear() +'-'+ month +'-'+ day +' '+date.getHours()+':'+date.getMinutes()+
		'\n');
});
server.listen(process.argv[2]);

function addZero(int){
	var newDate = '0'+int;
	return newDate;
}