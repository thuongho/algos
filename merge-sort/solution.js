// are the input sorted arrays?
// always 2 arrays
// numbers are int, floats, negs

// input is 2 arrays
// output is a merged sorted array
const mergeSortArrays = (arr1, arr2) => {
  // check input null, undefined, blank, one array, blank array
  if (!arr1 || !arr2) {
    return;
  }

  // merged array
  const merged = [];
  // one solution would be to check and shift the array
  // could be costly to shift it tho

  // another solution is to use pointers
  // left and right
  let left = 0;
  let right = 0;
  // once one side reaches the length
  while (left < arr1.length && right < arr2.length) {
    // smaller of the two will be added to the merged array
    if (arr1[left] <= arr2[right]) {
      merged.push(arr1[left]);
      left++;
    } else {
      merged.push(arr2[right]);
      right++;
    }
  }
  // then add the rest of the other to the merged array
  
  // return the array
  return merged.concat(arr1.slice(left)).concat(arr2.slice(right));
};
// O(a + b)

mergeSortArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31]