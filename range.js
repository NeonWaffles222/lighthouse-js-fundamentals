
function range(start, end, step) {
  let range = [];
  if (start > end || step <= 0 || !step) {
    return range;
  }
  while (start <= end) {
    range.push(start);
    start += step;
  }
  return range;
}
let x;
console.log(range(2, 10, x));
