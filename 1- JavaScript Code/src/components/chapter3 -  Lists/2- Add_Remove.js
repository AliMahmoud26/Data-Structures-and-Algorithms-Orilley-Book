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

    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
        this.toString = this.toString;
        // this.length = length;
    }
        
    // Adding elements to a list 
    append(element) {
        this.dataStore[this.listSize++] = element
    }
    
    // Finding element in a list
    find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i
            }
        }
        return -1
    }

    // toString function
    toString() {
        return this.dataStore
    }

    // Removing element from a list
    remove(element) {
        let foundAt = this.find(element)
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1)
            --this.listSize;
            return true
        }
        return false
    }

    // Specifying the length of the list
    // length() {
    //     this.listSize;
    // }
}

const myList = new List();
myList.append("Apple", "Orange", "Tomato", "Potato");
myList.append("Banana");
console.log(myList)
console.log(myList.toString())
console.log(myList.find('Apple'))
myList.remove('Apple')
console.log(myList.toString());
