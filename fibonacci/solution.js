// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// input number int output int
// 4 >> 3
function fibonacciIterative(n) {
  // return n if it is less than 2
  if (n < 2) {
    return n;
  }
  // check input
  if (!n || typeof n !== 'number') {
    return;
  }
  // array with 0 1
  // [0, 1, 1, 2, 3]
  const arr = [0, 1];
  // start at 1 and loop to n
  for (let i = 2; i < n; i++) {
    // array push sum of prev 2 indices
    // 2 + 1
    const sum = arr[i - 1] + arr[i - 2];
    arr.push(sum);
  }
  // return last number of the array
  return arr[arr.length - 1];
} // O(n)
// fibonacciIterative(9);

// input int output int
function fibonacciRecursive(n) {
  // break when the count reaches n
  if (n < 2) {
    return n;
  }
  // return recursive n
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} // O(2^n)

fibonacciRecursive(9);