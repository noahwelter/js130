let Robot = (function() {

  let previousSerialNumbers = [];
  const NUMBERS = [];
  const LETTERS = [];

  for (let num = 0; num <= 9; num += 1) {
    NUMBERS.push(num);
  }

  for (let letter = 0; letter < 26; letter += 1) {
    const A_CODE = 65;
    LETTERS.push(String.fromCharCode(A_CODE + letter));
  }

  function randomNumber() {
    let randomIndex = Math.floor(Math.random() * NUMBERS.length);
    return NUMBERS.at(randomIndex);
  }

  function randomLetter() {
    let randomIndex = Math.floor(Math.random() * LETTERS.length);
    return LETTERS.at(randomIndex);
  }

  return class Robot {
    constructor() {
      this.reset();
    }

    name() {
      return this.serialNumber;
    }

    reset() {
      do {
        this.serialNumber = '';

        for (let letterIndex = 0; letterIndex < 2; letterIndex += 1) {
          this.serialNumber += randomLetter();
        }

        for (let numberIndex = 0; numberIndex < 3; numberIndex += 1) {
          this.serialNumber += randomNumber();
        }
      } while (previousSerialNumbers.includes(this.serialNumber));

      previousSerialNumbers.push(this.serialNumber);
    }
  };
})();

 module.exports = Robot;