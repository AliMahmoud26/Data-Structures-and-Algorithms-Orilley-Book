// Reduce Function
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = nums.reduce((runningTotal, currentValue) => {
  return runningTotal + currentValue
})

console.log(sum);
