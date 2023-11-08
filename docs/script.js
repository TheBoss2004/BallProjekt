class DeviceOrientationBall {
    constructor() {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.size = 200;
    }

    display() {
        const ball = document.getElementById("device-orientation-ball");
        ball.style.left = this.x + "px";
        ball.style.top = this.y + "px";
    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }
}

let ball;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ball = new DeviceOrientationBall();
}

function draw() {
    background(0);
    ball.display();
}

function deviceMoved() {
    const x = map(rotationY, -90, 90, 0, window.innerWidth);
    const y = map(rotationX, -90, 90, 0, window.innerHeight);
    ball.update(x, y);
}
