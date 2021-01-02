function displayTime() {
    //displays the string
    if (h[0] != "0" && h < 10) { h = "0" + h;}
    if (m[0] != "0" && m < 10) { m = "0" + m;}
    if (s[0] != "0" && s < 10) { s = "0" + s;}

    time = h + "h :" + m + "m :" + s + "s";
    document.getElementById("timeDisplay").innerHTML = time;
}

function enterTime() {
    //sets the timer

    var numRegex = /\d/.test(h);  //adding regex to test for invalid inputs

    h = document.getElementById("hrs").value;
    m = document.getElementById("mins").value;
    s = document.getElementById("secs").value;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("enterTimeDisplay").style.display = "none";
    enter.style.display = "none";
    document.getElementById("timeDisplay").style.display = "block";
    start.style.display = reset.style.display = "block";
    displayTime(); 
}

function subTime() {
    //decriments the timer
    s -= 1;
    if (s < 1) { s = 59; m -= 1; }
    if (m < 1) { m = 59; h -= 1; }

    displayTime(); 
}

function startTime() {
    //starts the timer while hiding unneeded butons
    start.style.display = "none";
    reset.style.display = "none";
    stop.style.display = "block";
    timer = setInterval(function(){subTime()}, 1000);
}

function stopTime() { 
    //stop the timer while hiding unneeded butons
    stop.style.display = "none";
    reset.style.display = "block";
    start.style.display = "block";
    clearInterval(timer);
}

function resetTime() { 
    //clear timer values
    h = m = s = ms = null;
    document.getElementById("enterTimeDisplay").style.display = "flex";
    enter.style.display = "block";
    document.getElementById("timeDisplay").style.display = "none";
    start.style.display = reset.style.display = "none";
}

var h = m = s = 0;
var time = timer = null;

var start = document.getElementById("startbtn");
var stop = document.getElementById("stopbtn");
var reset = document.getElementById("resetbtn");
var enter = document.getElementById("enterbtn");