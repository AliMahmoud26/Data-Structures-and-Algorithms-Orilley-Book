class List {
    // constructor() {
    //     this.listSize = 0;
    //     this.pos = 0;
    //     this.dataStore = [];
    //     this.clear = clear;
    //     this.find = find;
    //     this.toString = toString;
    //     this.insert = insert;
    //     this.append = append;
    //     this.remove = remove;
    //     this.front = front;
    //     this.end = end;
    //     this.prev = prev;
    //     this.next = next;
    //     this.length = length;
    //     this.currPos = currPos;
    //     this.moveTo = moveTo;
    //     this.getElement = getElement;
    //     this.length = length;
    //     this.contains = contains;
    // }

    // Adding elements to a list 
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
        this.toString = this.toString;
    }

    append(element) {
        this.dataStore[this.listSize++] = element
    }
    
    find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i
            }
        }
        return -1
    }
}

const myList = new List();
myList.append("Apple");
myList.append("Banana");
console.log(myList)
console.log(myList.toString(''))
console.log(myList.find('Apple'))
