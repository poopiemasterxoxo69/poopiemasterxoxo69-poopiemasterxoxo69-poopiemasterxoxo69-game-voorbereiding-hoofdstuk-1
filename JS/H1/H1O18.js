var xPositie = 0;
var yPositie = 30;
var schaal = 0.25;
schaal += 0,05

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  frameRate(15);
  colorMode(RGB,255,255,255,1);
  background(0,0,75,1.1);
}

function draw() {
   background(0,0,75,0.1);
  xPositie += 5
  yPositie += 1
  tekenSter(xPositie,yPositie, schaal);
}

function tekenSter(x,y, s) {
  push();
  scale(1);
  strokeWeight(2);
  stroke('white');
  fill('khaki');
  translate(x,y);
  triangle(0,0,80,0,40,65);
  translate(0,40);
  triangle(0,0,80,0,40,-65);
  pop();
}