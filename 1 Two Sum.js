/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * O(n) space, O(n) time.
 */

const twoSum = (nums, target) => {
  const targets = {};
  // create an object of {targetNumber: forThisIndex}
  for (let i = 0; i < nums.length; i += 1) {
    targets[target - nums[i]] = i;
  }
  for (let j = 0; j < nums.length; j += 1) {
    // if a number is a targetNumber and they're not referring to the same number
    const i = targets[nums[j]];
    if (i !== undefined && i !== j) {
      // return the two indexes
      return [i, j];
    }
  }
};
