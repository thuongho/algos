arr = [ [ 'a', 5 ], [ 'b', 1 ], [ 'f', 7 ], [ 'c', 7 ] ]
arr.sort((a, b) => {
  if (a[1] < b[1]) {
    return 1;
  } else if (a[1] > b[1]) {
    return -1;
  } else {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  }
})