let n;
let d;
let isPlaying;

function setup(){
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	n = random(1, 359);
	d = random(1, 359);
	isPlaying = false;
}

function draw(){
	background(0);

	push();
	noFill();
	stroke(255, 0, 255, 100);
	strokeWeight(2);
	circle(20, 20, 20);
	pop();

	if(isPlaying){
		push();
		noStroke();
		fill(255);
		circle(20, 20, 12);
		pop();

		play();
	}

	push();	
	fill(255, 0, 255, 100);
	stroke(255, 0, 255, 100);
	strokeWeight(1);
	text('n: '+ floor(n) +'  d: ' + floor(d), width - 100, 20);
	pop();

	push();
	translate(width-80, 40);
	line(0, 0, 0, 40);
	line(0, 0, 40, 0);
	stroke(155);
	strokeWeight(4);
	point(map(n, 1, 359, 0, 40), map(d, 1, 359, 0, 40));
	pop();
	
	translate(width/2, height/2);

	if(keyIsDown(32)){
		play();
	}

	noFill();
	stroke(255);
	strokeWeight(1);
	beginShape();
	for(let i = 0; i < 361; i++){
		let k = i * d;
		let r = 150 * sin(n*k);
		let x = r * cos(k);
		let y = r * sin(k);
		vertex(x, y);
	}
	endShape();

	noFill();
	stroke(255, 0, 255, 100);
	strokeWeight(2);
	beginShape();
	for(let i = 0; i < 361; i++){
		let k = i;
		let r = 150 * sin(n*k);
		let x = r * cos(k);
		let y = r * sin(k);
		vertex(x, y);
	}
	endShape();
}

function mouseDragged(){
	if((mouseX <= width && mouseX >= 0) && (mouseY <= height && mouseY >=0)){
		n = map(mouseX, 0, width, 1, 359);
		d = map(mouseY, 0, height, 1, 359);
	}
}

function mouseClicked(){
	let r = 20/2;
	if(sqrt(((mouseX-20)*(mouseX-20) + (mouseY-20)*(mouseY-20))) < r){
		isPlaying = !isPlaying;
	}
}

function play(){
	n = random(359);
	d = random(359);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
