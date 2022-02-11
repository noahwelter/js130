class RomanNumeral {
  constructor(decimalNumber) {
    this.decimalNumber = decimalNumber;
  }

  static CONVERSION_TABLE = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }


  toRoman() {
    let remainder = this.decimalNumber;

    return Object.entries(RomanNumeral.CONVERSION_TABLE)
      .sort(([ divisorA, ], [ divisorB, ]) => divisorB - divisorA)
      .reduce((romanNumeral, [ divisor, numeral ]) => {
        let count = Math.floor(remainder / divisor);

        romanNumeral += numeral.repeat(count);
        remainder %= divisor;

        return romanNumeral;
      }, '');
  }
}

module.exports = RomanNumeral;