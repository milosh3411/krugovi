let period;
let fps;
let period_marks;
let v1_marks;
function setup() {
  let w = 540;
  let h = 960;
  createCanvas(w, h);
  noFill();
  smooth();
  stroke(0, 0, 0, 160);
  strokeWeight(2);
  //set frame per second to 60
  fps = 24;
  frameRate(fps);
  period = 12;
  period_marks = [0, 20, 50, 70, 100];
  v1_marks =     [0, 10, 80, 100, 100];
}
function draw() {
  // let a be a value between 0 and 2PI proportional to the frameCount modulo 360
  let a = map(frameCount % 360, 0, 360, 0, TWO_PI);
  let pp = get_period_percent(period, fps, "tooth-saw");
  let v1 =
    400 -
    get_value(
      get_period_percent(period, fps, "tooth-saw"),
      period_marks,
      400,
      v1_marks
    );
  console.log("period percent: " + floor(pp), "v1: " + floor(v1));
  background(232, 220, 184); //aged paper color
  rotatedConcentricCircles(270, 480, 0, 50, 500, 18, 0);
  rotatedConcentricCircles(270, 480 - v1, 20, 90, 459, 9.1, a);
  rotatedConcentricCircles(270, 480 + v1, -20, 91, 461, 8.5, -a);
  //text(sec + "s", 10, 10)
}
