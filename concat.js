
function concat(firstLocation, secondLocation) {
  let total = [];

  for (let x = 0; x < firstLocation.length; x++) {
    total.push(firstLocation[x]);
  }
  for (let y = 0; y < secondLocation.length; y++) {
    total.push(secondLocation[y]);
  }
  return total;
}


console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);