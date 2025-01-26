/* 
#####################################################################################################################################
    1- Grades Object
#####################################################################################################################################
*/

let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]]
let total = 0
let average = 0.0

// Row Computation
for (let row = 0; row < grades.length; row++) {
    for (let col = 0; col < grades[row].length; col++) {
        total += grades[row][col]
    }
    average = total / grades[row].length
    console.log('Student ' + parseInt(row+1) + ' average: ' + average.toFixed(2));
    total = 0
    average = 0.0
}
// Column Computation - Row-Wise Computation
for (let col = 0; col < grades.length; col++) {
    for (let row = 0; row < grades[col].length; row++) {
        total += grades[row][col]
    }
    average = total / grades[col].length
    console.log('Test ' + parseInt(col+1) + ' average: ' + average.toFixed(2));
    total = 0
    average = 0.0
}

/*
#####################################################################################################################################
    2- Arrays for storing words
#####################################################################################################################################
*/
let words = ['Ali', 'Mahmoud', 'Ali', 'Helal', 'Shehata']
let sentence = words.join(' ')
let reverseSentence = words.reverse().join(' ')
console.log(sentence);
console.log(reverseSentence);

/* 
#####################################################################################################################################
    3- Modify the weeklyTemp object in the chapter
#####################################################################################################################################
*/


/* 
#####################################################################################################################################
    4- Turning letters into a word
#####################################################################################################################################
*/
let letters = [['A', 'l', 'i'], ['M', 'a', 'h', 'm', 'o', 'u', 'd'], ['A', 'l', 'i'], ['H', 'e', 'l', 'a', 'l']]
let fullName = letters.map(letter => letter.join('')).join(' ')
console.log(fullName);