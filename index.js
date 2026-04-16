function setup() {
  createCanvas(max(500, windowWidth), max(500, windowHeight));
  resizePixels();
  noStroke();
}

function draw() {
  background(255);
  for(let i = 0; i < factoryRowAmount; i++) {
    for(let t = 0; t < factoryRowAmount; t++) {
      if(
        mouseX > screenOffsetX + pixelSize*i     &&
        mouseX < screenOffsetX + pixelSize*(i+1) &&
        mouseY > screenOffsetY + pixelSize*t     &&
        mouseY < screenOffsetY + pixelSize*(t+1) &&
        !isFactoryOpen()
        ){
        if(mouseIsPressed && !mouseIsDown) {
          mouseIsDown = true;
          factoryOpen = [i, t];
          fill(150, 150, 150);
        }else{
          fill(100, 100, 100);
        }
      }else{
        fill(48, 48, 48);
      }
      rect(screenOffsetX+ pixelSize*i, screenOffsetY + pixelSize*t, pixelSize, pixelSize);
    }
  }
  openFactory();
}

function openFactory() {
  var totalFactoryWidth = pixelSize*factoryRowAmount;
  var displayWidth = totalFactoryWidth * factoryWidthPercentage / 100;
  if(isFactoryOpen()) {
    if(
      (mouseX < screenOffsetX + (totalFactoryWidth - displayWidth)/2 ||
      mouseX > screenOffsetX + (totalFactoryWidth - displayWidth)/2 + displayWidth ||
      mouseY < screenOffsetY + (totalFactoryWidth - displayWidth)/2 ||
      mouseY > screenOffsetY + (totalFactoryWidth - displayWidth)/2 + displayWidth)
      ){
      if(!mouseIsDown && mouseIsPressed) {
        mouseIsDown = true;
        factoryOpen = [-1, -1];
      }
    }
    fill(30, 30, 30);
    rect(screenOffsetX + (totalFactoryWidth - displayWidth)/2, screenOffsetY + (totalFactoryWidth - displayWidth)/2, displayWidth, displayWidth, 10);
    button(100, 100, 200, 80, 'rgb(219, 31, 31)', 5, 2, 10, 'Hey', 'test');
  }
}

function button(x, y, width, height, color, colorOffset, colorWidth, round, text, func) {
  fill(20, 20, 20);
  rect(x, y, width, height, round*1.5);
  fill(color);
  rect(x+colorOffset, y+colorOffset, width-colorOffset*2, height-colorOffset*2, round);
  fill(20, 20, 20);
  rect(x+colorOffset+colorWidth, y+colorOffset+colorWidth, width-(colorOffset+colorWidth)*2, height-(colorOffset+colorWidth)*2, round);
}

function isFactoryOpen() {
  return (factoryOpen[0] != -1 && factoryOpen[1] != -1);
}

function resizePixels() {
  if(windowHeight < windowWidth) {
    pixelSize = windowHeight / factoryRowAmount;
    screenOffsetY = 0;
    screenOffsetX = windowWidth/2 - (pixelSize * factoryRowAmount)/2;
  }else{
    pixelSize = windowWidth / factoryRowAmount;
    screenOffsetY = windowHeight/2 - (pixelSize * factoryRowAmount)/2;
    screenOffsetX = 0;
  }
}

function windowResized() {
  resizeCanvas(max(500, windowWidth), max(500, windowHeight));
  resizePixels();
}

function mouseReleased() {
  mouseIsDown = false;
}
