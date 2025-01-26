// Accessing and writing array elements
let nums = [];
for (let i = 0; i < 100; i++) {
    nums[i] = i +1;
}
console.log(nums);

// Aggregate array operations with the previous nums array
for (let i = 0; i < 100; i++) {
    nums[i] = i + 1;
}
var samenums = nums;

console.log(samenums);
