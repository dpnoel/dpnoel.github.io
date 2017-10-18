var x = 0;
var y = 0; 

var Vx = 0;
var Vy = 0;

var Ax = 0;
var Ay = 0;

var vMulti = 0.01;
var bMulti = 0.5;

var backgroundColor, Rotx, Roty;
function setup() {
 createCanvas(windowWidth,windowHeight);
 x = windowWidth / 2;
 y = windowHeight / 2;
 backgroundColor = color(random(55,255),random(55,255),random(55,255));
}

function draw() {
 clear();
 Rotate();
 info();
 drawBall();
 moveBall();
}

function Rotate(){
  Rotx = rotationX;
  Roty = rotationY;
}

function moveBall(){
  Ax = Roty * vMulti;
  Ay = Rotx * vMulti;
  
  Vx += Ax;
  Vy += Ay;
  
  x += Vx;
  y += Vy;
}

function deviceShaken(){
  backgroundColor = color(random(55,255),random(55,255),random(55,255));
  background(backgroundColor);
}

function drawBall(){
  fill(174,28,164);
  ellipse(x,y,150,150);
}

function info(){
  textSize(40);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
}

