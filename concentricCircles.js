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
  concentricCircles(0, 0 + e, r0, r1, d);
  pop();
}
