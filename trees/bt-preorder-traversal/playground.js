/**
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// i: node o: number arr
var preorderTraversal = function (root) {
  const final = [];
  const traverse = (node) => {
    if (node) final.push(node.val);
    if (node && node.left) traverse(node.left);
    if (node && node.right) traverse(node.right);
  };
  traverse(root);
  return final;
};
