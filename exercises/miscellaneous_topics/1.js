function sum(...values) {
  return values.reduce((a, b) =>  a + b);
}

console.log(sum(1, 4, 5, 6)); // 16