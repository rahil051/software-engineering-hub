var Node = /** @class */ (function () {
    function Node(el) {
        this.el = el;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    /**
     * adds a Node to the end of the linked list
     * @param el Element
     */
    LinkedList.prototype.add = function (el) {
        // creates a new node
        var node = new Node(el);
        // to store current node
        var current;
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
    };
    /**
     * gets size of the linked list
     * @returns number
     */
    LinkedList.prototype.getSizeofList = function () {
        return this.size;
    };
    // prints the list items
    LinkedList.prototype.printList = function () {
        var curr = this.head;
        var str = '';
        while (curr) {
            str += curr.el + " ";
            curr = curr.next;
        }
        console.log(str);
    };
    return LinkedList;
}());
// module.exports.exec = Node;
var ll = new LinkedList();
ll.add("First");
ll.add("Second");
ll.add("Third");
ll.add("Fourth");
ll.printList();
