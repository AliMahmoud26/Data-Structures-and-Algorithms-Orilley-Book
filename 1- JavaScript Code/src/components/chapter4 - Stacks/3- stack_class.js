class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        return this.items.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }
}

function mulBase(num, base) {
    let s = new Stack();

    // Convert the number to the given base
    do {
        s.push(num % base);
        num = Math.floor(num / base); // Fixed division for clarity
    } while (num > 0);

    // Pop elements from the stack to build the converted number
    let converted = "";
    while (!s.isEmpty()) { // Use isEmpty instead of length()
        converted += s.pop();
    }
    return converted;
}

// Testing the function
let num = 32;
let base = 2;
let newNum = mulBase(num, base);
console.log(num + ' converted to base ' + base + ' is ' + newNum);

num = 125;
base = 8;
newNum = mulBase(num, base);
console.log(num + ' converted to base ' + base + ' is ' + newNum);
