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
// input root node output is boolean
var isValidBST = function(root) {
  // check input
  if (!root) {
      return true;
  }
  // queue
  let queue = [];
  let min = this.root.val;
  let max = this.root.val;
  // add root to queue
  queue.push(root);
  // BFS - 
  // traverse the whole tree while queue is not empty
  while (queue.length) {
  // dequeue to get current node
      const {val, left, right} = queue.shift();

      if (left) {
          // return false if left is greater current
          if (left.val >= val || left.val >= max) {
              return false;
          }
          max = val;
          // if left is not null add left to queue
          queue.push(left);
      }
      
      if (right) {
          // return false if right is less than current
          if (right.val <= val || right.val <= min) {
              return false;
          }
          min = val;
          // if right is not null add right to queue
          queue.push(right);
      }
  } 
  
  // return true
  return true;
};