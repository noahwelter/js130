class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(sequence) {
    let differences = 0;

    for (let index in this.sequence) {
      if (!sequence[index]) break;
      if (this.sequence[index] !== sequence[index]) differences += 1;
    }

    return differences;
  }
}

module.exports = DNA;