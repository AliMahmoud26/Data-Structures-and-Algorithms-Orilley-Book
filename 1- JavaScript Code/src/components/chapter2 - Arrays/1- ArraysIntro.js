// Creating an array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.length);

// the total sum of an array using the previous numbers array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum);