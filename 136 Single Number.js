/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 * O(1) space, O(n) time.
 * 
 * XOR operation: x^x = 0, 0^x = x
 * By XORing all of the numbers in the array,
 * we can get the single number that is not duplicated.
 */

const singleNumber = nums => nums.reduce((acc, curr) => acc ^= curr);
