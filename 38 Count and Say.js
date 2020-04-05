/**
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */

/**
 * Solution 1: recursive
 */
const countAndSay = (n, str = '1') => {
  if (n === 1) {
    return str;
  }
  let newStr = '',
    count = 0,
    say = str[0];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === say) {
      count += 1;
    } else {
      newStr += count + say;
      count = 1;
      say = str[i];
    }
  }
  return countAndSay(n - 1, newStr + count + say);
};

/**
 * Solution 2: iterative
 */
const countAndSay = n => {
  let str = '1';
  while (n > 1) {
    let newStr = '',
      count = 0,
      say = str[0];
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === say) {
        count += 1;
      } else {
        newStr += count + say;
        count = 1;
        say = str[i];
      }
    }
    str = newStr + count + say;
    n -= 1;
  }
  return str;
};
