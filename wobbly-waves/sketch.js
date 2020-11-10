let widgetColor = 20
let widgetStrokeWeight = 2;

let rate = 0;
let choice = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	smooth();
}

function draw() {
	showSlider();
	showSelector();
	push();
	switch(choice){
		case 1:
			for(let x = 30; x < windowWidth - 30; x += 20){
				for(let y = 20; y < windowHeight - 30; y += 20){
					stroke(255 - rate*2);
				 	line(x, y, x+10, y+10);
					line(x+10, y, x, y+10);		
				}
			}			
		break;
		case 2:
			for(let x = 30; x < windowWidth - 30; x += 20){
				for(let y = 20; y < windowHeight - 30; y += 20){
					stroke(255);
					strokeWeight(1+rate*0.1);
				 	line(x, y, x+10, y+10);
					line(x+10, y, x, y+10);		
				}
			}
		break;
		case 3:
			for(let x = 30; x < windowWidth - 30; x += 20+rate){
				for(let y = 20; y < windowHeight - 30; y += 20+rate){
					stroke(255);
				 	line(x, y, x+10, y+10);
					line(x+10, y, x, y+10);		
				}
			}
		break;
		case 4:
			for(let x = 10; x < windowWidth - 30; x += 20){
				for(let y = 10; y < windowHeight - 30; y += 20){
					if(frameCount % rate == 0){
						let rand = floor(random(10, windowHeight));
						if(rand >= y && rand < y+20){
							stroke(floor(random(0, 255)));
						}else{
							stroke(0);
				 		}
				 		line(x, y, x+10, y+10);
						line(x+10, y, x, y+10);
					}
				}
			}
		break;
	}
	pop();
}

function keyPressed(){
	switch(keyCode){
		case UP_ARROW:
			if(rate != 100){
				clear();
				background(0);
				rate += 5;
			}
		break;
		case DOWN_ARROW:
			if(rate != 0){
				clear();
				background(0);
				rate -= 5;
			}
		break;
		case RIGHT_ARROW:
			if(choice != 4){
				clear();
				background(0);
				choice++;
			}
		break;
		case LEFT_ARROW:
			if(choice != 1){
				clear();
				background(0);
				choice--;
			}
		break;
	}
}

function showSlider(){
	push();
	let X = windowWidth - 15;
	let Y = windowHeight/2;
	noFill();
	stroke(widgetColor);
	strokeWeight(widgetStrokeWeight);
	rect(X, Y, 10, 50);
	noStroke();
	fill(widgetColor);
	rect(X, map(rate, 0, 100, Y + 45, Y), 10, 5);
	pop();
}

function showSelector(){
	push();
	let X = windowWidth/2;
	let Y = windowHeight - 20;
	noFill();
	stroke(widgetColor);
	strokeWeight(widgetStrokeWeight);
	rect(X, Y, 50, 10);
	noStroke();
	fill(widgetColor);
	rect(map(choice, 1, 4, X, X + 40), Y, 10, 10);
	fill(50);
	// one
	rect(X + 4, Y + 4, 2, 2);
	// two
	rect(X + 15, Y + 3, 2, 2);
	rect(X + 19, Y + 5, 2, 2);
	// three
	rect(X + 28, Y + 3, 2, 2);
	rect(X + 33, Y + 3, 2, 2);
	rect(X + 31, Y + 6, 2, 2);
	// four
	rect(X + 42, Y + 3, 2, 2);
	rect(X + 46, Y + 3, 2, 2);
	rect(X + 42, Y + 6, 2, 2);
	rect(X + 46, Y + 6, 2, 2);
	pop();
}
