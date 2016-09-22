window.onload = function() {
	var clock = document.getElementById("clock")
    , targetDate = new Date(2016, 08, 21, 17); // Jan 1, 2050;
 
  clock.innerHTML = countdown(targetDate).toString();
  setInterval(function(){
    clock.innerHTML = countdown(targetDate).toString();
  }, 1000);
	//startTime();
};
/*function startTime() {
     var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500); 
	
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}  */

