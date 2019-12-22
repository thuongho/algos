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

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // create a new node
    const newNode = {
      value,
      next: null,
      prev: null
    };
    // set the last node to new node
    this.tail.next = newNode;
    // set newNode's prev to the tail
    newNode.prev = this.tail;
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
      next: null,
      prev: null
    };
    // set head's prev to newNode
    this.head.prev = newNode;
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
      next: null,
      prev: null
    };
    // traverse down the node from head to find the index using counter
    const prevNode = this.lookupNode(index - 1);
    // reference the node at index
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    // current node and set it to the new node
    prevNode.next = newNode;
    // set prev to prevNode
    newNode.prev = prevNode;
    nextNode.prev = newNode;
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
    const nextNode = removeNode.next;
    previousNode.next = nextNode;
    // set net node to prev
    nextNode.prev = previousNode;
    
    // decrease length
    this.length--;
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

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(2, 7);
myLinkedList.insert(200, 100);
myLinkedList.insert(0, 13);
myLinkedList.remove(2);
// myLinkedList.remove(2);


