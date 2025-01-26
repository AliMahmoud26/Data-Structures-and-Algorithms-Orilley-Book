class Dictionary {
    constructor () {
        this.items = {}
    }

    set(key, value) {
        this.items[key] = value
    }

    get(key, value) {
        return this.items.hasOwnProperty(key) ? this.items[key] : undefined;
    }

    has(key) {
        return this.items.hasOwnProperty(key);
    }

    delete(key) {
        if(this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false
    }

    values() {
        return Object.values(this.items)
    }

    keys() {
        return Object.keys(this.items)
    }

    size() {
        return Object.keys(this.items).length
    }

    clear() {
        this.items = {}
    }

    print() {
        for(const [key, value] of Object.entries(this.items)) {
            console.log(`{${key}: ${value}}`);
            
        }
    }
}

const dictionary = new Dictionary()

// Adding key-value pairs
dictionary.set('name', 'Ali');
dictionary.set('age', 22)
dictionary.set('country', 'Egypt')
dictionary.set('language', 'Arabic')

// Retrieving values
console.log(dictionary.get('name'))
console.log(dictionary.get('age'))

// Checking if keys exist
console.log(dictionary.has('country'))
console.log(dictionary.has('career'))

// Remvoing a key
dictionary.delete('country')

// Adding new key-value pairs property
dictionary.set('career', 'Software Engineer')

// Getting all keys and values
console.log(dictionary.keys())
console.log(dictionary.values())

// Getting the size of the dicitonary
console.log(dictionary.size())

// Printing all key-value pairs
dictionary.print()

// Clearing the dictionary
dictionary.clear();
console.log(dictionary.size())