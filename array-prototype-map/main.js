function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      continue;
    }
    return false;
  }
  return true;
}

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}
