/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 * Save the positive or negative sign then reverse the number with pure math.
 * If the answer doesn't overflow a 32-bit signed integer, 
 * return the reversed number with proper sign.
 */

const reverse = x => {
  const sign = Math.sign(x);
  x = Math.abs(x);
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return Math.abs(reversed) > Math.pow(2, 31) - 1 ? 0 : reversed * sign;
};