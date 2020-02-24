/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// i: arr nested numbers o: nested array
// is it relatively sorted?
// assume: nested tuples
/**
 * i: [[1,3],[2,6],[8,10],[15,18]]
 * o: [[1,6],[8,10],[15,18]]
 * prev [1,3] curr [2,6]
 * prev [1,6] curr [8,10]
 * final [[1,6]]
 * prev [8,10] curr [15,18]
 * final [[1,6], [8,10]]
 * prev [15, 18]
 **/
var merge = function(intervals) {
  // check inputs no interval, length < 2
  if (!intervals) return;
  // final arr
  const final = [];
  if (intervals.length < 1) return intervals;
  // sort intervals by first index
  intervals.sort((a, b) => a[0] - b[0]);
  // previous
  let prevIdx = 0;
  let previous = intervals[prevIdx]
  // current
  let currIdx = 1;
  // while curr less than interval length
  while (currIdx < intervals.length) {
    let current = intervals[currIdx];
    // check current with previous
    // previous i1 greater or equal curr i0 merge
    if (previous[0] >= current[0] || previous[1] >= current[0]) {
      // create new prev
      previous = [previous[0], current[1]];
    } else {
      // otherwise
      // final push previous
      final.push(previous);
      // prev to curr
      previous = current;
    }
    // increment curr
    currIdx++;
  }
  // push prev to final
  final.push(previous);

  return final;
};
// O(n) O(n)