$(document).ready(function(){

    function displayTime() {
        //displays the string
        if (d[0] != 0 && d < 10) { d = "0" + d;}
        if (h[0] != 0 && h < 10) { h = "0" + h;}
        if (m[0] != 0 && m < 10) { m = "0" + m;}
        if (s[0] != 0 && s < 10) { s = "0" + s;}

        time = d + "d :" + h + "h :" + m + "m :" + s + "s :" + ms + "0 ms";
        $("#timeDisplay").text(time);
    }

    function addTime() {
        //incriments the stopwatch internal time
        ms += 1;
        if (ms > 99) { ms = 0; s = parseInt(s) + 1; }
        if (s > 59) { s = 0; m = parseInt(m) + 1; }
        if (m > 59) { m = 0; h = parseInt(h) + 1; }
        if (h > 24) { h = 0; d = parseInt(d) + 1; }

        displayTime(); 
    }

    $("#startbtn").click(function(){
        //starts the stopwatch while hiding unneeded butons
        $(this).hide();
        $("#resetbtn").hide();
        $("#stopbtn").show();
        $("#lapbtn").show();
        timer = setInterval(function(){addTime()}, 10);
    });

    $("#stopbtn").click(function(){
        //stop the timer while hiding unneeded butons
        $(this).hide();
        $("#lapbtn").hide();
        $("#resetbtn").show();
        $("#startbtn").show();
        clearInterval(timer);
    });

    $("#resetbtn").click(function(){ 
        //sets stopwatch to zero
        d = h = m = s = ms = lapNum = 0;
        $("#lapTimes").text("");
        displayTime();
    });

    $("#lapbtn").click(function(){
        lapNum += 1;
        $("#lapTimes").append("<p>Lap " + lapNum + ": " + time + "</p>");
    });

    var d = h = m = s = ms = lapNum = 0;
    var timer = null;
    displayTime();

});