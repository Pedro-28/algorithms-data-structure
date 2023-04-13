function splitList(array) {
  return array.reduce((acc, curr) => {
    if (typeof curr === "string") {
      acc.lettersArray.push(curr);
    } else if (typeof curr === "number") {
      acc.numbersArray.push(curr);
      if (curr > acc.highestNumber) {
        acc.highestNumber = curr;
      }
    }
    return acc;
  }, {
    lettersArray: [],
    numbersArray: [],
    highestNumber: null,
  });
}
