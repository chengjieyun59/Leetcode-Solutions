/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const selfDividingNumbers = (left, right) => {
  const output = [];
  // for each number from left to right
  for (let i = left; i <= right; i += 1) {
    let divisible = true;
    // check if the number is divisible by each digit
    for (let char of i.toString()) {
      if (i % Number(char)) {
        divisible = false;
      }
    }
    // if it is, push onto output array
    if (divisible) {
      output.push(i);
    }
  }
  return output;
};
