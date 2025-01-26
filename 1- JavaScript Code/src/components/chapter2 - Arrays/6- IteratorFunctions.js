// Non-Generating-Array Iterator Functions
// ForEach Function
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.forEach((num) => {
    console.log(num, num * num);
})

// Every Function
let everyArray = nums.every((num) => {
    return num % 2 == 0;
})

if (everyArray) {
    console.log('All numbers are even');
} else {
    console.log('Not all numbers are even');
}

// Some Function
let someArray = nums.some((num) => {
    return num % 2 == 0;
})

if (someArray) {
    console.log('Some numbers are even');
} else {
    console.log('Not all numbers are even');
}

// Reduce Function
function add(runningTotal, currentValue) {
    return runningTotal + currentValue
}

let sum = nums.reduce(add)
console.log(sum);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Iterator Functions that return a new array
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Map Function
let grades = [77, 65, 81, 92, 83]
let newGrades = grades.map((grade) => {
    return grade += 5
})
console.log(newGrades);

function studentGrades(grade) {
    return grade += 5
}
let newStudentsGrades = grades.map(studentGrades)
console.log(newStudentsGrades);

// Map Function - Another Example
function first(word) {
    return word[0]
}

let words = ['Ali', 'Mahmoud', 'Ali', 'Helal', 'Shehata']
let acronym = words.map(first)
console.log(acronym);

// Filter Function
function isEven(num) {
    return num % 2 == 0
}

function isOdd(num) {
    return num % 2 != 0
}

let evens = nums.filter(isEven)
console.log(`Even Numbers: ${evens}`);

let odds = nums.filter(isOdd)
console.log(`Odd Numbers: ${odds}`);