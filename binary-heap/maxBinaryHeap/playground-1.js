class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // push val
    // bubble up
    // check with parent
    // Math.floor((index - 1) / 2)
    // swap if child is less than parent
    // do til child index is 0
  }

  extractMax() {
    // swap 0 with index - 1
    // pop max
    // bubble down
    // check parent with left and right child
    // left: 2 * parent + 1
    // right 2 * parent + 2
    // if no left break
    // swap with the larger child
  }
}