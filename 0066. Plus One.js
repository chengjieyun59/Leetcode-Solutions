/**
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 * O(1) space, O(n) time.
 */

const plusOne = digits => {
  // start from the last digit
  for (let i = digits.length - 1; i > 0; i -= 1) {
    // increment the last digit that wasn't a 9 and return
    if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    }
    // if digit is 9, make it 0
    digits[i] = 0;
  }
  // if all digits were 9, carry over a 1 as the most significant digit
  digits.unshift(1);
  return digits;
};

/**
 * Elegant, cleaned-up solution:
 */
const plusOne = digits => {
  for (let i = digits.length; i--; digits[i] = 0) {
    if (digits[i]++ < 9) {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
