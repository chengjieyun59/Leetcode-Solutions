/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 * O(1) space, O(n) time.
 * 
 * Kadane's algorithm
 * currMax is the maximum sum up to the current index
 * absMax is the absolute maximum of a contiguous subarray
 */

const maxSubArray = nums => {
  let currMax = absMax = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    // if currMax was negative, then start calculating sum from the current index
    // if currMax was positive, keep adding the current num to currMax
    currMax = Math.max(currMax, 0) + nums[i];
    // update absMax so we won't end up returning the last local maximum
    absMax = Math.max(currMax, absMax);
  }
  return absMax;
};
