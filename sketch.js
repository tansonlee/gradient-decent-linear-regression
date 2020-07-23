let points = [];
let m = 1;
let b = 0;

const learning_rate = 0.01;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(51);

	for (let pt of points) {
		let x = map(pt.x, 0, 1, 0, width);
		let y = map(pt.y, 0, 1, height, 0);

		strokeWeight(8);
		stroke(255, 60);
		point(x, y);
	}

	gradientDescent();
	drawLine(m, b);
}

function mousePressed() {
	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
		const x = map(mouseX, 0, width, 0, 1);
		const y = map(mouseY, 0, height, 1, 0);

		points.push(createVector(x, y));
	}
}

function keyPressed() {
	if (key == " ") {
		if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
			const x = map(mouseX, 0, width, 0, 1);
			const y = map(mouseY, 0, height, 1, 0);

			points.push(createVector(x, y));
		}
	}
}

function gradientDescent() {
	for (let pt of points) {
		let guess = m * pt.x + b;
		let error = pt.y - guess;

		m = m + error * pt.x * learning_rate;
		b = b + error * learning_rate;
	}
}

function drawLine(m, b) {
	let x1 = 0;
	let y1 = m * x1 + b;
	let x2 = 1;
	let y2 = m * x2 + b;

	x1 = map(x1, 0, 1, 0, width);
	y1 = map(y1, 0, 1, height, 0);
	x2 = map(x2, 0, 1, 0, width);
	y2 = map(y2, 0, 1, height, 0);

	strokeWeight(2);
	stroke(255);
	line(x1, y1, x2, y2);
}
