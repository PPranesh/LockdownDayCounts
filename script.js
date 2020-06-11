var countDate = new Date('Mar 25, 2020 00:00:00 UTC').getTime();

function lockdownContinues() {
	
	var startDate, today;  

  startDate = new Date( "Mar 25, 2020 00:00:00" );
  //console.log(""+startDate);

  today = new Date();
  //console.log(""+today);

  var res = Math.abs(startDate - today) / 1000;
   
  // get total days between two dates
  var days = Math.floor(res / 86400);
   
  // get hours        
  var hours = Math.floor(res / 3600) % 24;        
   
  // get minutes
  var minutes = Math.floor(res / 60) % 60;

  // get seconds
  var seconds = Math.floor(res % 60);


	document.getElementById('day').innerText = days;
	document.getElementById('hour').innerText = hours;
	document.getElementById('minute').innerText = minutes;
	document.getElementById('second').innerText = seconds;
}

setInterval(function(){
	lockdownContinues();
},1000);