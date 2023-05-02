function get_period_percent(period, fps, type) {
  let fc = frameCount % (fps * period);
  if (type == "jig-saw") {
    return (fc * 100) / (fps * period);
  } else if (type == "tooth-saw") {
    let fc_ts;
    if (isEvenDivision(frameCount, fps * period)) {
      fc_ts = fc;
    } else {
      fc_ts = fps * period - fc - 1;
    }
    return (fc_ts * 100) / (fps * period);
  }
}
function get_value(period_percent, period_marks, v_max, v_mark) {
  let i = 0;
  let j = 0;
  //find current time range
  for (let k = 0; k < period_marks.length - 1; k++) {
    if (
      period_percent >= period_marks[k] &&
      period_percent < period_marks[k + 1]
    ) {
      i = k;
      j = k + 1;
    }
  }
  let v;
  if (v_mark[i] == v_mark[j]) {
    v = (v_max * v_mark[i]) / 100;
  } else {
    v =
      v_max *
      map(
        period_percent,
        period_marks[i],
        period_marks[j],
        v_mark[i] / 100,
        v_mark[j] / 100
      );
  }
  return v;
}
//function that divides two whole numbers, calculates the whole number part of result and the remainder, and
// returns true if the whole number part is even, and false if the whole number part is odd
function isEvenDivision(numerator, denominator) {
  let whole = floor(numerator / denominator);
  let remainder = numerator % denominator;
  if (whole % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
