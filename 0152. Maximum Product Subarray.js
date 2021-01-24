/**
 * @param {number[]} nums
 * @return {number}
 */

// two pass so that if there is odd number of -ve numbers,
// leave the first or last -ve number
var maxProduct = function(nums) {
  let max = -Infinity
  let prod = 1
  for (let i = 0; i < nums.length; i += 1) {
    max = Math.max(prod * nums[i], max)
    prod *= nums[i]
    if (nums[i] === 0) {
      prod = 1
    }
  }
  prod = 1
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    max = Math.max(prod * nums[i], max)
    prod *= nums[i]
    if (nums[i] === 0) {
      prod = 1
    }
  }
  return max
};

// Kadane's algorithm
var maxProduct = function(nums) {
  let maxP = minP = res = nums[0]
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < 0) {
      let temp = maxP
      maxP = minP
      minP = temp
    }
    maxP = Math.max(maxP * nums[i], nums[i])
    minP = Math.min(minP * nums[i], nums[i])
    res = Math.max(res, maxP)
  }
  return res
};