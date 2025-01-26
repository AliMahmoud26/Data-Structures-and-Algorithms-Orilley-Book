const fs = await import('fs');

// Queue Class
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Dancer Class
class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

// Function to process dancers
function getDancers(males, females) {
    // Read the file content
    const data = fs.readFileSync('./dancers.txt', 'utf8'); // Reads dancers.txt file

    let names = data.split('\n'); // Split by line
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].trim(); // Trim each line
    }

    for (let i = 0; i < names.length; i++) {
        let dancer = names[i].split(' '); // Split by space
        let sex = dancer[0];
        let name = dancer[1];

        if (sex === 'F') {
            females.enqueue(new Dancer(name, sex));
        } else if (sex === 'M') {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

// Example Usage
let males = new Queue();
let females = new Queue();

getDancers(males, females);

// Print results
console.log("Male dancers:");
while (!males.isEmpty()) {
    let dancer = males.dequeue();
    console.log(dancer.name);
}

console.log("\nFemale dancers:");
while (!females.isEmpty()) {
    let dancer = females.dequeue();
    console.log(dancer.name);
}
