// Two-Dimensional Array
let twod = []
let rows = 5
for (let i = 0; i < rows; i++) {
    twod[i] = []
}

console.log(twod);

// The Good Parts Example
Array.matrix = function(numrows, numcols, initial) {
    let arr = []
    for (let i = 0; i < numrows; i++) {
        let columns = []
        for (let j = 0; j < numcols; j++) {
            columns[j] = initial
        }
        arr[i] = columns
    }
    return arr
}

let nums = Array.matrix(5, 5, 0)
console.log(nums[1][1])

// re-writing the same example again
Array.matrix = function(rows, cols, init) {
    let arr = []

    for (let i = 0; i < rows; i++) {
        let columns = []

        for (let j = 0; j < cols; j++) {
            columns[j] = init
        }

        arr[i] = columns
    }

    return arr
}

let result = Array.matrix(3, 3, 0)
console.log(result[1][1]);
// console.log(result[2][2]);
// console.log(result[3][3]);

let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]]
console.log(grades[0][0]);
// console.log(grades[1][1]);
// console.log(grades[2][2]);
// console.log(grades[2][1]);
// console.log(grades[2][3]);

// Continue with the grades example
let total = 0
let average = 0.0
for (let row = 0; row < grades.length; row++) {
    for (let col = 0; col < grades[row].length; col++) {
        total += grades[row][col]
    }
    average = total / grades[row].length
    console.log('Student ' + parseInt(row+1) + ' average: ' + average.toFixed(2));
    total = 0
    average = 0.0
}

// Row-Wise Computation
for (let col = 0; col < grades.length; col++) {
    for (let row = 0; row < grades[col].length; row++) {
        total += grades[row][col]
    }
    average = total / grades[col].length
    console.log('Test ' + parseInt(col+1) + ' average: ' + average.toFixed(2));
    total = 0
    average = 0.0
}