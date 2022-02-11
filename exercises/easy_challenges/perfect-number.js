class PerfectNumber {
  constructor(number) {
    this.number = number;
    this.validateInput();
    this.setAliquotSum();
  }

  validateInput() {
    if (this.number < 0) throw new Error();
  }

  classify() {
    if (this.isPerfect()) return 'perfect';
    if (this.isAbundant()) return 'abundant';
    if (this.isDeficient()) return 'deficient';

    return null;
  }

  static classify(number) {
    return new PerfectNumber(number).classify();
  }

  isPerfect() {
    return this.aliquotSum === this.number;
  }

  isAbundant() {
    return this.aliquotSum > this.number;
  }

  isDeficient() {
    return this.aliquotSum < this.number;
  }

  getDivisors() {
    let divisors = [];

    for (let divisor = 1; divisor <= this.number / 2; divisor += 1) {
      if (this.number % divisor === 0) divisors.push(divisor);
    }

    return divisors;
  }

  calculateAliquotSum() {
    return this.getDivisors().reduce((sum, divisor) => sum + divisor);
  }

  setAliquotSum() {
    this.aliquotSum = this.calculateAliquotSum();
  }
}

module.exports = PerfectNumber;