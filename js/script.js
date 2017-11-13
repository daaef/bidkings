const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}
let countDown = new Date('Mar 1, 2018 00:00:00').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;
            document.getElementById('hours').innerHTML = pad(Math.floor((distance % (day)) / (hour))),
            document.getElementById('minutes').innerHTML = pad(Math.floor((distance % (hour)) / (minute))),
            document.getElementById('seconds').innerHTML = pad(Math.floor((distance % (minute)) / second));

        //do something later when date is reached
        if (distance < 0) {
            clearInterval(x);
        }

    }, second);

function call(){
    clearInterval(x);
    countDown = new Date().setSeconds(new Date().getSeconds() + 16);
    return x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;
        document.getElementById('hours').innerHTML = pad(Math.floor((distance % (day)) / (hour))),
            document.getElementById('minutes').innerHTML = pad(Math.floor((distance % (hour)) / (minute))),
            document.getElementById('seconds').innerHTML = pad(Math.floor((distance % (minute)) / second));

        if (distance < 1000) {
//  countDown = new Date().setSeconds(new Date().getSeconds() + 16);
            clearInterval(x);
            document.querySelector('. uk-padding-remove').innerHTML = "<h1>SOLD</h1>"

        }

    }, second);
}