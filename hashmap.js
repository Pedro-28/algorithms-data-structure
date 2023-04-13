function addition(array) {
  return array.reduce((acc, curr) => acc + curr);
}

function subtraction(array) {
  return array.reduce((acc, curr) => acc - curr);
}

function multiplication(array) {
  return array.reduce((acc, curr) => acc * curr);
}

function division(a, b) {
  if (b === 0) {
    throw Error("The dividend cannot be divided by 0");
  }
  return a / b;
}

const mathHashmap = new Map([
  ["addition", addition],
  ["subtraction", subtraction],
  ["multiplication", multiplication],
  ["division", division],
]);

// console.log(mathHashmap.get("addition")([5, 5, 2]));
// console.log(mathHashmap.get("subtraction")([1, 2, 3]));
// console.log(mathHashmap.get("multiplication")([2, 2, 4]));
// console.log(mathHashmap.get("division")(10, 2));
