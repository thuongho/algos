/**
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Note: 

1 <= preorder.length <= 100
The values of preorder are distinct.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
// i: number arr  o: bst
var bstFromPreorder = function(preorder) {
  // check inputs
  // first number root
  let root = null;
  for (let num of preorder) {
    root = helper(root, num);
  }
  return root;

  // helper function arr node
  function helper(node, val) {
    const currNode = new TreeNode(val);
    // break case
    if (node === null) return currNode;
    // left
    if (val < node.val) {
      node.left = helper(node.left, val);
    }
    // right
    if (val > node.val) {
      node.right = helper(node.right, val);
    }
    // return node
    return node;
  }
};
// O(n^2) O(n)