var kleur = 'indianred';
var afstand;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  var middelpuntBolX = width / 2;
  var middelpuntBolY = height / 2;

  if (mouseX >= width - 30 || mouseX <= 30 || mouseY >= height - 30 || mouseY <= 30 || (dist(middelpuntBolX, middelpuntBolY, mouseX, mouseY) <= 50 && mouseX >= middelpuntBolX)) {
    kleur = 'red';
    background('yellow');
  } else {
    kleur = 'indianred';
    background('white');
  }

  fill('black');
  mouseX = constrain(mouseX, 25, width - 25);
  mouseY = constrain(mouseY, 25, height - 25);

  text("Beweeg de muis | x = " + round(mouseX) + " en y = " + round(mouseY), 10, 20);

  ellipse(middelpuntBolX, middelpuntBolY, 100);
  tekenJos(mouseX, mouseY, kleur);
  afstand = dist(middelpuntBolX + 55, middelpuntBolY + 55, mouseX, mouseY);
  text(afstand, 10, 40);
}

function tekenJos(x, y, kleur) {
  push();
  translate(x, y);
  scale(1);
  noStroke();
  fill(kleur);
  ellipse(0, 0, 50);
  fill('slategray');
  ellipse(-7, -10, 17);
  ellipse(7, -10, 17);
  fill('white');
  ellipse(-7, -8, 7, 13);
  ellipse(7, -8, 7, 13);
  fill('orange');
  ellipse(0, 3, 17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}