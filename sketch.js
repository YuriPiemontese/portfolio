function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  push();
  noFill();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 90.0);
  strokeWeight(2.5);
  stroke(0);
  star(0, 0, windowWidth / 2, 200 + abs((windowWidth / 2 - mouseX) / 2), 25);
  // console.log(windowHeight);
  // console.log(mouseX);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
