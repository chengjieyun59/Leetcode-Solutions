/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []
  nums.sort((a, b) => a - b)

  const allSets = []
  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] > 0) break
    // avoid duplicates
    while (nums[i] === nums[i - 1]) i += 1
    const twoSumTarget = 0 - nums[i]
    let j = i + 1, k = nums.length - 1

    while (j < k) {
      const twoSum = nums[j] + nums[k]
      // if found the target, push all 3 numbers to solution set and move both pointers closer
      if (twoSum === twoSumTarget) {
        allSets.push([nums[i], nums[j], nums[k]])
        // avoid dumplicates
        while (nums[j] === nums[j + 1]) j += 1
        while (nums[k] === nums[k - 1]) k -= 1
        j += 1
        k -= 1
      }
      // if twoSum is too large, need to replace the largest number with a smaller one to get closer to the target sum
      else if (twoSum > twoSumTarget) k -= 1
      // if twoSum is too small, get a larger number than nums[j]
      else j += 1
    }
  }
  return allSets
};