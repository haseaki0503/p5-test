var sphereRadius = 40;
var speed = 10;
var numSphere = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  
  sphere=[];
  for(var i=0; i < numSphere; i++) {
    sphere[i] = new Sphere(windowWidth/2, 50, 0, 10);
  }
}

function draw() {
  background(255);
  for(var i=0; i < numSphere; i++) {
    sphere[i].checkEdge();
    sphere[i].redraw();
  }
}


//Sphere
var Sphere = function(posX, posY, xd, yd) {
  this.posX = posX;
  this.posY = posY;
  this.xd   = xd;
  this.yd   = yd;
}

Sphere.prototype.checkEdge = function() {
  var randomSpeed = speed + random(speed);

  if(this.posX+sphereRadius/2 >= width) {
    this.xd = -randomSpeed;
    this.yd += random(-speed/2, speed/2);
  }
  if (this.posX-sphereRadius/2 <= 0){
    this.xd =  randomSpeed;
    this.xd += random(-speed/2, speed/2);
  }
  if(this.posY+sphereRadius/2 >= height) {
    this.yd = -randomSpeed;
    this.xd += random(-speed/2, speed/2);
  }
  if (this.posY-sphereRadius/2 <= 0){
    this.yd =  randomSpeed;
    this.xd += random(-speed/2, speed/2);
  }
}

Sphere.prototype.redraw = function(){
    ellipse(this.posX, this.posY, sphereRadius, sphereRadius);
    this.posX += this.xd;
    this.posY += this.yd;
}