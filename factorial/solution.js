// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// input number int output is number int
// second arg is answer
function findFactorialRecursive(number) {
  // break case
  // number reaching 1
  if (number <= 2) {
    return number;
  }

  // return recursive function decreasing the number
  return number * findFactorialRecursive(number - 1);
  
} // O(n)

function findFactorialIterative(number) {
  // check input
  // catch 0 return 0
  if (number === 0) {
    return 0;
  }
  if (!number) {
    return;
  }
  // set answer to 1
  let answer = 1;
  // decrease the number to 1 while multiplying the answer
  while (number > 0) {
    answer *= number;
    number--;
  }
  // return answer
  return answer;
} // O(n) Time O(1) Space

findFactorialRecursive(1);
// findFactorialIterative(5);