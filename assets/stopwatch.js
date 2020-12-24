function displayTime(d, h, m, s, ms) {

    d = (d < 10) ? "0" + d : d;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    ms = (ms < 100) ? ms + "0" : ms;

    time = d + "d :" + h + "h :" + m + "m :" + s + "s :" + ms + "ms";
    document.getElementById("stopwatchDisplay").innerHTML = time;
}

function addTime() {
    ms += 1;

    if (ms > 99) { ms = 0; s += 1; }
    if (s > 59) { s = 0; m += 1; }
    if (m > 59) { m = 0; h += 1; }
    if (h > 24) { h = 0; d += 1; }

    displayTime(d, h, m, s, ms); 
}

function startTime() {
    start.style.display = "none";
    reset.style.display = "none";
    stop.style.display = "block";
    lap.style.display = "block";
    timer = setInterval(function(){addTime()}, 10);
}

function stopTime() {
    stop.style.display = "none";
    lap.style.display = "none";
    reset.style.display = "block";
    start.style.display = "block";
    clearInterval(timer);
}

function resetTime() {
    d = 0;
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    lapNum = 0;
    lapDiv.innerHTML = "";
    displayTime(d, h, m, s, ms);
}

function lapTime() {
    lapNum += 1
    lapDiv.innerHTML += "<p>Lap " + lapNum + ": " + time + "</p>";
}

var d = 0;
var h = 0;
var m = 0;
var s = 0;
var ms = 0;
var lapNum = 0;
var time = null;
var timer = null;

var start = document.getElementById("startbtn");
var stop = document.getElementById("stopbtn");
var reset = document.getElementById("resetbtn");
var lap = document.getElementById("lapbtn");
var lapDiv = document.getElementById("lapTimes");

start.addEventListener('click', startTime());
stop.addEventListener('click', stopTime());
reset.addEventListener('click', resetTime());
lap.addEventListener('click', lapTime());