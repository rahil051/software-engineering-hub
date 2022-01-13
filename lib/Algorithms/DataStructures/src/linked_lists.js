class Node {
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}
class LinkedList {
    constructor() { }
    /**
     * adds a Node to the end of the linked list
     * @param el Element
     */
    add(el) {
        // creates a new node
        const node = new Node(el);
        // to store current node
        let current;
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }
    /**
     * gets size of the linked list
     * @returns number
     */
    getSizeofList() {
        return this.size;
    }
    // prints the list items
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
// module.exports.exec = Node;
const ll = new LinkedList();
ll.add("First");
ll.add("Second");
ll.add("Third");
ll.add("Fourth");
ll.printList();
//# sourceMappingURL=linked_lists.js.map