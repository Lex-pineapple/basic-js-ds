// const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(arr, k) {
  while (arr.value == k){
    arr = arr.next;
}

if (arr !== null) {
    let lastK = arr;
    let currNode = arr.next;
while (currNode !== null) {
    if (currNode.value !== k) {
        lastK = currNode;
        currNode = currNode.next;
    } else {
        lastK.next = currNode.next;
        currNode = currNode.next;
    }
}
    return arr;
} else {
    return [];
}
}


module.exports = {
  removeKFromList
};
