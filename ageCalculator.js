

function ageCalculator(name, birthYear, currentYear) {
  let age = name + " is " + (currentYear - birthYear) + " years old.";
  return age;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));