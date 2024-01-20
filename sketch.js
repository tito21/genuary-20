
const bias = 0.005;
const hueSpeed = 0.25;
let pixelsText;
const widthWindow = 10;
let maxWidth = widthWindow;
let minWidth = 0;

let text = "Generative typography";
let textElem;
let textGraphic

let drawLines = false;

function resetText() {
  console.log("Change");
  console.log(textElem.value);

  text = textElem.value;

  textGraphic.background(0);
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.rectMode(CENTER);
  textGraphic.textSize(40);
  textGraphic.fill(255);
  textGraphic.text(text, 250, 250);

  textGraphic.loadPixels();
  pixelsText = textGraphic.pixels;

  background(200);
  maxWidth = widthWindow;
  minWidth = 0;

}

function getRandomPoint() {

  let x = floor(random(minWidth, maxWidth));
  let y = floor(random(0, height));

  let index = 4 * x + 4 * y * width;
  while (pixelsText[index] < random(255) - bias) {
    x = floor(random(minWidth, maxWidth));
    y = floor(random(0, height));
    index = 4 * x + 4 * y * width;
  }
  return [x, y]
}

function getRandomColor() {
  colorMode(HSB, 100);
  let hue = 100 * noise(hueSpeed * frameCount);
  return color(hue, 100, 50);
}

function setup() {

  textElem = document.getElementById("text");
  textElem.addEventListener('change', resetText)

  textGraphic = createGraphics(500, 500);
  createCanvas(500, 500, document.getElementById('canvas'));
  ellipseMode(CENTER);

  resetText();

  noStroke();
  fill(0);

  textGraphic.show();
}

function draw() {
  if (drawLines) {
    [x1, y1] = getRandomPoint();
    [x2, y2] = getRandomPoint();
    stroke(getRandomColor());
    line(x1, y1, x2, y2);
  }
  else {
    [x, y] = getRandomPoint();
    fill(getRandomColor());
    ellipse(x, y, 2);
  }
  minWidth = (minWidth + 1) % width;
  maxWidth = (minWidth + widthWindow) % width;
}