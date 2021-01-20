/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * use 3 pointers: 
 * - p1 points at the last valid integer in nums1,
 * - p2 points at the last integer in nums2
 * - pi points at the index to insert the current largest element
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    pi = m + n - 1;

  while (p2 >= 0) {
    if (p1 < 0 || nums2[p2] > nums1[p1]) {
      nums1[pi] = nums2[p2]
      p2 -= 1
    } else {
      nums1[pi] = nums1[p1]
      p1 -= 1
    }
    pi -= 1
  }
};