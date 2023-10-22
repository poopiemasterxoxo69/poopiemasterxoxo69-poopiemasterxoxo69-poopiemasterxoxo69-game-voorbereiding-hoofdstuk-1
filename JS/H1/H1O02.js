function setup() {
  canvas = createCanvas(450,450);
  background('orange');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // noStroke();
  // fill('darkred');
  // triangle(0,0,0,450,450,450);
  
  strokeWeight(0);;
  fill('darkred');
  triangle(0, 450, 225, 0, 450, 450)
  endShape(CLOSE);

  strokeWeight(0);;
  fill('pink');
  triangle(0, 225, 450, 0, 450, 450)
  endShape(CLOSE);

  strokeWeight(0);;
  fill('purple');
  triangle(450, 225, 0, 450, 0, 0)
  endShape(CLOSE);

  strokeWeight(0);;
  fill('darkred');
  triangle(0, 0, 225, 114, 450, 0)
  endShape(CLOSE);
}
