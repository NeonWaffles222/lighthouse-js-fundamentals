const whichSchool = function (age) {

  let age = 24;

  if (age < 13) {
    return ("Elementary School");
  } else if (age >= 13 && age <= 18) {
    return ("Secondary School");
  } else {
    return ("Lighthouse Labs");
  }
}