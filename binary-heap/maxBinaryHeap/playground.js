class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // i: number, o: arr
  insert(val) {
    // push into values
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  // remove root parent
  // i: null o: arr
  // COME BACK TO FIX THIS
  extractMax() {
    const arr = this.values;
    const swap = (i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    // swap root with last child
    swap(0, arr.length - 1);
    // remove last
    const max = arr.pop();
    // initial parent
    let parentIdx = 0;
    let parent = arr[parentIdx];
    // bubble down by comparing parent with children
    while (parentIdx < arr.length - 1) {
      // children
      const childLeftIdx = parentIdx * 2 + 1;
      const childRightIdx = childLeftIdx + 1;
      const childLeft = arr[childLeftIdx];
      const childRight = arr[childRightIdx];
      let swapNeeded = false;
      let swapIdx;
      // check both children and swap with bigger child
      // no left child means no right child
      if (childLeft === undefined) break;

      if (childLeft > parent) {
        swapNeeded = true;
        swapIdx = childLeftIdx
      }
      if (childRight && parent < childRight) {
        swapNeeded = true;
        if (childRight > childLeft) {
          swapIdx = childRightIdx;
        }
      }

      if (!swapNeeded) break;
      swap(parentIdx, swapIdx);
      parentIdx = swapIdx;
    }
    return max;
  }

  bubbleUp() {
    const arr = this.values;
    const swap = (i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    let current = arr.length - 1;
    while (current > 0) {
      let parent = Math.floor((current - 1) / 2);
      console.log('idx', current, parent);
      // check with parent
      if (arr[current] <= arr[parent]) break;
      // swap if larger than parent
      swap(current, parent);
      current = parent;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// [55, 39, 41, 18, 27, 12, 33]
heap.extractMax();
// [41, 39, 33, 18, 27, 12]