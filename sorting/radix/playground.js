// assume base 10
// takes number and index
// 12345, 0 => 5
// 12345, 1 => 4
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

// pass in base 10 number get back digit count
// 23 => 2
// 375 => 3
function digitCount(num) {
  // return Math.abs(num).toString().length;
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

function radixSort(arr) {
  // define a function that accepts a list of numbers
  // Figure out how many digits the largest number has
  // Loop from k = 0 up to the largest number of digits
  // For each iteration of the loop:
    // create buckets for each digit (0-9)
    // place each number in the corresponding bucket based on its kth digit
  // replace existing array with values in the bucket, from 0 - 9
  // return array
}