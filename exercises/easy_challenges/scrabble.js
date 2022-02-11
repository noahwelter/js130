class Scrabble {
  static LETTER_SCORES = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10,
  }

  constructor(word) {
    this.word = this.cleanse(word);
  }

  cleanse(word) {
    return word ? word.toLowerCase().replace(/[^a-z]/g, '') : '';
  }

  score() {
    return this.word.split('')
      .reduce((score, letter) => score + this.getLetterScore(letter), 0);
  }

  getLetterScore(letter) {
    return Object.entries(Scrabble.LETTER_SCORES)
      .find(([ letters, ]) => {
        return letters.split('').includes(letter);
      })
      .at(1);
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;