/**
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */

// input a number, outputs the sum of each digit squared
const sumDigitSquared = n => {
  let sum = 0;
  while (n !== 0) {
    sum += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}

/**
 * Solution 1: use a set to store seen numbers
 */ 
const isHappy = n => {
  let newNum = sumDigitSquared(n);
  const newNums = new Set();
  while (newNum !== 1) {
    newNum = sumDigitSquared(newNum);
    if (newNums.has(newNum)) {
      return false;
    }
    newNums.add(newNum);
  }
  return true;
};

/**
 * Solution 2: Floyd's cycle-finding algorithm, two pointers. 
 * Tortoise moves one step. Hare moves two steps.
 * If there's a cycle, the hare will catch up to the tortoise.
 */
 const isHappy = n => {
  let tortoise = sumDigitSquared(n);
  let hare = sumDigitSquared(sumDigitSquared(n));
  while (tortoise !== hare) {
    tortoise = sumDigitSquared(tortoise);
    hare = sumDigitSquared(sumDigitSquared(hare));
  }
  return tortoise === 1;
};
