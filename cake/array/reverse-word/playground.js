// i: string arr o: string arr
const reverseWord = (wordsArr) => {
  // check input
  if (!wordsArr) return;
  // empty string tracker
  // reverse arr
  reverseStr(wordsArr, 0, wordsArr.length - 1);

  // loop looking for empty string
  reverseInnerWord(wordsArr);

  // loop emp
  // return wordsArr
  return wordsArr;
};

function reverseInnerWord(arr) {
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ' || i === arr.lenghth - 1) {
      reverseStr(arr, start, i - 1);
      start = i + 1;
    }
  }
}

function reverseStr(arr, startIndex, endIndex) {
  // while start less end
  while (startIndex < endIndex) {
    // last start temp
    const temp = arr[startIndex];
    // keep track if ' '
    // start equal end
    arr[startIndex] = arr[endIndex];
    // end equal start
    arr[endIndex] = temp;
    // incement start
    startIndex++;
    // decrease end
    endIndex++;
  }
}

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];