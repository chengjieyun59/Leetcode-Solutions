/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * O(1) space, O(n) time.
 */

const moveZeroes = nums => {
  let zeroIndex;
  for (let i = 0; i < nums.length; i += 1) {
    // get the first index where we encounter a zero, if any
    if (nums[i] === 0) {
      if (zeroIndex === undefined) {
        zeroIndex = i;
      }
    }
    // swap value if num is nonzero & there's a zero before it to minimize #. of operations
    else if (zeroIndex !== undefined) {
      nums[zeroIndex] = nums[i];
      nums[i] = 0;
      zeroIndex += 1;
    }
  }
};
