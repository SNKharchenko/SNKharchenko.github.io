(function() {
  //'use strict';
    
    var root = document.getElementById('root');
    
    var timeTable = document.createElement('div');
        timeTable.id = 'block';
        timeTable.classList.add('text-center', 'badge'); 
        timeTable.style.marginLeft = '430px';
        timeTable.style.marginBottom = '30px';
    
    var btnTable = document.createElement('div');
        btnTable.id = 'btn';
        btnTable.classList.add('col-md-2', 'col-md-offset-5', 'text-center'); 
    
    var startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('btn', 'btn-success', 'btn-lg', 'active');
        startBtn.setAttribute('type', 'button');
        startBtn.style.marginRight = '30px';
    
    var clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear';
        clearBtn.classList.add('btn', 'btn-danger', 'btn-lg', 'active');
        clearBtn.setAttribute('type', 'button');
    
    var timerText = document.createElement('p');
        timerText.textContent = '00:00:00';
    
   var timerMilSec = document.createElement('p');
        timerMilSec.textContent = '0';
        
    root.append(timeTable, btnTable);
    timeTable.append(timerText, timerMilSec);
    btnTable.append(startBtn, clearBtn);
    
    var startTime = null,
        timerID = null,
        oddsTime = null,
        ourTime = null,
        active = false;
    
    
     
    startBtn.addEventListener('click', function () {
        if (!active) startTime = Date.now();
                    
        timerID = setInterval(function getTime() {
            oddsTime = Date.now() - startTime;
            ourTime = new Date(oddsTime);
            ourTime.setHours(0);
            
            var hours = ourTime.getHours(),
                minutes = ourTime.getMinutes(),
                seconds = ourTime.getSeconds();
            
            if (hours < 10) {
			var hoursNum = '0' + hours;    
		} else {
			hoursNum = hours;
    }
            if (minutes < 10) {
			var minutesNum = '0' + minutes;
		} else {
			minutesNum = minutes;
    }
            
            if (seconds < 10) {
			var secondsNum = '0' + seconds;
		} else {
			secondsNum = seconds;
    }

            timerMilSec.textContent = ourTime.getMilliseconds();
            timerText.textContent= hoursNum + ':' + minutesNum + ':' + secondsNum;
            
        }, 1); 
        
    
     if (startBtn === 'Start') {
		getTime();
		startBtn.textContent = 'Pause';
        startBtn.classList.remove('btn', 'btn-success', 'btn-lg', 'active');
         startBtn.classList.add('btn', 'btn-info', 'btn-lg', 'active');
         
    } else if (startBtn === 'Pause') {
		stopTimer();
		startBtn.textContent = 'Cont..';
    }else if (startBtn === 'Cont..'){
        getTime();
        startBtn.textContent = 'Pause'; 
        startBtn.classList.remove('btn', 'btn-success', 'btn-lg', 'active');
         startBtn.classList.add('btn', 'btn-info', 'btn-lg', 'active');
        }
    });
    
    function stopTimer() {
          clearInterval(timerID);
          active = false;
        }
    	
    
 /*   function startTimer(){
	startBtn.textContent = 'Pause';
	var timer = setInterval(timerID, 1);
}
    startBut.removeEventListener('click', startTimer);
	startBut.addEventListener('click', pauseTimer);
    

function pauseTimer(){
	startBtn.textContent = 'Continue';
	clearInterval(timer);
    timeTable.textContent = time;
	startBtn.removeEventListener('click', pauseTimer);
	startBtn.addEventListener('click', startTimer);
}*/
 

    clearBtn.addEventListener('click', function () {
        clearInterval(timerID);
        timerText.textContent = "00:00:00";
	    startBtn.textContent = "start";
        timerMilSec.textContent = '0';
        active = false;
        oddsTime = 0;
}) ; 
    
      
   /* function resetTimer() {
	  active = false;
	  clearInterval(timerID);
	  timerText.textContent = "00:00:00";
      startBtn.textContent = "start";
      timerMilSec.textContent = '0';
	}
    
    clearBtn.addEventListener('click', resetTimer);*/
    
}) ();