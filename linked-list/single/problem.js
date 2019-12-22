// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

// create append method
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    // returns the list in an array
  } O(n)
  append(value) {
    // append a node the the end of the list
  } //O(1)
  prepend(value) {
    // prepend a node the the beginning of the list
  } //O(1)
  insert(index, value) {

  } // O(n)
  remove(index) {

  }// O(n)
  lookupNode(index) {

  } // O(n)
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);



