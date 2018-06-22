var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;
var flying = 0;
var terrain = [];

function setup() {
	createCanvas(800, 800, WEBGL);
	cols = w / scl;
	rows = h / scl;
}

function draw() {

	flying -= .2

	var xoff = 0;
	for (var x = 0; x < cols; x++) {
	    terrain[x] = [];
	    var yoff = flying;
	    for (var y = 0; y < rows; y++) {
	      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
	      yoff += .2;
	    }
	    xoff += .2;
	}

	background(0);
	stroke(0, 255, 100);
	noFill();
	rotateX(PI/2.5);
	translate(-w/2, -h/2);
	for (var y = 0; y < rows; y++) {
		beginShape(TRIANGLE_STRIP);
		for (var x = 0; x < cols; x++) {
			vertex(x*scl, y*scl, terrain[x][y]);
			vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
		}
		endShape();
	}
}