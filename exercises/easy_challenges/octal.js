class Octal {
  constructor(octal) {
    this.octal = octal;
    this.validateInput();
  }

  static INVALID_NUMBERS = '89';

  toDecimal() {
    return this.octal.split('').reduce((decimal, digit, index) => {
      return decimal + (digit * (8 ** (this.octal.length - index - 1)));
    }, 0);
  }

  validateInput() {
    if (this.octal.match(/[^0-7]/g)) this.octal = '0';
  }
}

module.exports = Octal;