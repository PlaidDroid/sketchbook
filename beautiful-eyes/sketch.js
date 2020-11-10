var bgm;
var growl;
var beautifulEyes;
var speed = 0.05;

function preload() {
  soundFormats('ogg', 'mp3');
  bgm = loadSound('assets/night-forest.mp3');
  growl = loadSound('assets/growl.mp3');
  beautifulEyes = loadSound('assets/beautiful-eyes.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgm.loop();
  growl.loop();
}

function draw() {
  background(0);

  let eyeSize = 50;
  let pos = eyeSize * 3;  

  translate(width / 2, height / 2);

  for (var i = 5; i < 10; i = i + 0.5) {
    fill(color(190, 242, 219, 2));
    ellipse(-pos, 0, eyeSize * i, eyeSize * i);
    ellipse(pos, 0, eyeSize * i, eyeSize * i);
  }

  fill(30);
  ellipse(-pos, 0, eyeSize * 4.5, eyeSize * 4.5);
  ellipse(pos, 0, eyeSize * 4.5, eyeSize * 4.5);
  fill('#BEF2DB');
  ellipse(-pos, 0, eyeSize * 4, eyeSize * 4);
  ellipse(pos, 0, eyeSize * 4, eyeSize * 4);

  let rangeX = map(mouseX, 0, width, -35, 35);
  let rangeY = map(mouseY, 0, height, -35, 35);
  let eyeSpeed1 = 0.25;
  let eyeSpeed2 = 0.5;
  let eyeSpeed3 = 1;

  noStroke();
  fill('#F8F1BE');
  ellipse(-pos + rangeX * eyeSpeed1, 0 + rangeY * eyeSpeed1, eyeSize * 3, eyeSize * 3);
  ellipse(pos + rangeX * eyeSpeed1, 0 + rangeY * eyeSpeed1, eyeSize * 3, eyeSize *3);
  fill('#FFF08F');  
  ellipse(-pos + rangeX * eyeSpeed2, 0 + rangeY * eyeSpeed2, eyeSize * 2, eyeSize * 2);
  ellipse(pos + rangeX * eyeSpeed2, 0 + rangeY * eyeSpeed2, eyeSize * 2, eyeSize * 2);
  fill('#FF4029');
  ellipse(-pos + rangeX * eyeSpeed3, 0 + rangeY * eyeSpeed3, eyeSize, eyeSize);
  ellipse(pos + rangeX * eyeSpeed3, 0 + rangeY * eyeSpeed3, eyeSize, eyeSize);
}

function mouseClicked() {
  if (!beautifulEyes.isPlaying()) {
    beautifulEyes.play();
  }
}
