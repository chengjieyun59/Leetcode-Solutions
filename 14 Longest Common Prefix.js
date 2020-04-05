/**
 * https://leetcode.com/problems/longest-common-prefix/submissions/
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = strs => {
  if (strs.length === 0) return '';
  for (let charI = 0; charI < strs[0].length; charI += 1) {
    for (let strI = 1; strI < strs.length; strI += 1) {
      if (strs[strI][charI] !== strs[0][charI]) {
        return strs[0].substring(0, charI);
      }
    }
  }
  return strs[0];
};
