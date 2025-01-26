class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LList {
    constructor() {
        this.head = new Node('Head')
    }

    find(item) {
        let currentNode = this.head
        while(currentNode.data != item) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    insert(newElement, item) {
        let newNode = new Node(newElement)
        let current = this.find(item)
        newNode.next = current.next
        current.next = newNode
    }
}