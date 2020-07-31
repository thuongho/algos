/**
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 
Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
// i: number arr o: number arr with even first odd last
//    l
// [4,1,3,2]
//        r
var sortArrayByParity = function (A) {
  // Check input
  if (!A || A.length < 2) return A;
  // use 2 pointers to loop through array
  let left = 0;
  let right = A.length - 1;
  // if left pointer is odd and right is even swap
  while (left < right) {
    // increment left or decrease right
    if (!isEven(A[left]) && isEven(A[right])) {
      swap(A, left, right);
      left++;
      right--;
    } else {
      if (isEven(A[left])) {
        left++;
      }
      if (!isEven(A[right])) {
        right--;
      }
    }
  }
  return A;
};

function isEven(num) {
  return num % 2 === 0;
}

function swap(arr, i1, i2) {
  return ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
}
