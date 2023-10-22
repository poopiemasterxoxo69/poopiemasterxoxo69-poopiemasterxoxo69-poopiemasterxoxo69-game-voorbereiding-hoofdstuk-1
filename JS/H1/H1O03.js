function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB,255,255,255,1);
}

function draw() {
  noStroke();
  fill(0,0,255,0.3);
  //groen
  rect(0,0,150,450);

  noStroke();
  fill(0,0,255,0.3)
  ellipse(450,225,450);
  
  //rood
  rect(0,150,450,150);
  
  //blauw
  rect(75,0,375,450);

  fill(220, 20, 60, 0.3)
  triangle(225, 0, 225, 450, 450, 225)
  
}