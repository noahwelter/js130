class SumOfMultiples {
  constructor(...numbers) {
    this.numbers = numbers;
  }

  static DEFAULT_NUMBERS = [3, 5];

  static to(maximum) {
    return new SumOfMultiples(...SumOfMultiples.DEFAULT_NUMBERS).to(maximum);
  }

  getList(maximum) {
    return this.numbers.reduce((list, number) => {
      for (let factor = number; factor < maximum; factor += number) {
        if (!list.includes(factor)) list.push(factor);
      }

      return list;
    }, []);
  }

  to(maximum) {
    return this.getList(maximum).reduce((sum, number) => sum + number, 0);
  }
}

SumOfMultiples.to(1);

module.exports = SumOfMultiples;