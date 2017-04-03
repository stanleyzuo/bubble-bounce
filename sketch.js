var bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY, random(25,100), random(1,4)));
}

function mousePressed() {
  bubbles.splice(0, 10);
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(x, y, sz, sp) {
  this.x = x;
  this.y = y;
  this.sz = sz;
  this.sp = sp;
  this.speedx = random(-1, 1) * sp;
  this.speedy = random(-1, 1) * sp;

  this.display = function() {
    stroke(255);
    fill(255,255,255,50);
    ellipse(this.x, this.y, this.sz, this.sz);
  }

  this.move = function() {
    // this.x = this.x + random(-1, 1);
    // this.y = this.y + random(-1, 1);
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
    if ((this.x >= width) || (this.x <= 0)) {
      this.speedx = -this.speedx;
    }
    if ((this.y >= height) || (this.y <= 0)) {
      this.speedy = -this.speedy;
  }
}
}