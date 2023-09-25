const clock=document.querySelector('.clock')

function runClock(){
    var time = new Date();
    var hours = time.getHours()
    var mins = time.getMinutes()
    var sec = time.getSeconds()
    var txt = 'AM'

    if(hours>12){
        hours=hours-12;
        txt = "PM"
    }else if(hours==0){
        hours=12;
        txt="AM";
    }
    clock.innerHTML=`${hours=hours<10?"0"+hours:hours} : ${mins=mins<10?"0"+mins:mins} : ${sec=sec<10?"0"+sec:sec} :${txt}`;
}
runClock()
setInterval(runClock,1000)