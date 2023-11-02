// Sketch.js
let canvas;
let ball;

function setup() {
 canvas = createCanvas(windowWidth, windowHeight, WEBGL);
 ball = new Ball();
}

function draw() {
 background(0);
 rotateX(frameCount * 0.01);
 rotateY(frameCount * 0.01);
 rotateZ(frameCount * 0.01);

 ball.update();
 ball.display();
}

// Ball.js
class Ball {
 constructor() {
    this.position = createVector(0, 0, 0);
    this.velocity = createVector(0, 0, 0);
    this.acceleration = createVector(0, 0, 0);
 }

 update() {
    const windowSize = min(windowWidth, windowHeight);
    const force = p5.Vector.random3D();
    force.mult(windowSize * 0.001);

    this.acceleration.add(force);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
 }

 display() {
    translate(this.position.x, this.position.y, this.position.z);
    fill(255, 0, 0);
    sphere(20);
 }
}