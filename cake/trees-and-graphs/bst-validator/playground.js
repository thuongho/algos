/**
 * Write a function to check that a binary tree ↴ is a valid binary search tree. ↴
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

function isBinarySearchTree(treeRoot, min = null, max = null) {
  if (!treeRoot) return true;
  // Determine if the tree is a valid binary search tree
  if (min !== null && treeRoot.value > min) return false;
  if (max !== null && treeRoot.value < max) return false;

  if (treeRoot.left && !isBinarySearchTree(treeRoot.left, treeRoot.value, max))
    return false;
  if (
    treeRoot.right &&
    !isBinarySearchTree(treeRoot.right, min, treeRoot.value)
  )
    return false;

  return true;
}
// can cause stack overflow
// O(n) O(n)
