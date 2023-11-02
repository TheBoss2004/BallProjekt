function setup() {
    createCanvas(400, 400, WEBGL);
    // This enables device orientation for your application.
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
       DeviceOrientationEvent.requestPermission()
         .then(response => {
           if (response === 'granted') {
             window.addEventListener('deviceorientation', deviceOrientationHandler, true);
           }
         })
         .catch(console.error);
    } else {
       window.addEventListener('deviceorientation', deviceOrientationHandler, true);
    }
   }
   
   function draw() {
    background(255);
    translate(-width / 2, -height / 2);
   
    rotateX(ball.roll * PI / 180);
    rotateY(ball.pitch * PI / 180);
    rotateZ(ball.yaw * PI / 180);
   
    noStroke();
    fill(0, 0, 255);
    sphere(100);
   }
   
   let ball = {
    roll: 0,
    pitch: 0,
    yaw: 0
   };
   
   function deviceOrientationHandler(event) {
    if (event.beta !== null && event.gamma !== null) {
      ball.roll = event.beta;
      ball.pitch = event.gamma;
    }
    if (event.alpha !== null) {
      ball.yaw = event.alpha;
    }
   }