let n = 0;
let d = 0;
let dSlider;
let nSlider;

function setup(){
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	dSlider = createSlider(1, 180, 1);
	nSlider = createSlider(1, 280, 1);
}

function draw(){
	n = nSlider.value();
	d = dSlider.value();
	background(0);
	translate(width/2, height/2);

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
