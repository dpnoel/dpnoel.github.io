var x = 0;
var y = 0; 

var Vx = 0;
var Vy = 0;

var Ax = 0;
var Ay = 0;

var backgroundColor = (random(55,255),random(55,255),random(55,255));

var vMulti = 0.01;
var bMulti = 0.5;

function setup() {
 createCanvas(windowWidth,windowHeight);
 drawBall();
 moveBall();
 
}

function draw() {
 textSize(40);
 ellipse(50,50);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
}

function deviceShaken(){
  background(backgroundColor);
}