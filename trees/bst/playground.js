class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    // set root if no root
    if (!this.root) {
      this.root = newNode;
      return this;
    }
      // traverse left if val is smaller than root
      // traverse right if val is greater than root
      // if null set val otherwise traverse

    return this;
  }

  DFSPreOrder() {
    const data = [];
    const traverse = (node) => {
      if (node) data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node) data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node) node.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }
}

const tree = new BST();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

//     9
//  4     20
//1  6  15  170
// DFSPreOrder [9, 4, 1, 6, 20, 15, 170]
// DFSPostOrder [1, 6, 4, 15, 170, 20, 9]
// DFSInOrder [1, 4, 6, 9, 15, 20, 170]

// i: node, val o:
function traverse(node, newNode) {
  // base case node is null  val 
  if (node.value > val && node.left === null) return;
  if (node.value < val && node.right === null) return;
  // if val less than node traverse left
  if (val < node.value && node.left !== null) {
    return traverse(node.left, val);
  }
  // if val greater than node traverse right
  if (val > node.value && node.right !== null) {
    return traverse(node.right, val);
  }
}