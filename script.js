var C_Date = new Date("June 19, 2025 15:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = C_Date - now;

    var day = Math.floor(distance / (1000*60*60*24));
    var hour = Math.floor((distance % (1000*60*60*24)) / (1000*60*60*24));
    var minute = Math.floor((distance % (1000*60*60)) / (1000*60));
    var second = Math.floor((distance % (1000*60)) / (1000));
    var millisecond = Math.floor((distance % 1000) / 10);

    document.getElementById("countdown").innerHTML = day + "d " + hour + "h " + minute + "m " + second + "s " + millisecond + "ms "
})