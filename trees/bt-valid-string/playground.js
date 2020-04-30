/**
Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 

We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

Example 1:

Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
Output: true
Explanation: 
The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
Other valid sequences are: 
0 -> 1 -> 1 -> 0 
0 -> 0 -> 0
Example 2:

Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
Output: false 
Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.
Example 3:

Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
Output: false
Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence. 

Constraints:

1 <= arr.length <= 5000
0 <= arr[i] <= 9
Each node's value is between [0 - 9].

Hint #1
Depth-first search (DFS) with the parameters: current node in the binary tree and current position in the array of integers.
Hint #2  
When reaching at final position check if it is a leaf node.
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
 * @param {number[]} arr
 * @return {boolean}
 */
/**
[0,1,0,0,1,0,null,null,1,0,0]
         0
    1          0
  0    1     0  n
n  1  0  0
[0,1,0,1]
*/
var isValidSequence = function (root, arr) {
  return dfs(root, arr);
};

function dfs(node, arr) {
  const number = arr[0];
  if (number === node.val) {
    // last node is a leaf
    if (arr.length === 1 && node.left === null && node.right === null)
      return true;
    // left
    if (node.left && dfs(node.left, arr.slice(1))) return true;
    // right
    if (node.right && dfs(node.right, arr.slice(1))) return true;
  }
  return false;
}
