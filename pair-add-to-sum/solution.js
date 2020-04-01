// better
// i: arr of numbers, number (sum)
// o: boolean

function hasPairWithSum(arr, sum) {
  // replace with hash
  const mySet = new Set();

  for (let num of arr) {
    if (mySet.has(num)) return true;
    mySet.add(sum - num);
  }
  return false;
}
// O(n^2) - brute force
// O(n) time O(n) space
