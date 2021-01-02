function displayTime(d, h, m, s, ms) {
    //displays the string
    d = (d < 10) ? "0" + d : d;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    ms = (ms < 100) ? ms + "0" : ms;

    time = d + "d :" + h + "h :" + m + "m :" + s + "s :" + ms + "ms";
    document.getElementById("timeDisplay").innerHTML = time;
}

function addTime() {
    //incriments the stopwatch internal time
    ms += 1;
    if (ms > 99) { ms = 0; s += 1; }
    if (s > 59) { s = 0; m += 1; }
    if (m > 59) { m = 0; h += 1; }
    if (h > 24) { h = 0; d += 1; }

    displayTime(d, h, m, s, ms); 
}

function startTime() {
    //starts the stopwatch while hiding unneeded butons
    start.style.display = "none";
    reset.style.display = "none";
    stop.style.display = "block";
    lap.style.display = "block";
    timer = setInterval(function(){addTime()}, 10);
}

function stopTime() { 
    //stop the stopwatch while hiding unneeded butons
    stop.style.display = "none";
    lap.style.display = "none";
    reset.style.display = "block";
    start.style.display = "block";
    clearInterval(timer);
}

function resetTime() { 
    //sets stopwatch to zero
    d = h = m = s = ms = lapNum = 0;
    lapDiv.innerHTML = "";
    displayTime(d, h, m, s, ms);
}

function lapTime() {
    lapNum += 1
    lapDiv.innerHTML += "<p>Lap " + lapNum + ": " + time + "</p>";
}

var d = h = m = s = ms = lapNum = 0;
var time = timer = null;

var start = document.getElementById("startbtn");
var stop = document.getElementById("stopbtn");
var reset = document.getElementById("resetbtn");
var lap = document.getElementById("lapbtn");
var lapDiv = document.getElementById("lapTimes");