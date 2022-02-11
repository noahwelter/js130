class Series {
  constructor(string) {
    this.string = string;
  }

  slices(length) {
    this.validateLength(length);

    let allSeries = [];

    for (let start = 0; start <= this.string.length - length; start += 1) {
      allSeries.push(
        this.string.split('')
          .slice(start, start + length)
          .map(char => Number(char))
      );
    }

    return allSeries;
  }

  validateLength(length) {
    if (this.string.length < length) throw new Error();
  }
}

module.exports = Series;