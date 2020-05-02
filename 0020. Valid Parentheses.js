/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 * O(n) space, O(n) time
 */
var isValid = function(s) {
  let stack = [];
  const allParens = { '(': 0, '[': 1, '{': 2, ')': 3, ']': 4, '}': 5 };
  for (let char of s) {
    if (allParens.hasOwnProperty(char)) {
      // if we meet a pre-paren, push it onto the stack
      if (allParens[char] < 3) {
        stack.push(char);
      }
      // if we meet a post-paren and the last element on the stack is its corresponding pre-paren,
      // then pop the pre-paren off the stack and return false since it is not balanced
      else if (allParens[char] - 3 !== allParens[stack.pop()]) {
        return false;
      }
    }
  }
  // If stack is empty, return true.
  // If there were more post-paren than pre-paren and there are still things on the stack, return false.
  return stack.length === 0;
};