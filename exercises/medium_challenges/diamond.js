class Diamond {
  static makeDiamond(char) {
    const A_CODE = 65;

    let code = char.charCodeAt(0);
    let size = (code - A_CODE) + 1;
    let arr = [];

    for (let row = 0; row < size; row += 1) {
      let leadingSpaces = ' '.repeat(size - row - 1);
      let letter = String.fromCharCode(A_CODE + row);
      let startString = (leadingSpaces + letter).padEnd(size);
      let endString = startString.split('').reverse().slice(1).join('');

      arr.push(startString + endString + '\n');
    }

    let top = arr.join('');
    let bottom = arr.reverse().slice(1).join('');

    return top + bottom;
  }
}

module.exports = Diamond;
