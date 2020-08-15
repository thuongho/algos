/**
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
// Hint: use a queue for BF traversal
// i: tree node o: nested number arr
// [1,2,3,4,null,null,5]
var levelOrder = function (root) {
  const final = [];
  // check input
  if (!root) return final;
  // add node to queue
  const queue = [root, 'S'];
  final.push([root.val]);
  while (queue.length) {
    const childrenArr = [];
    // dequeue, add children to final value, queue children
    let node = queue.shift();
    while (node !== 'S') {
      if (node.left) {
        childrenArr.push(node.left.val);
        queue.push(node.left);
      }
      if (node.right) {
        childrenArr.push(node.right.val);
        queue.push(node.right);
      }
      node = queue.shift();
    }
    if (childrenArr.length) {
      final.push(childrenArr);
      queue.push('S');
    }
  }
  return final;
};
