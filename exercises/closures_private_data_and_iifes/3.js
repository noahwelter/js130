function newStack() {
  let stack = [];

  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(val => console.log(val));
    },
  };
}

let stack = newStack();
stack.push(4);
stack.push(3);
stack.push(8);
stack.printStack();