
$(window).on('load', function () {
    let labels = ['weeks', 'days', 'hrs', 'minutes', 'seconds']
        , nextYear = '2017/12/25'
        , template = _.template($('#main-example-template').html())
        , currDate = '00:00:00:00:00'
        , nextDate = '00:00:00:00:00'
        , parser = /([0-9]{2})/gi
        , $example = $('#main-example');

    // Parse countdown string to an object
    function strfobj(str) {
        var parsed = str.match(parser)
            , obj = {};
        labels.forEach(function (label, i) {
            obj[label] = parsed[i]
        });
        return obj;
    }
    // Return the time components that diffs
    function diff(obj1, obj2) {
        var diff = [];
        labels.forEach(function (key) {
            if (obj1[key] !== obj2[key]) {
                diff.push(key);
            }
        });
        return diff;
    }
    // Build the layout
    var initData = strfobj(currDate);
    labels.forEach(function (label, i) {
        $example.append(template({
            curr: initData[label]
            , next: initData[label]
            , label: label
        }));
    });
    // Starts the countdown
    $example.countdown(nextYear, function (event) {
        var newDate = event.strftime('%w:%d:%H:%M:%S')
            , data;
        if (newDate !== nextDate) {
            currDate = nextDate;
            nextDate = newDate;
            // Setup the data
            data = {
                'curr': strfobj(currDate)
                , 'next': strfobj(nextDate)
            };
            // Apply the new values to each node that changed
            diff(data.curr, data.next).forEach(function (label) {
                var selector = '.%s'.replace(/%s/, label)
                    , $node = $example.find(selector);
                // Update the node
                $node.removeClass('flip');
                $node.find('.curr').text(data.curr[label]);
                $node.find('.next').text(data.next[label]);
                // Wait for a repaint to then flip
                _.delay(function ($node) {
                    $node.addClass('flip');
                }, 50, $node);
            });
        }
    });
    let a = [$('[]')]
    $('[bid-ctrl]').each(function () {

        var interval = setInterval(function() {

            var timer2 = $(this).attr('count');
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
    });
});