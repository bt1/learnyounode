var numbers = process.argv;
var total = 0;
function sum(anArray){
	for (var i = 2; i < anArray.length; i++) {
		 total += Number(anArray[i]);
	};
	return total;
}

console.log(sum(numbers));
