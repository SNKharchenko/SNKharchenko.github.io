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





