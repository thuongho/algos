class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  // input is value int output is nothing
  insert(value){
    // Check value null, undefined, blank, not a number
    if (value === undefined || value === null || typeof value !== 'number') {
      return;
    }
    // create a node with value
    const newNode = new Node(value);
    // if root is null then we set root to new node
    if (!this.root) {
      this.root = newNode;
      return;
    }
    // ref current node
    let currentNode = this.root;
    // traverse left or right if left and right is not null
    while (currentNode) {
      // check value of current node with value of new node
      if (currentNode.value === value) {
        return;
      }
      if (value < currentNode.value) {
        // less go left and set current node to left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        // greater than we go right and set current node to right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
    // insert new node if left or right is null
  } // O(n)

  // input int output a node or null
  lookup(value){
    // Check value null, undefined, blank, not a number type
    if (value === undefined || value === null || typeof value !== 'number') {
      return;
    }
    // ref root node as currentNode
    let currentNode = this.root;
    // traverse the tree until the current node is null
    while (currentNode) {
      //  return current node if its value equal to the value
      if (currentNode.value === value) {
        return currentNode;
      }
      // set current node to left if its value is greater value
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        // set current node to right if its value is less than value
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  } // O(n)
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));
tree.lookup(20);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





