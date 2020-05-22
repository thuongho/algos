function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  let current = rootNode;

  while (current) {
    // Case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    // Case: current is parent of largest, and largest has no children,
    // so current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}
// O(log n) or O(h) if not balanced
// O(1) space
