class Dictionary {
    constructor() {
        this.items = {}
    }

    set(key, value) {
        this.items[key] = value;
    }

    get(key, value) {
        return this.items.hasOwnProperty(key) ? this.items[key] : undefined
    }

    has(key) {
        return this.items.hasOwnProperty(key)
    }

    keys() {
        return Object.keys(this.items)
    }

    filterKeysStartingWith(letter) {
        return this.keys().filter((key) => key.startsWith(letter))
    }

    countKeys(keys) {
        return keys.length;
    }

    countKeysStartingWith(letter) {
        const filteredKeys = this.filterKeysStartingWith(letter)
        return this.countKeys(filteredKeys)
    }
}

const dictionary = new Dictionary();
dictionary.set("apple", "fruit");
dictionary.set("apricot", "fruit");
dictionary.set("banana", "fruit");
dictionary.set("berry", "fruit");
dictionary.set("carrot", "vegetable");

// Count keys starting with 'a'
const countA = dictionary.countKeysStartingWith('a');
console.log(`Keys starting with 'a': ${countA}`); // Output: 2

// Count keys starting with 'b'
const countB = dictionary.countKeysStartingWith('b');
console.log(`Keys starting with 'b': ${countB}`); // Output: 2

// Count keys starting with 'c'
const countC = dictionary.countKeysStartingWith('c');
console.log(`Keys starting with 'c': ${countC}`); // Output: 1