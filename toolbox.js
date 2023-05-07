function get_period_percent(period, fps) {
  let cycle_number = floor(frameCount / (fps * period));
  let counter = frameCount % (fps * period);
  let evenCycle = cycle_number % 2;
  if (evenCycle == 0) {
    return (counter * 100) / (fps * period);
  } else if (evenCycle == 1) {
    return ((fps * period - counter) * 100) / (fps * period);
  }
}
function get_value(period_percent, period_marks, v_min, v_max, v_mark) {
  let i = 0;
  let j = 0;
  //find current time range
  for (let k = 0; k < period_marks.length - 1; k++) {
    if (period_percent == 100) {
      i = period_marks.length - 2;
      j = period_marks.length - 1;
    } else {
      if (
        period_percent >= period_marks[k] &&
        period_percent < period_marks[k + 1]
      ) {
        i = k;
        j = k + 1;
      }
    }
  }
  let v;
  if (v_mark[i] == v_mark[j]) {
    v = v_min + ((v_max - v_min) * v_mark[i]) / 100;
  } else {
    v =
      v_min +
      (v_max - v_min) *
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
