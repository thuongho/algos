/**
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
**/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let queue = [node, 'L'];
  let count = 0;
  while (queue.length) {
    const node = queue.shift();
    if (node === 'L') {
      count++;
      if (queue.length) queue.push('L');
    } else {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return count;
};

/**
Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5 
**/
var diameterOfBinaryTree = function(root, max=0) {
  let width = 0;
  dfs(root);
  return width;
  
  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    width = Math.max(width, left + right);
    return 1 + Math.max(left, right);
  }
};