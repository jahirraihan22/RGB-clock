var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock(){
    var time = new Date();
    var hour = (time.getHours()%12).toString();
    var minute = time.getMinutes().toString();
    var second = time.getSeconds().toString();
    
    
    if(hour.length < 2){
        hour = '0' + hour;
    }
    
    if (minute.length < 2){
        minute = '0' + minute;
    }
    
    if (second.length < 2){
        second = '0' + second;
    }
    var clockStr = hour + " : " + minute + " : " + second ;
    var hexColorStr = "#" + hour + minute + second;
    
    clock.textContent = clockStr;
    hexColor.textContent = hexColorStr;
    
    document.body.style.backgroundColor = hexColorStr;
}
hexClock();
setInterval(hexClock,1000);