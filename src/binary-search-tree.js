// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  findNode(val) {
    let newNode = this.head;

    while (newNode) {
      if (newNode.data === val) {
        return newNode;
      }
      newNode = (val >= newNode.data) ? newNode.right : newNode.left;
    }

    if (!newNode) {
      return false;
    }
  }

  add(val) {
    let node = new Node(val);
    if (this.head) {
      let newNode = this.head;
      let parentNode;
      
      while (newNode) {
        if (newNode.data === val) {
          break;
        }
        parentNode = newNode;
        newNode = (val >= newNode.data) ? newNode.right : newNode.left;
      }  

      if (newNode) {
        newNode.meta.multiplicity = (newNode.meta.multiplicity || 1) + 1;
      } else if (val < parentNode.data) {
        parentNode.left = node;
      } else {
        parentNode.right = node;
      }
    } else {
      this.head = node;
    }
  }

  has(val) {
    if (this.findNode(val)) {
      return true;
    } else return false;
  }

  find(val) {
    let foundNode = this.findNode(val);
    if (foundNode) {
      return foundNode;
    } else return null;
  }

  removeVal(headNode, data) {
    if (data < headNode.data) {
      headNode.left = this.removeVal(headNode.left, data);
    } else if (data > headNode.data) {
      headNode.right = this.removeVal(headNode.right, data);
    } else {
      if (headNode.left == null) {
        return headNode.right;
      } else if (headNode.right == null) {
        return headNode.left;
      }
      headNode.data = this.minVal(headNode.right);
      headNode.right = this.removeVal(headNode.right, headNode.data);
    }
    return headNode;
  }
  
  remove(val) {
    this.head = this.removeVal(this.head, val);
  }
  
  min() {
    let min = this.head;
    let newNode = this.head;
      
    while (newNode) {
      if (newNode.data <= min.data) {
        min = newNode;
      }
      newNode = (min.data <= newNode.data) ? newNode.left : newNode.right;
    }
    return min.data;  
  }

  minVal(rootNode) {
    let min = rootNode.data;
    while (rootNode.left != null) {
      min = rootNode.left.data;
      rootNode = rootNode.left;
    }
    return min;
  }

  max() {
    let max = this.head;
    let newNode = this.head;
    while (newNode) {
      if (newNode.data >= max.data) {
        max = newNode;
      }
      newNode = (max.data >= newNode.data) ? newNode.right : newNode.left;
    }
    return max.data;  
  }
}





module.exports = {
  BinarySearchTree
};