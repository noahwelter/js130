class BeerSong {
  static bottles(number) {
    return BeerSong.beerCount(number) + (number === 1 ? ' bottle' : ' bottles');
  }

  static beerCount(number) {
    if (number === 0) return 'no more';
    if (number === -1) return '99';

    return String(number);
  }

  static finalPhrase(number) {
    return number === 0 ? `Go to the store and buy some more` : `Take ${BeerSong.itOrOne(number)} down and pass it around`;
  }

  static capitalize(word) {
    return word.at(0).toUpperCase() + word.slice(1);
  }

  static itOrOne(number) {
    return number === 1 ? 'it' : 'one';
  }

  static verse(number) {
    let before = BeerSong.bottles(number);
    let after = BeerSong.bottles(number - 1);
    let finalPhrase = BeerSong.finalPhrase(number);

    return `${BeerSong.capitalize(before)} of beer on the wall, ${before} of beer.\n` +
    `${finalPhrase}, ${after} of beer on the wall.\n`;
  }

  static verses(startNumber, endNumber) {
    let lyrics = BeerSong.verse(startNumber);

    for (let number = startNumber - 1; number >= endNumber; number -= 1) {
      lyrics += '\n' + BeerSong.verse(number);
    }

    return lyrics;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;