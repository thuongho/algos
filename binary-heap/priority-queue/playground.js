// use node class
// attributes value, priority, timestamp?

// min or max binary heap
// enqueue
// dequeue

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    this.timeStamp = new Date();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({value, priority})
  }

  dequeue() {
    return this.values.unshift();
  }
}