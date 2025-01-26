class Dictionary {
    constructor() {
        this.items = {}
    }

    set(key, value) {
        this.items[key] = value
    }

    get(key) {
        return this.items.hasOwnProperty(key) ? this.items[key] : undefined
    }

    has(key) {
        return this.items.hasOwnProperty(key)
    }

    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {}
    }

    print() {
        for (const [key, value] of Object.entries(this.items)) {
            console.log(`{${key}: ${value}}`);
            
        }
    }
}