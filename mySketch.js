function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}
function draw() {
	clear();
	frameRate(1);
	var ver = randomCoordinate(); // calls the custom function
	var vertices = random(2,6);

	beginShape(); //  draws multiple vertices with min of 3 and max of 6 randomly
	for(i = 0; i < vertices; i++){
		vertex(ver.x, ver.y); //prints previous vertex
		ver = randomCoordinate(); //randomize a new vertex
	}
  endShape(CLOSE);		
}
function randomCoordinate() { //custom function to give random coordinate valuables
	var coordinate = {
		x: int(random(windowWidth + 1)),
		y: int(random(windowHeight + 1))
	}
	return coordinate;
}
