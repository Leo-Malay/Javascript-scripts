// Fetching and displaying current time...

// Additional function for the purpose of time editing...
function check_time(i){
    if(i<10){
        i = "0" + i;
    }
    return i;
}

function display_time(){
    var _time = new Date();
    var hour = _time.getHours();
    var minute = _time.getMinutes();
    var second = _time.getSeconds();
    hour = check_time(hour);
    minute = check_time(minute);
    second = check_time(second);
    document.getElementById('time_here').innerText = "Current Time: " + hour + " : " + minute + " : " + second;
    var t1 = setTimeout(function(){display_time()},500);
}

display_time();