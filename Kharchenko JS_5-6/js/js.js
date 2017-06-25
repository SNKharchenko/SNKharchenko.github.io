(function() {
  //'use strict';
        
    var root = document.getElementById('root');
    
    var timeTable = document.createElement('div');
        timeTable.id = 'block';
        timeTable.classList.add('text-center', 'badge'); 
        timeTable.style.marginLeft = '450px';
        timeTable.style.display = 'inline-block';
        timeTable.style.marginBottom = '30px';
    
    var btnTable = document.createElement('div');
        btnTable.id = 'btn';
        btnTable.style.marginLeft = '400px'; 
    
    var startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('btn', 'btn-success', 'btn-lg', 'active');
        startBtn.setAttribute('type', 'button');
        startBtn.style.marginRight = '30px';
        startBtn.addEventListener('click', startTimer);
    
    var clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear';
        clearBtn.classList.add('btn', 'btn-danger', 'btn-lg', 'active');
        clearBtn.setAttribute('type', 'button');
        clearBtn.addEventListener('click', clearTimer);
    
    var timerText = document.createElement('p');
        timerText.textContent = '00:00:00';
    
   var timerMilSec = document.createElement('p');
        timerMilSec.textContent = '0';
        
    root.append(timeTable, btnTable);
    timeTable.append(timerText, timerMilSec);
    btnTable.append(startBtn, clearBtn);

var startTime = 0,
    oddsTime = 0,
    ourTime = 0,
    timeHours = 0,
    timeSec = 0,
    timerID = 0;


function countTime() {
	startTime = Date.now();        
        timerID = setInterval(function() {
            oddsTime = Date.now() - startTime;
            ourTime = new Date(oddsTime);
            ourTime.setHours(0);
            
                var hours = ourTime.getHours(),
                minutes = ourTime.getMinutes(),
                seconds = ourTime.getSeconds(),
                millisec = ourTime.getMilliseconds(); 
            
            if (hours < 10) {
			hoursNum = '0' + hours;    
		} else {
			hoursNum = hours;
    }
            if (minutes < 10) {
			 minutesNum = '0' + minutes;
		} else {
			minutesNum = minutes;
    }
            
            if (seconds < 10) {
			 secondsNum = '0' + seconds;
		} else {
			secondsNum = seconds;
    }    
            
            timeHours = hoursNum + ':' + minutesNum + ':' + secondsNum;
            timerText.textContent = timeHours; 
            
            timeSec = millisec;
            timerMilSec.textContent = timeSec;
            
            
        }, 1); 
    
}  
 	 
function startTimer(){
	startBtn.classList.add('btn-info');
	startBtn.classList.remove('btn-success');
	startBtn.textContent = 'Pause';
	countTime();
	startBtn.removeEventListener("click", startTimer);
	startBtn.addEventListener("click", pauseTimer);
}

function pauseTimer(){
	startBtn.classList.add('btn-success');
	startBtn.classList.remove('btn-info');
	startBtn.textContent = 'Cont..';
	clearInterval(timerID);
    timerText.textContent = timeHours;
    timerMilSec.textContent = timeSec;
	startBtn.removeEventListener('click', pauseTimer);
	startBtn.addEventListener('click', startTimer);
}

function clearTimer(){
	startBtn.textContent = 'Start';
	timerText.textContent = '00:00:00';
    timerMilSec.textContent = '0';
	clearInterval(timerID);
	startBtn.removeEventListener('click', pauseTimer);
	startBtn.addEventListener('click', startTimer);
	startTime = 0;
    oddsTime = 0;
    ourTime = 0;
    timeHours = 0;
    timeSec = 0;
    timerID = 0;
}
    
}) ();