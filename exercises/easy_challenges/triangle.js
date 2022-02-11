class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.validateSides();
  }

  validateSides() {
    if (this.hasInvalidSideLengths() || this.hasInvalidSumOfSides()) {
      throw new Error();
    }
  }

  hasInvalidSideLengths() {
    return !this.sides.every(side => side > 0);
  }

  hasInvalidSumOfSides() {
    return !this.sides.every((side, index) => {
      return this.getOtherSides(index).reduce((sum, side) => sum + side) > side;
    });
  }

  kind() {
    if (this.isEquilateral()) return 'equilateral';
    if (this.isIsosceles()) return 'isosceles';
    if (this.isScalene()) return 'scalene';

    return null;
  }

  isEquilateral() {
    return this.getEqualSides().length === 3;
  }

  isIsosceles() {
    return this.getEqualSides().length === 2;
  }

  isScalene() {
    return this.getEqualSides().length === 0;
  }

  getEqualSides() {
    return this.sides.filter((side, index) => {
      return this.getOtherSides(index).includes(side);
    });
  }

  getOtherSides(index) {
    return [this.sides.at(index - 1), this.sides.at((index + 1) % 3)];
  }
}

module.exports = Triangle;