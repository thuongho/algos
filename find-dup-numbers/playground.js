/**
 find all numbers that occur more than once in an array of integers. What is a second way you might do the same problem? Which approach would you prefer and why? * 
 */
const findDupNumbers = (numArr) => {
  const final = [];
  if (!numArr || numArr.length < 2) return final;
  const numArrSorted = [...numArr].sort();
  for (let i = 0; i < numArrSorted.length; i++) {
    if (numArrSorted[i] === numArrSorted[i + 1]) {
      final.push(numArrSorted[i]);
      i += 2;
    }
  }
  return final;
};

const findDupNumbers2 = (numArr) => {
  if (!numArr || numArr.length < 2) return [];
  const final = new Set();
  const seen = new Set();
  for (let num of numArr) {
    if (seen.has(num)) {
      if (final.has(num)) continue;
      final.add(num);
    } else {
      seen.add(num);
    }
  }
  return Array.from(final.keys());
};

const findDupNumbers3 = (numArr) => {
  const final = [];
  if (!numArr || numArr.length < 2) return final;
  const seen = {};
  for (let num of numArr) {
    if (seen[num] === 1) final.push(num);
    seen[num] = seen[num] + 1 || 1;
  }
  return final;
};

const numArr = [1, 2, 2, 2, 3, 1];
findDupNumbers3(numArr);
