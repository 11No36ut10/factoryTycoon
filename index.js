let pixelRowAmount = 25;
let pixelSize = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  resizePixels();
  noStroke();
}

function draw() {
  background(255);
  for(let i = 0; i < pixelRowAmount; i++) {
    for(let t = 0; t < pixelRowAmount; t++) {
      if(
        mouseX > pixelSize*i     &&
        mouseX < pixelSize*(i+1) &&
        mouseY > pixelSize*t     &&
        mouseY < pixelSize*(t+1)
        ){
        fill(100, 100, 100);
      }else{
        fill(48, 48, 48);
      }
      rect(pixelSize*i, pixelSize*t, pixelSize, pixelSize);
    }
  }
}

function resizePixels() {
  if(windowHeight < windowWidth) {
    pixelSize = windowHeight / pixelRowAmount;
    screenOffsetY = 0;
    screenOffsetX = ..
  }else{
    pixelSize = windowWidth / pixelRowAmount;
  }
}

function onWindowResize() {
  resizeCanvas(windowWidth, windowHeight);
  resizePixels();
}
