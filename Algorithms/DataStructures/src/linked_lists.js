class LinkNode {
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(el) {
        const node = new LinkNode(el);
        node.next = this.head;
        this.head = node;
    }

    append(el) {
        const node = new LinkNode(el);
        if (this.head === null) {
            this.head = node;
            return;
        }

        let last = this.head;
        while (last.next !== null) {
            last = last.next;
        }

        console.log(JSON.stringify(last));
        console.log(JSON.stringify(node));
        last.next = node;
        console.log(JSON.stringify(last));
    }
}

const l = new LinkedList();
l.push(31);
l.push(32);
l.push(33);
l.append(34);
console.log(JSON.stringify(l.head));