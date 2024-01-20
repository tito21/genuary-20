
const bias = 0.005;

function setup() {

  const textGraphic = createGraphics(500, 500);
  createCanvas(500, 500);
  ellipseMode(CENTER);

  background(200);

  textGraphic.background(0);
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.rectMode(CENTER);
  textGraphic.textSize(40);
  textGraphic.fill(255);
  textGraphic.text("Generative typography", 250, 250);

  textGraphic.loadPixels();
  pixelsText = textGraphic.pixels;

  noStroke();
  fill(0);

  textGraphic.show();
}

function draw() {

  x = floor(random(0, width));
  y = floor(random(0, height));

  i = 4*x + 4*y*width;
  while (pixelsText[i] < random() - bias) {
    x = floor(random(0, width));
    y = floor(random(0, height));
    i = 4*x + 4*y*width;
  }

  ellipse(x, y, 2);

}
