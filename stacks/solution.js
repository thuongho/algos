class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// FILO
class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    // check params
    // create a node with that value
    const node = new Node(value);
    if (this.length === 0) {
    // set bottom if it is null
    // set top if null
      this.bottom = node;
      this.top = node;
    } else {
    // otherwise set new node next to top and top to new node
      node.next = this.top;
      this.top = node;
    }
    // increment length
    this.length++;
    return this;
  } // O(1)
  pop(){
    // check length
    if (!this.length) {
      // 0 return undefined
      return;
    } 
    // otherwise ref top
    const removeNode = this.top;
    // if top.next is null set top and bottom to null
    if (!removeNode.next) {
      this.bottom = null;
    }
    // otherwise set top to top.next
    // this will set top to null if next is null
    this.top = removeNode.next;
    // decrease length
    this.length--;
    // return remove node
    // removeNode.next = null;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

class StackArr {
  constructor(){
    this.data = [];
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  push(value){
    // check value
    this.data.push(value);
    return this.data;
  }
  pop() {
    this.data.pop();
    return this.data;
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

const myStack = new StackArr();

//Discord
//Udemy
//google
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('google');
myStack.pop();
