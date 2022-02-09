function myBind(func, context, ...partialArgs) {
  return (...args) => func.call(context, ...partialArgs, ...args);
}


function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15