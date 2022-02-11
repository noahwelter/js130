class Anagram {
  constructor(word) {
    this.matchWord = word;
  }

  match(words) {
    return words.filter(word => {
      return this.isAnagram(word, this.matchWord);
    });
  }

  sortChars(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  isSameWord(word1, word2) {
    return word1.toLowerCase() === word2.toLowerCase();
  }

  isAnagram(word1, word2) {
    return !this.isSameWord(word1, word2) &&
      this.sortChars(word1) === this.sortChars(word2);
  }
}

module.exports = Anagram;