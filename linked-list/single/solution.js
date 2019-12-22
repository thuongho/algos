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

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // create a new node
    const newNode = {
      value,
      next: null
    };
    // set the last node to new node
    this.tail.next = newNode;
    // point the tail to the new node
    this.tail = newNode;
    // increment length
    this.length++;
    return this;
  }

  prepend(value) {
    // create new node next pointing to the head
    const newNode = {
      value,
      next: null
    };
    newNode.next = this.head;
    // point the head to the new node
    this.head = newNode;
    // increment the length
    this.length++;
    return this;
  }

  insert(index, value) {
    // checks
    // if the index is 0, set to head
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    
    if (index >= this.length) {
      // if the index is out of range, set to tail
      this.append(value);
      return this.printList();
    }
    // create new node with the value
    const newNode = {
      value,
      next: null
    };
    // traverse down the node from head to find the index using counter
    const prevNode = this.lookupNode(index - 1);
    // reference the node at index
    newNode.next = prevNode.next;
    // current node and set it to the new node
    prevNode.next = newNode;
    // new node and set it to the reference
    // increment the length 
    this.length++;
    return this.printList();
  }

  remove(index) {
    // check params
    // reference the previous node
    const previousNode = this.lookupNode(index - 1);
    // reference the node to delete
    const removeNode = previousNode.next;
    // set the prev next to the next node
    previousNode.next = removeNode.next;
    // decrease length
    this.length--;
    return this.printList();
  }

  reverse() {
    // if length of 1 return list
    // if (!this.head.next) {
    //   return this.printList();
    // }
    // check length
    if (this.length > 1) {
      // ref head
      let first = this.head;
      // set tail to head
      this.tail = this.head;
      // ref second
      let second = first.next;
      // while second is not null set every node's next
      while (second) {
        // ref third node
        const temp = second.next;
        // second.next goes to first
        second.next = first;
        // first re-assign to second
        first = second;
        // second re-assign to temp
        second = temp;
        // repeat
      }
      // set tail next null
      this.head.next = null;
      // set head to first
      this.head = first;
    }
    return this.printList();
  }

  lookupNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
    // use next to find index
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    // print the values in an array
    // while the next is not null iterate through and add values to the array
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(2, 7);
myLinkedList.insert(200, 100);
myLinkedList.insert(0, 13);
myLinkedList.remove(2);
// myLinkedList.remove(2);
myLinkedList.reverse();


