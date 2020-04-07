/**
 * @param {number[]} arr
 * @return {number}
 * O(n) space, O(n) time.
 * Use a hash set to store the elements - 1
 * Count the number of array elements that are in the set
 */

const countElements = arr => {
  const minus1 = new Set(arr.map(el => el - 1));
  return arr.reduce((acc, curr) => acc += minus1.has(curr), 0);
};