document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 stroke(0);
 noFill();
 strokeWeight(5);
}

function draw(){
 background(255);
 
 for(var i=0;i<touches.length;i++){
  rect(touches[i].x,touches[i].y,150,150);
  }
  beginShape(POINTS);
  vertex(touches[1], touches[2]);
  vertex(touches[2], touches[3]);
  vertex(touches[3], touches[4]);
}