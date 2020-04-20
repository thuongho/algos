// i: number arr, number arr o: number arr
const mergeArrays = (leftArr, rightArr) => {
  // check inputs
  if (!leftArr || !rightArr) return;
  // new array
  const combinedArr = [];
  // pointers
  let leftIndex = 0;
  let rightIndex = 0;
  const leftArrSize = leftArr.length;
  const rightArrSize = rightArr.length;
  // run until one array ends
  while(leftIndex < leftArrSize || rightIndex < rightArrSize) {
    const leftNum = leftArr[leftIndex];
    const rightNum = rightArr[rightIndex];
    // left smaller than right
    if (leftNum < rightNum) {
      combinedArr.push(leftNum);
      leftIndex++;
    } else {
    // right smaller than left
      combinedArr.push(rightNum);
      rightIndex++;
    }
  }
  // return new array
  return [...combinedArr, leftArr.slice(leftIndex), rightArr.slice(rightIndex)];
};
// O(n+m) O(n+m)
