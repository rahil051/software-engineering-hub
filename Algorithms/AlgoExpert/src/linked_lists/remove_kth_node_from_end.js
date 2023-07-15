// This is an input class. Do not edit.
class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function removeKthNodeFromEnd(head, k) {
	// Write your code here.
	let index = 1;
	let klist = head;
	while(klist !== null) {
		klist = klist.next;
		index++;
	}
	
	const upto = index - k;
	klist = head;
	while (upto !== -1) {
		upto--;
		if (upto === 0) {
			klist.next = klist.next.next;
		}
	}
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;