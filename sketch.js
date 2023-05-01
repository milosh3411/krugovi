function setup() {
  let w = 540;
  let h = 960;
  createCanvas(w, h);
  noFill()
  smooth();
  stroke(0, 0, 0, 160);
  strokeWeight(2);
}
//create function that draws concentric circles at distance d from each other, starting with radius r0, and ending with radius r1, with center at x, y
function concentricCircles(x, y, r0, r1, d) {
  for (let r = r0; r < r1; r += d) {
    ellipse(x, y, r, r);
  }
}

//concentric circles that are rotated by angle a
function rotatedConcentricCircles(x, y, e, r0, r1, d, a) {
  push();
  translate(x, y);
  rotate(a);
  concentricCircles(0, 0+e, r0, r1, d);
  pop();
}

function draw() {
  // let a be a value between 0 and 2PI proportional to the frameCount modulo 100
  let a = map(frameCount % 360, 0, 360, 0, TWO_PI);
  background(255, 255, 204);
  rotatedConcentricCircles(270, 480, 0, 50, 500, 6.9, 0);
  rotatedConcentricCircles(270, 480, 20, 90, 459, 9.1, a);
  rotatedConcentricCircles(270, 480, -20, 91, 461, 8.5, -a);
}
