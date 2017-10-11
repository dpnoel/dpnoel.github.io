document.ontouchmove = function(event) {
  event.preventDefault();
}
var dummy = [];
var dummyMax;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(0);
  fill(155,20,75);
  strokeWeight(5);
  dummyMax = random(4,8);
  for (var i = 0; i<dummyMax; i++){
    dummy[i] = new Object;
    dummy[i].x = random(0,windowWidth);
    dummy[i].y = random(0,windowHeight);
  }
}

function draw() {
  background(220);

  beginShape();
  for (var i = 0; i < dummy.length; i++) {
    ellipse(dummy[i].x, dummy[i].y, 150, 150);
    vertex(dummy[i].x, dummy[i].y);
    var posx = floor(dummy[i].x);
    var posy = floor(dummy[i].y);
    textSize(50);
    text("posX"+posx, dummy[i].x + 75, dummy[i].y - 25);
    text("posY"+posy, dummy[i].x + 75, dummy[i].y + 50);
  }
  endShape(CLOSE);
}

