var speed = 2;
var speedMin = 1;
var speedMax = 5;

var thickness = 10;
var thicknessMin = 1;
var thicknessMax = 50;

var length = 32;
var lengthMin = 5;
var lengthMax = 100;

var segment = 1;
var segmentMin = 1;
var segmentMax = 10;

var gap = 10;
var gapMin = 1;
var gapMax = 20;

var n = 2;
var nMin = 1;
var nMax = 5;

let w, kx, ky;

let gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  gui = createGui('Snake Controls');
  gui.addGlobals('speed', 'thickness', 'length', 'segment', 'gap', 'n');
  smooth();
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(thickness);
  w = (PI * speed) / 60;
  kx = (PI * n) / 10;
  ky = -(PI * n) / 10;
}

function draw() {
  translate(width / 2, height / 4);
  background(255);
  let i = 0;
  let x, y, px = 0, py = 0;
  for (let j = 0; j <= length; j+=segment) {
    if (j == 0) {
      px = i * gap + 10 * cos(w * frameCount + kx + ky * j);
      py = (j + 1) * gap + 10 * cos(w * frameCount + kx + ky);
    }
    x = i * gap + 10 * cos(w * frameCount + kx + ky * j);
    y = (j + 1) * gap + 10 * cos(w * frameCount + kx + ky);

    push();
    stroke(100);
    line(px - gap, py + 10, x - gap, y + 10);
    pop();
    line(px, py, x, y);

    px = x;
    py = y;
  }
}

function mouseReleased() {
  strokeWeight(thickness);
  w = (PI * speed) / 60;
  kx = (PI * n) / 10;
  ky = -(PI * n) / 10;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
