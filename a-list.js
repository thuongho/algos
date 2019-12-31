// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
// input 2 args, n pos int and arr of pos int
// output int GCD
// i: 5, [2 ,4, 6, 8, 10]
// o: 2
// i: 5, [2, 3, 4, 5, 6]
// o: 1
// i: 5, [2, 4, 6, 8, 10]
// o: 2
function generalizedGCD(num, arr)
{
    // WRITE YOUR CODE HERE
    const fastGCD = superGCD();
    // check input
    // ref to answer
    let answer = arr[0];
    
    // iterate through the array
    for (let i = 1; i < num; i++) {
    // find gcd of current number and next number
    // use recursion to find gcd of 2 numbers
        let currNum = arr[i];
        answer = fastGCD(answer, currNum);
    }
    // return the answer
    return answer;
} // O(2^n) O(n)

// helper gcd function recursion
// DP cache to speed up recursion (come back if time permits)
function superGCD() {
  const cache = {};
  return function gcd(num1, num2) {
    const args = [num1, num2];
    if (cache[args]) {
      return cache[args];
    } else {
      // break case
      if (!num2) {
        return num1;
      }
      return gcd(num2, num1 % num2);
    }
  }
}
const fastestGCD = superGCD();


// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const answer = fn.apply(this, args);
//     cache[args] = answer;
//     return answer;
//   }
// }

// gcd = memoize(gcd);



// FUNCTION SIGNATURE ENDS