let period1,period2,period3;
let fps;
let period_marks1,period_marks2,period_marks3;
let v1_marks,v2_marks,v3_marks;
let v1min,v1max,v2min,v2max,v3min,v3max;
function setup() {
  let w = 540;
  let h = 960;
  createCanvas(w, h);
  noFill();
  smooth();
  stroke(0, 0, 0, 130);
  strokeWeight(8);
  //set frame per second to 60
  fps = 54;
  frameRate(fps);
  period1 = 12;
  period2 = 6;
  period_marks1 = [0, 20, 30, 80, 100];
  period_marks2 = [0, 100];
  v2_marks = [0, 100];
  v1_marks = [0, 20, 50, 100, 100];
  v1min = 0;
  v1max = 400;
  v2min = 90;
  v2max = 900;
}
function draw() {
  // let a be a value between 0 and 2PI proportional to the frameCount modulo 360
  let a = map(frameCount % 360, 0, 360, 0, TWO_PI);
  let pp1 = get_period_percent(period1, fps);
  let pp2 = get_period_percent(period2, fps);
  let v2 = get_value(pp2, period_marks2, v2min, v2max, v2_marks);
  let v1 = 400 - get_value(pp1, period_marks1, v1min, v1max, v1_marks);
  //console.log("period percent: " + floor(pp), "value: " + v,"v1: " + floor(v1));
  //background(232, 220, 184); //aged paper color
  //background(225,241,253); //light blue
  background(253, 184, 19); //orange
  //rotatedConcentricCircles(270, 480, 10, 0, 40, 7, 3*a);
  stroke(0, 0, 0, 130);
  push();
  translate(270, 480);
  rotate(a / 2);
  rotatedConcentricCircles(0, 0, 10, 80, v2, 21, 3 * a);
  rotatedConcentricCircles(0, 0 - v1, 20, 80, v2, 24.1, 2 * a);
  rotatedConcentricCircles(0, 0 + v1, -20, 81, v2, 26.5, -2 * a);
  pop();
  //stroke(0,155,214,130);
  //rotatedConcentricCircles(270, 480, 10, 400, 430, 19, -a);
  //text(sec + "s", 10, 10)
}
// toggle noloop on enter
function keyPressed() {
  if (keyCode === ENTER) {
    if (isLooping()) {
      noLoop();
    } else {
      loop();
    }
  }
}
