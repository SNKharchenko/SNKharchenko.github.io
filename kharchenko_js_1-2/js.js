//1

function pow(x, n){
	var result = 1; 
	
	for (var i = 0; i < n; i++){
		
	result *= x;} 
		
	return result;
}

var x = prompt("Enter a number", '');

var n = prompt("Enter a power of number", '');

var resultPow = pow(x, n);

console.log(resultPow);






