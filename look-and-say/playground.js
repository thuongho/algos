// i: number o: number
/*
i: 13112221
o: 1113213211
tracker = 1
counter = 1
result = 1113213211
*/ 
function lookAndSay(numSeq) {
  // check inputs, type number, blank, numseq < infinity, 0
  if (!numSeq) return undefined;
  // results str ''
  let results = '';
  // convert numSeq to str
  const numSeqStr = numSeq.toString();
  // tracker
  let tracker = numSeqStr[0];
  // counter
  let counter = 0;
  // loop 0 to length of numSeq (6)
  for (let char of numSeqStr) {
    // curr char compare with tracker
    if (char === tracker) {
      // if same increment count
      counter++;
    } else {
      // if diff
      // add results str count + tracker convert to str
      // update tracker to current char
      // reset count
      results += `${counter}${tracker}`;
      tracker = char;
      counter = 1;
    }
  }
  // end of loop add count + tracker
  results += `${counter}${tracker}`;
  // return results convert number
  return parseInt(results, 10);
}
// t O(n) s O(n)