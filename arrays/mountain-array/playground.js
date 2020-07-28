/**
Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

Example 1:

Input: [2,1]
Output: false
Example 2:

Input: [3,5,5]
Output: false
Example 3:

Input: [0,3,2,1]
Output: true
 

Note:

0 <= A.length <= 10000
0 <= A[i] <= 10000 
*/
/**
 * @param {number[]} A
 * @return {boolean}
 */
// i: number array o: boolean
// [0,3,2,1]
var validMountainArray = function (A) {
  if (!A || A.length < 3) return false;

  // previous number
  // current number
  let prevNum = A[0];
  let currIdx = 1;
  let currNum = A[currIdx];
  const length = A.length;
  let slope = 0;

  // loop through array
  while (currIdx < length) {
    // plateau return false
    if (prevNum === currNum) return false;
    // slope is downward from the start false
    if (!slope && currNum < prevNum) return false;

    // upward slope
    // current number > prev
    if (slope >= 0) {
      slope = currNum < prevNum ? -1 : 1;
    } else {
      // downward slope
      // current number < prev
      // slope is upward return false
      if (currNum > prevNum) return false;
    }
    currIdx++;
    prevNum = currNum;
    currNum = A[currIdx];
  }

  // return true
  return slope === -1;
};
