function setup() {
  canvas = createCanvas(1000,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  

  noStroke();
  fill('white');
  ellipse(225,225,300);
  

  noStroke();
  fill('green');
  ellipse(225,225,350);
  
 

  // witte rechthoek met rode rand
  
  stroke('red');
  fill('white');
  strokeWeight(10);
  rect(650,100,250,300);

  stroke('green');
  fill('white');
  strokeWeight(10);
  square(125,125,200);
}