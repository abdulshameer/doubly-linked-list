const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length = this.length + 1;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var node = this._head;
        var pos = 0;
        while (pos < index) {
            node = node.next;
            pos++
        }
        return node.data;
    }

    insertAt(index, data) {
       var newNode = new Node(data),
            prevNode = null,
            currentNode = this._head,
            pos = 0;
            while (pos < index) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                pos++;
            }
            if (index === 0) {
                newNode.prev = prevNode;
                newNode.next = currentNode;
                currentNode.prev = newNode;
                this._head = newNode;   
            } else {
                newNode.prev = prevNode;
                prevNode.next = newNode;
                newNode.next = currentNode;
                currentNode.prev = newNode;
            }
        this.length = this.length + 1;
        return this;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0
        this._tail = new Node();
        this._head = new Node();
        return this;
    }

    deleteAt(index) {
        var node = this._head,
            count = 0;
        if (this.length === 1) {
            return this.clear();
        }
        if (index === 0) {
            node.prev.next = null
            this._head = node.prev
            return this;
        }
        do {
            node = node.prev
            count++
        } while (count < index)
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    reverse() {
        var node = this._head
        do {
            var n = node.next;
            node.next = node.prev;
            node.prev = n;
            node = node.next;
        } while (node != null && node.next != null)
        var headData = this._head;
        this._head = this._tail;
        this._tail = headData;
        return this;
    }

    indexOf(data) {
        var node = this._head,
            count = 0;
       for (; count < this.length; count++) {
            if (node.data === data) {
                return count;
            }
            node = node.next;
        }
        if (count === this.length) {
            return -1;
        }
    }
}

module.exports = LinkedList;