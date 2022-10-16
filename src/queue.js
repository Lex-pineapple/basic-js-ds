// const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(val) {
    let newNode = new ListNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    console.log();
    console.log(this.first.next);
    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    
    this.first = this.first.next;

    this.size--;

    return temp.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3); 
// queue.enqueue(4); 
console.log(queue.dequeue());

console.log(queue.getUnderlyingList() );
queue.getUnderlyingList() // returns { value: 3, next: null }

module.exports = {
  Queue
};
