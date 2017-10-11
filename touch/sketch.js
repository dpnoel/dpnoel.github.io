document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  noFill();
  strokeWeight(5);
}

function draw() {
  background(220);

  beginShape();
  for (var i = 0; i < touches.length; i++) {
    vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE);
}

beginShape();
 for(var i = 0; i < touches.length; i++){
   ellipse(touches[i].x, touches[i].y, 150, 150);
 }