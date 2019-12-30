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
// input two singly linked list output singly linked list
// no neg numbers and not empty
var addTwoNumbers = function(l1, l2) {
  //     check input
      if (!l1 || !l2) {
          return;
      }
  //     reverse order of linked list
  //     string to hold l1
  //     string to hold l2
      const reversedL1 = getReverseValLL(l1);
      const reversedL2 = getReverseValLL(l2);
  
  //     convert string to int
  //     add the two string
  // fail on scientific numbers
      const linkSum = parseInt(reversedL1, 10) + parseInt(reversedL2, 10);
  
  //     convert to sum to str and loop through creating new node
      let resultList;
  //     reverse sum;
      const linkSumStr = linkSum.toString();
      const len = linkSumStr.length;
  
  //     ref currentNode
      let currentNode;
      for (let i = len - 1; i >= 0; i--) {
  //     create a new linked list with each number
          const newNode = new ListNode(linkSumStr[i]);
  //         set resultList to new node if first time
          if (resultList === undefined) {
              resultList = newNode;
          } else {
  //         set current node's next to new node
              currentNode.next = newNode;
          }
  //         set currentNode to new node
          currentNode = newNode;
      }
      return resultList;
  }; //O(n) time O(n) space
  
  function getReverseValLL(linkedList) {
  //     ref str
      let reversed = '';
  //     ref node
      let node = linkedList;
  //     loop through linked lists by checking end of list
      while (node) {
          reversed = node.val.toString() + reversed;
          node = node.next;
      }
      return reversed;
  }