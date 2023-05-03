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
  stroke(0, 0, 0, 130);
  strokeWeight(8);
  //set frame per second to 60
  fps = 24;
  frameRate(fps);
  period = 12;
  period_marks = [0, 20, 40, 80, 100];
  v1_marks =     [0, 20, 70, 100, 100];
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
  //background(232, 220, 184); //aged paper color
  //background(225,241,253); //light blue
  background(253, 184, 19); //orange
  //rotatedConcentricCircles(270, 480, 10, 0, 40, 7, 3*a);
  stroke(0, 0, 0, 130);
  rotatedConcentricCircles(270, 480, 10, 90, 900, 21, 3*a);
  rotatedConcentricCircles(270, 480 - v1, 20, 90, 959, 24.1, 2*a);
  rotatedConcentricCircles(270, 480 + v1, -20, 91, 961, 26.5, -2*a);
  //stroke(0,155,214,130);
  //rotatedConcentricCircles(270, 480, 10, 400, 430, 19, -a);
  //text(sec + "s", 10, 10)   
}
