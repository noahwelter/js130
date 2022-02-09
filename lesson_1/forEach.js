function forEach(array, callback, context) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(context, array[index], index, array);
  }
}

function filter(array, callback) {
  let filtered = [];

  for (let item of array) {
    if (callback(item)) filtered.push(item);
  }

  return filtered;
}

function map(array, callback) {
  let mapped = [];

  for (let item of array) {
    mapped.push(callback(item));
  }

  return mapped;
}

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let iterateArray = array;

  if (!accumulator) {
    accumulator = array[0];
    iterateArray = array.slice(1);
  }

  for (let item of iterateArray) {
    accumulator = callback(accumulator, item);
  }

  return accumulator;
}

function reduceFilter(array, callback) {
  return array.reduce((accum, val) => {
    if (callback(val)) accum.push(val);
    return accum;
  }, []);
}

function reduceMap(array, callback) {
  return array.reduce((accum, val) => {
    accum.push(callback(val));
    return accum;
  }, []);
}

function forEachObject(obj, callback) {
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) callback(obj[item]);
  }
}