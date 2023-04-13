function randomNumber(max, add = 0) {
  return Math.floor(Math.random() * max) + add;
}

function generateId() {
  let id = "";
  while (id.length < 19) {
    const len = id.length;
    if (len === 4 || len === 9 || len === 14) {
      id += "-";
      continue;
    }
    const random = randomNumber(3, 1);

    if (random === 1) {
      const randomUppercaseLetter = String.fromCharCode(randomNumber(26, 97));
      id += randomUppercaseLetter;
      continue;
    }
    if (random === 2) {
      const randomLowercaseLetter = String.fromCharCode(randomNumber(26, 65));
      id += randomLowercaseLetter;
      continue;
    }
    id += randomNumber(10);
  }
  return id;
}

const id = generateId();

// console.log(id);
