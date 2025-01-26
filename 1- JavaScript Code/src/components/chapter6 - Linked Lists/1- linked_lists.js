class Node {
    constructor(element) {
        this.element = element;
        this.next = null; // Initialize the next pointer to null
    }
}

class LList {
    constructor() {
        this.head = new Node('Head');
    }

    find(item) {
        let currentNode = this.head;
        while (currentNode.element != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    display() {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        }
    }
}

// Example usage:
const cities = new LList();
cities.insert('Mansoura', 'Head');
cities.insert('Mit Ghamr', 'Mansoura');
cities.insert('Cairo', 'Mit Ghamr');
cities.display(); // Output: Mansoura, Mit Ghamr, Cairo
