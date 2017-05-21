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

//2

var arr=[];
 for (var i = 0; i < 5; i++){
	 arr[i] = prompt('Enter the name');
 }
 
 var userName = prompt('what is your name?');
 
 for (var i = 0; i < 5; i++){
	 if (arr[i] == userName){
		 alert(userName + ' you have entered successfully!');
	 }else{
		 alert('error');
	 }
 }





