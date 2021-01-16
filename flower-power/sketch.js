let gui;

var seed
var seedMin = 1;
var seedMax = 1000;

var count = 40;
var countMin = 1;
var countMax = 1000;

var flowerSize = 50;
var flowerSizeMin = 15;
var flowerSizeMax;

var petals = 10;
var petalsMin = 0;
var petalsMax = 50;

var stalkLength = 50;
var stalkLengthMin = 0;
var stalkLengthMax;

var stalkWidth = 5;
var stalkWidthMin = 0;
var stalkWidthMax = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  seed = random(seedMin, seedMax);
  flowerSizeMax = width/2;
  stalkLength = height;
  stalkLengthMax = height;
  gui = createGui('flower power');
  gui.addGlobals('seed', 'count', 'flowerSize', 'petals', 'stalkLength', 'stalkWidth');
}

function draw() {
  background(220);
  randomSeed(seed);
  for (let i = 0; i < count; i++) {
    let x = int(random(width));
    let y = int(random(height));
    flower(x, y);
  }
}

function flower(a, b) {
  push();
  translate(a, b);
  rotate(HALF_PI);
  fill('#DFAF27');
  let t = TWO_PI / petals;
  let r = flowerSize / 2;
  let i, x, y;

  // petals
  if (petals > 0) {
    for (i = 0; i < TWO_PI; i += t) {
      x = r * cos(i);
      y = r * sin(i);
      circle(x, y, r);
    }
  }

  // stalk
  fill('#005702');
  // x = r * cos(i);
  // y = r * sin(i);
  // rect(x, y - stalkWidth / 2, stalkLength, stalkWidth);
  rect(0, 0 - stalkWidth / 2, stalkLength, stalkWidth);

  // center
  fill('#BE9A30');
  circle(0, 0, flowerSize);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}