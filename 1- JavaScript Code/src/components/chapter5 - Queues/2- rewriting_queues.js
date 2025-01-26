class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        if(this.isEmpty()) {
            return 'Queue is Empty'
        }
        this.items.shift()
    }

    peek() {
        if(this.isEmpty()) {
            return 'Queue is Empty'
        }
       return this.items.length[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        return this.items.join(', ')
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log('Front element:', queue.peek());
console.log('Dequeued element:', queue.dequeue());
console.log('Queue Size:', queue.size());
console.log('Is Queue Empty:', queue.isEmpty());
console.log('Current Queue:', queue.print());