function startCount() {
    var timer2 = $(this).attr('count');
    var interval = setInterval(function() {


        var timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        var hours = parseInt(timer[0], 10);
        var minutes = parseInt(timer[1], 10);
        var seconds = parseInt(timer[2], 10);
        --seconds;
        hours = (minutes < 0) ? --hours : hours;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (hours < 1 && minutes < 1 && seconds < 1) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = `${(seconds < 10) ? '0' + seconds : seconds}`;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $('.countdown').html(`${hours}:${minutes}:${seconds}`);
        timer2 =`${hours}:${minutes}:${seconds}`;
    }, 1000);
}