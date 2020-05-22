/**
 * Write a function to find the 2nd largest element in a binary search tree. ↴
 */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// i: node o: number
function findSecondLargest(treeRoot) {
  // check input
  if (!treeRoot || (!treeRoot.left && !treeRoot.right))
    throw new Error('Must have at least 2 nodes');
  // pointers
  let max = treeRoot.value;
  let secondLargest = null;

  let node = treeRoot;
  while (node) {
    // right exist
    if (node.right) {
      secondLargest = max;
      max = node.right.value;
      node = node.right;

      // else left only
    } else if (node.left) {
      secondLargest = findLargest(node.left);
      node = null;

      // no left or right
    } else {
      node = null;
    }
  }
  return secondLargest;
}

function findLargest(node) {
  if (!node) return;
  while (node.right) {
    node = node.right;
  }
  return node.value;
}

// ------------------------
// function findSecondLargest(treeRoot) {
//   // Find the second largest item in the binary search tree
//   // check input
//   if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
//     throw new Error('Must have at least 2 nodes');
//   }
//   // secondLargest
//   let secondLargest = null;
//   // max
//   let max = treeRoot.value;
//   let node = treeRoot;

//   // loop
//   while (node) {
//     // right exist
//     if (node.right) {
//       // max right
//       max = node.right.value;
//       // second is current value
//       secondLargest = node.value;
//       node = node.right;

//       // else left only
//     } else if (node.left) {
//       // largest second
//       secondLargest = findLargest(node.left);
//       node = null;
//     } else {
//       node = null;
//     }
//   }

//   return secondLargest;
// }

// function findLargest(node) {
//   if (!node) return;
//   while (node) {
//     if (!node.right) return node.value;
//     node = node.right;
//   }
// }

// function findLargest(node) {
//   if (!node) return;
//   if (node.right) findLargest(node.right);
//   return node.value;
// }

// // i: node o: number
// function findSecondLargest(treeRoot) {
//   // Find the second largest item in the binary search tree
//   // check input
//   if (!treeRoot) return;
//   // secondLargest
//   let secondLargest = null;
//   // max
//   let max = treeRoot.value;
//   let node = treeRoot;

//   // loop
//   while (node) {
//     // right exist
//     if (node.right) {
//       // max right
//       max = node.right.value;
//       // second is current value
//       secondLargest = node.value;
//       node = node.right;

//     // else left only
//     } else if (node.left) {
//       // largest second
//       secondLargest =
//     } else {
//       node = null;
//     }
//   }

//   return secondLargest;
// }
