// Accessor Functions in Arrays
// Searching for a value
let names = ['Ali', 'Mahmoud', 'Ali', 'Helal']
let nameIn = names.indexOf('Helal')
console.log(nameIn);

// String representation of array
let nameJoin = names.join()
let nameStr = names.toString()
console.log(nameJoin);
console.log(nameStr);

// Creating new arrays from existing arrays
// Concat Method
let extraNames = ['Ibrahim', 'Mahmoud', 'Ali', 'Helal']
let newArray = names.concat(extraNames)
console.log(newArray);

// Splice Mehtod
let spliceArrays = newArray.splice(3, 3)
console.log(spliceArrays);


// Another example of creating a new array from existing arrays
let animals = ['Cat', 'Dog', 'Monkey', 'Elephant']
let moreAnimals = ['Horse', 'Donkey', 'Rabbit']

let concatAnimalArrays = animals.concat(moreAnimals)
let spliceAnimalArray = concatAnimalArrays.splice(2, 5)

console.log(concatAnimalArrays);
console.log(spliceAnimalArray);
