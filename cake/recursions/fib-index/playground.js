/**
Write a function fib() that takes an integer nn and returns the nnth Fibonacci ↴ number.

Let's say our Fibonacci series is 0-indexed and starts with 0. So:

fib(0);  // => 0
fib(1);  // => 1
fib(2);  // => 1
fib(3);  // => 2
fib(4);  // => 3
...
 */
function fib(n) {
  // Compute the nth Fibonacci number
  buildFibArr = memo(buildFibArr);
  const fibArr = buildFibArr(n);
  return 0;
}

function fibSlow(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

function memo(fn) {
  const cache = new Map();
  return function (...args) {
    if (cache.has(args)) return cache.get(args);

    const result = fn.apply(null, args);
    cache.set(args, result);
    return fibArr;
  };
}
