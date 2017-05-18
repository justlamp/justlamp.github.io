// set the date we're counting down to
var target_date = new Date('Dec, 1, 2017').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
var daysSpan = countdown.querySelector('.days');
var hoursSpan = countdown.querySelector('.hours');
var minutesSpan = countdown.querySelector('.minutes');
var secondsSpan = countdown.querySelector('.seconds');

updatePage();
setInterval(updatePage, 1000);

function getTimeRemaining(target_date){

    var t = (target_date - (new Date().getTime()))/1000;
    if (t < 0) {t = 0;}

    var seconds = Math.floor( t % 60 );
    var minutes = Math.floor( (t/60) % 60 );
    var hours = Math.floor( (t/(60*60)) % 24 );
    var days = Math.floor( t/(60*60*24) );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}


function updatePage() {
 
    var t = getTimeRemaining(target_date);
     
    daysSpan.innerHTML    = t.days;
    hoursSpan.innerHTML   = ('0'+t.hours).slice(-2);
    minutesSpan.innerHTML = ('0'+t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0'+t.seconds).slice(-2);
}
