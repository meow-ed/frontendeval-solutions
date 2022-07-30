function debounce(callback, interval) {
  if (interval <= 0) {
    throw `${interval} is not a valid interval`;
  }
  if (!(callback instanceof Function)) {
    throw `${callback} is not a function`;
  }
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, interval);
  };
}
