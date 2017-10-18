var x = 0;
var y = 0; 

var Vx = 0;
var Vy = 0;

var Ax = 0;
var Ay = 0;

var vMulti = 0.01;
var bMulti = 0.5;

var backgroundColor;
function setup() {
 createCanvas(windowWidth,windowHeight);
 backgroundColor = color(random(55,255),random(55,255),random(55,255));
 
}

function draw() {
 textSize(40);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
 drawBall();
 //moveBall();
}

function deviceShaken(){
  backgroundColor = color(random(55,255),random(55,255),random(55,255));
  background(backgroundColor);
}

function drawBall(){
  fill(174,28,164);
  ellipse(x,y,150,150);
}

