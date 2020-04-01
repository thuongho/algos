function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const results = fn.apply(this, args);
    cache[args] = results;
    return results;
  }
}