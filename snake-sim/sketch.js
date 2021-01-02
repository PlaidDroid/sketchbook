var speed = 2;
var speedMin = 1;
var speedMax = 5;

var count = 50;
var countMin = 5;
var countMax = 100;

var gap = 5;
var gapMin = 1;
var gapMax = 10;

var length = 5;
var lengthMin = 1;
var lengthMax = 5;

var n = 1;
var nMin = 1;
var nMax = 5;

var thickness = 10;
var thicknessMin = 1;
var thicknessMax = 50;

let w, kx, ky;

let gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  gui = createGui('Gui');
  gui.addGlobals('speed', 'count', 'gap', 'length', 'n', 'thickness');
  smooth();
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
  for (let j = 0; j <= count; j+=length) {
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