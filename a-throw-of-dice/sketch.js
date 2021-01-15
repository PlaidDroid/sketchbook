let angle = 0;
let size = 150;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
  createEasyCam();
  document.oncontextmenu = function () { return false; }
}

function draw() {
  background(0);
  rotateY(angle);
  dice();
  angle += 0.01;
}

function dice() {
  noFill();
  stroke(255);
  box(size, size, size);
  fill(255);
  side1();
  side2();
  side3();
  side4();
  side5();
  side6();
}

let gap = size / 12;
let circleSize = size / 4;

function side1() {
  push();
  translate(75, 0, 0);
  rotateY(radians(90));
  circle(0, 0, circleSize);
  pop();
}

function side2() {
  push();
  translate(50 - gap, 50 - gap, -75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(-25 - gap, -25 - gap, -75);
  circle(0, 0, circleSize);
  pop();
}

function side3() {
  let z = -75;
  push();
  rotateY(radians(90));
  rotateX(radians(90));
  push();
  translate(-25 - gap, 50 - gap, z);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(50 - gap, -25 - gap, z);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(0, 0, z);
  circle(0, 0, circleSize);
  pop();
  pop();
}

function side4() {
  let z = 75;
  push();
  rotateY(radians(90));
  rotateX(radians(90));
  push();
  translate(50 - gap, 50 - gap, z);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(-25 - gap, 50 - gap, z);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(50 - gap, -25 - gap, z);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(-25 - gap, -25 - gap, z);
  circle(0, 0, circleSize);
  pop();
  pop();
}

function side5() {
  push();
  translate(50 - gap, 50 - gap, 75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(-25 - gap, 50 - gap, 75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(50 - gap, -25 - gap, 75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(-25 - gap, -25 - gap, 75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(0, 0, 75);
  circle(0, 0, circleSize);
  pop();
}

function side6() {
  push();
  rotateY(radians(90));
  push();
  translate(50 - gap, 60 - gap, -75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(-25 - gap, 60 - gap, -75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(50 - gap, 0, -75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(-25 - gap, 0, -75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(50 - gap, -35 - gap, -75);
  circle(0, 0, circleSize);
  pop();
  push();
  translate(-25 - gap, -35 - gap, -75);
  circle(0, 0, circleSize);
  pop();
  pop();
}