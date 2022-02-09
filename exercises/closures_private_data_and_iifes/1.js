function myBind(func, context) {
  return function() {
    func.call(context, ...arguments);
  };
}

let obj = {a: 'first', b: 'second'};

function print(testArg) {
  for (let prop in this) {
    console.log(this[prop]);
    console.log(testArg);
  }
}

let func = myBind(print, obj);
func('Additional argument...');