/*
 * Solution by Rahil
 */
// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.0
  
    let klist = linkedList;
    while (klist.next !== null) {
      if (klist.value === klist.next.value) {
        // remove the duplicate
        klist.next = klist.next.next;
      } else {
        klist = klist.next;
      }
    }
  
    return linkedList;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  