var diameter = 300;
var circkelG = 7
var circkelB = 430
x = 225



function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);
  fill(255,0,0,0.5);
  ellipse(width / 2,height / 2,diameter);

  push()
  noStroke()
  fill(0,225,0,0.5)
  ellipse( x, circkelG ,diameter);
  circkelG += 1
  noStroke()
  fill(0,0,225,0.5)
  ellipse( x, circkelB ,diameter);
  circkelB -= 1
 pop();


}