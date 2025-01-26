// Mutator Functions - Adding elements to the array
// Push Method - Unshift Method
let animals = ['Cat', 'Dog', 'Monkey', 'Elephant']
animals.push('Rabbit')
animals.unshift('Horse')
console.log(animals);

// Mutator Functions - Removing elements from the array
// Pop Method - Shift Method
animals.pop()
console.log(animals)
animals.shift()
console.log(animals)

// Removing elements from the middle of the array
// Splice Method
let nums = [1, 2, 3, 7, 8, 9]
let newElements = [4, 5, 6]
nums.splice(3,0,newElements)
console.log(nums);