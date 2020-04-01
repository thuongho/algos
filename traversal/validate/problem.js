/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root) {
    
};

function validBST(node, min=null, max=null) {
  if (max !== null && node.left > max) return false;
  if (min !== null && node.right < min) return false;
  // left
  if (node.left && !validBST(node.left, min, node.val)) return false;
  // right
  if (node.right && !validBST(node.right, node.val, max)) return false;
  return true;
}