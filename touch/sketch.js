document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(0);
  fill(155,20,75);
  strokeWeight(5);
}


function draw() {
  background(220);

  beginShape();
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 150, 150);
    vertex(touches[i].x, touches[i].y);
    var posx = floor(touches[i].x);
    var posy = floor(touches[i].y);
    textSize(50);
    text("posX"+posx, touches[i].x + 75, touches[i].y - 25);
    text("posY"+posy, touches[i].x + 75, touches[i].y + 50);
  }
  endShape(CLOSE);
}

