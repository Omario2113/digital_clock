$(document).ready(function(){
    
    function displayTime() {
        //displays the time
        if (h[0] != "0" && h < 10) { h = "0" + h;}
        if (m[0] != "0" && m < 10) { m = "0" + m;}
        if (s[0] != "0" && s < 10) { s = "0" + s;}
      
        time = h + "h :" + m + "m :" + s + "s";
        $("#timeDisplay").text(time);
    }
      
    function subTime() {
        //decriments the timer
        s -= 1;
        if (s < 0 && m > 0) { s = 59; m -= 1; }
        else if (s < 0 && m == 0 && h > 0) { s = 59; m = 59; h -=1; }
        if (m < 0 && h > 0) { m = 59; h -= 1; }
        displayTime();

        //displays a message when the timer is done
        if (h == 0 && m == 0 && s == 0) {
            $("#timeDisplay").text("Time's Up!");
            $("#stopbtn").hide();
            $("#resetbtn").show();
            clearInterval(timer); 
        }
    }
      
    $("#enterbtn").click(function(){
        var numRegex = /\d/.test(h);  //adding regex to test for invalid inputs
    
        //gets value from user inputs
        h = $("#hrs").val();
        m = $("#mins").val();
        s = $("#secs").val();
        
        //carries entries over 60 min or secs
        if (s > 59) { s -= 60; m += 1;}
        if (m > 59) { m -= 60; h += 1;}

        //displays entries with 2 digits if less than 10
        h = (h < 10) ? "0" + h : h;
        h = (h == "0") ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        m = (m == "0") ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        s = (s == "0") ? "0" + s : s;
      
        $("#enterTimeDisplay").hide();
        $("#timeDisplay").show();
      
        $(this).hide();
        $("#startbtn").show();
        $("#resetbtn").show();
        displayTime(); 
    });
      
    $("#startbtn").click(function(){
        //starts the timer while hiding unneeded butons
        $(this).hide();
        $("#resetbtn").hide();
        $("#stopbtn").show();
        timer = setInterval(function(){subTime()}, 1000);
    });
      
    $("#stopbtn").click(function(){
        //stop the timer while hiding unneeded butons
        $(this).hide();
        $("#resetbtn").show();
        $("#startbtn").show();
        clearInterval(timer);
    });
      
    $("#resetbtn").click(function(){ 
        //clear timer
        h = m = s = ms = null;
        $("#enterTimeDisplay").show();
        $("#enterbtn").show();
        
        $("#timeDisplay").hide();
        $("#startbtn").hide();
        $(this).hide();
    });
      
    var h = m = s = 0;
    var time = timer = null;
      
});