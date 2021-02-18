/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  return nums.reduce((xor, val, idx) => xor ^ val ^ idx, nums.length)
};