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
 background(backgroundColor);
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
  
  if(x - 75 < 0){
    Vx = -Vx * bMulti;
    x = 0 + 75;
  }
  if(x + 75 > windowWidth){
    Vx = -Vx * bMulti;
    x = windowWidth - 75;
  }
  if(y - 75 < 0){
    Vy = -Vy * bMulti;
    y = 0 + 75;
  }
  if(y + 75 > windowHeight){
    Vy = -Vy * bMulti;
    y = windowHeight - 75;
  }
}

function deviceShaken(){
  backgroundColor = color(random(55,255),random(55,255),random(55,255));
}

function drawBall(){
  fill(174,28,164);
  ellipse(x,y,150,150);
}

function info(){
 textSize(40);
 fill(0);
 text("Rotationx: " + rotationX, + x + 80 - 20);
 text("Rotationy: " + rotationY, + y + 80 + 30);
}

