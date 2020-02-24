(function() {
  // good for if the array is almost sorted. If you have live data coming in, this is good, cuz it just loops through quick
  // insertion sort left side is sorted
  // sort by findind the correct place to insert the value
  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

  // i: arr o: sorted arr
  function insertionSort(array) {
    // loop arr starting 1
    for (let o = 1; o < array.length; o++) {
      let currVal = array[o];
      // inner loop starts outer current val til zero and prev val smaller
      for (var i = o - 1; i >= 0 && array[i] > currVal; i--) {
        // check prev val > current val & set prev val curr index
        if (currVal < array[i]) {
          array[i + 1] = array[i];
        }
      }
      array[i + 1] = currVal;
    }
    // end of inner loop set current val to inner index + 1
    // return array
    return array;
  }

  insertionSort(numbers);
  console.log(numbers);

})();