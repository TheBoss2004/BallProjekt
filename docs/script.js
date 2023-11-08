let ball;
let alpha, beta, gamma; // Device orientation data

function setup() {
 createCanvas(windowWidth, windowHeight);
 ball = new Ball(width / 2, height / 2, 50);
 ball.setSpeed(5);

 // Add a listener for the DeviceOrientationAbsoluteEvent
 window.addEventListener('deviceorientationabsolute', deviceOrientationAbsolute);
}

function draw() {
 background(220);

 // Display the ball
 ball.display();

 // Update ball's position based on device orientation
 ball.update(beta, gamma);

 // Check if the ball is out of the canvas
 if (ball.isOutOfBounds()) {
    // Vibrate the device for 100 milliseconds
    navigator.vibrate(100);
 }
}

function deviceOrientationAbsolute(event) {
 alpha = event.alpha;
 beta = event.beta;
 gamma = event.gamma;
}

class Ball {
 constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = 0;
    this.speedY = 0;
 }

 setSpeed(speed) {
    this.speedX = speed;
    this.speedY = speed;
 }

 display() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.size);
 }

 update(rotationX, rotationY) {
    // Map the device orientation data to ball movement
    let mappedSpeedX = map(rotationY, -90, 90, -this.speedX, this.speedX);
    let mappedSpeedY = map(rotationX, -90, 90, -this.speedY, this.speedY);

    this.x += mappedSpeedX;
    this.y += mappedSpeedY;

    // Keep the ball within the canvas screen
    this.x = constrain(this.x, this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, this.size / 2, height - this.size / 2);
 }

 isOutOfBounds() {
    return this.x < this.size / 2 || this.x > width - this.size / 2 || this.y < this.size / 2 || this.y > height - this.size / 2;
 }
}