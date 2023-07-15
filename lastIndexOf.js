function lastIndexOf(range, num) {
  let last = -1;
  for (let x = 0; x < range.length; x++) {
    if (range[x] == num) {
      last = x;
    }
  }
  return last;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);