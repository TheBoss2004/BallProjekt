window.addEventListener('deviceorientation', function(event) {
 var x = event.beta; // In degree in the range of [-180,180]
 var y = event.gamma; // In degree in the range of [-90,90]
 var z = event.alpha;
 var ball = document.getElementById('ball');
 ball.style.transform = 'translate(' + y + 'px, ' + x + 'px, )';
});