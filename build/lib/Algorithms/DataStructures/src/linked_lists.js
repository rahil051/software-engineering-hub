"use strict";
class Node {
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}
class LinkedList {
    constructor() { }
    add(el) {
        const node = new Node(el);
        let current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    getSizeofList() {
        return this.size;
    }
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.el + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}
const ll = new LinkedList();
ll.add("First");
ll.add("Second");
ll.add("Third");
ll.add("Fourth");
ll.printList();
//# sourceMappingURL=linked_lists.js.map