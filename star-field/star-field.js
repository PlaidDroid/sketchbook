let stars = new Array(5000);
let topSpeed = 200;
let minSpeed = 0;
let speed = 10;

let bgm;

function preload(){
  soundFormats('wav');
  bgm = loadSound('assets/wind-howling.wav');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i< stars.length; i++) {
    	stars[i] = new Star();
	}
	bgm.loop();
}

function draw() {
  speed = map(mouseX, 0, width, 0, 200);
  bgm.rate(map(speed, 0, 200, 0, 2));
  background(0);
  translate(width/2, height/2);
  for (let i = 0; i< stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function keyPressed(){
	switch(keyCode){
		case UP_ARROW:
			if(speed != topSpeed){
				// clear();
				// background(0);
				speed += 5;
			}
		break;
		case DOWN_ARROW:
			if(speed != minSpeed){
				// clear();
				// background(0);
				speed -= 5;
			}
		break;
	}
}
