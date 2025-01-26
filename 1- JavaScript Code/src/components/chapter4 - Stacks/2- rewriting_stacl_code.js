class Stack {
    constructor() {
        this.items = []
    }

    // adding an element to the stack
    push(ele) {
        this.items.push(ele)
    }

    // removing an element from the stack
    pop() {
        if(this.isEmpty()) {
            return 'stack is empty'
        }
        this.items.pop()
    }

    // removing an element from the array
    peek() {
        if (this.isEmpty()) {
            return 'stack is empty'
        }
        return this.items[this.items.length - 1]
    }

    // check if the stack is empty
    isEmpty() {
        return this.items.length === 0
    }

    // get the size of the stack
    size() {
        return this.items.length
    }

    // print the stack
    print() {
        return this.items.join(', ')
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log("Top element:", stack.peek());
console.log("Stack size:", stack.size());

console.log("Popped element:", stack.pop());

console.log("Stack is empty:", stack.isEmpty());
console.log("Current stack:", stack.print());


// console.log("Top element:", stack.peek()); 
// console.log("Stack size:", stack.size());

// console.log("Popped element:", stack.pop());

// console.log("Stack is empty:", stack.isEmpty());
// console.log("Current stack:", stack.print());

