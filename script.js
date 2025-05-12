var C_Date = new Date("June 19, 2025 15:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = C_Date - now;

    var day = Math.floor(distance / (1000*60*60*24));
    var hour = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minute = Math.floor((distance % (1000*60*60)) / (1000*60));
    var second = Math.floor((distance % (1000*60)) / (1000));
    var millisecond = Math.floor((distance % 1000) / 10);

    document.getElementById("countdown").innerHTML = day + "d " + hour + "h " + minute + "m " + second + "s " + millisecond + "ms "
})

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const progressBar = document.querySelector('.progress');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Wait for all assets to load
            window.addEventListener('load', function() {
                loadingScreen.classList.add('loaded');
                
                // Remove loading screen after animation completes
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            });
        }
        progressBar.style.width = `${progress}%`;
    }, 300);
    
    // Fallback in case load event doesn't fire
    setTimeout(() => {
        loadingScreen.classList.add('loaded');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 4000);
});