class Stack {
    constructor() {
        this.items = []
    }

    // Adding an element to the stack
    push(element) {
        this.items.push(element)
    }

    // remove and return the top element of the stack
    pop() {
        if(this.isEmpty()) {
            return 'stack is empty'
        }
        return this.items.pop()
    }

    // get the top element without removing it
    peek() {
        if(this.isEmpty()) {
            return 'stack is empty'
        }
        return this.items[this.items.length - 1]
    }

    // checks if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // get the size of the stack
    size() {
        return this.items.length
    }

    // print the stack
    print() {
        return this.items.join(", ");
    }

}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log("Top element:", stack.peek()); // Output: Top element: 30
console.log("Stack size:", stack.size()); // Output: Stack size: 3

// Remove the top element
console.log("Popped element:", stack.pop()); // Output: Popped element: 30

// Check the stack state
console.log("Stack is empty:", stack.isEmpty()); // Output: Stack is empty: false
console.log("Current stack:", stack.print()); // Output: Current stack: 10, 20

