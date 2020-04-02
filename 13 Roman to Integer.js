/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 * O(1) space, O(n) time.
 */

const romanToInt = s => {
  const romanInt = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let int = 0;
  for (let i = 0; i < s.length; i += 1) {
    // if the current char is not the last char
    // and its int value is smaller than the next char's int value
    if (i < s.length - 1 && romanInt[s[i]] < romanInt[s[i + 1]]) {
      int -= romanInt[s[i]];
    } else {
      int += romanInt[s[i]];
    }
  }
  return int;
};