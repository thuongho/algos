/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.
  *******
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
  [5,6,4]
  expected:
  [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
*/
// input 2 singly linked list output a new singly linked list
var addTwoNumbers = function(l1, l2) {
    // grab each val and add it to a string in reverse
    // convert it to an array
    // iterate through the array using pop and add the col to a new array
    // while array 1 or array 2 has length
    // add each col
    // use carry to add next col
    // reverse the sum
    // create a new linked list from the reversed sum
};

var addTwoNumbers = function(l1, l2) {
  // check input
  if (!l1 || !l2) {
    return;
  }
  // ref nodeOne set to head l1
  let nodeOne = l1;
  // ref nodeTwo set to head l2
  let nodeTwo = l2;
  // ref new linkedList
  let head;
  // ref current node;
  let currentNode;
  // ref sum that adds the two vals
  let sum = 0;
  // ref carry for double digits
  let carry = 0;
  // repeat until end of both linkedlist
  while (nodeOne || nodeTwo) {
    const valOne = nodeOne ? nodeOne.val : 0;
    const valTwo = nodeTwo ? nodeTwo.val : 0;
    sum = valOne + valTwo + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }
    // create a new node from the sum
    const newNode = new ListNode(sum);
    if (!head) {
      head = newNode;
    } else {
      currentNode.next = newNode;
    }
    currentNode = newNode;
    // nodeOne set to nodeOne.next
    if (nodeOne) {
      nodeOne = nodeOne.next;
    }
    // same for nodeTwo
    if (nodeTwo){
      nodeTwo = nodeTwo.next;
    }
  }

  // carry goes beyond length of l1 and l2
  if (carry > 0) {
    currentNode.next = new ListNode(carry);
  }

  // iterate to the end of the other linkedlist
  // return new linkedlist
  return head;
};  // O(n) time O(n) space