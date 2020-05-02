/**
 * https://leetcode.com/problems/first-bad-version/
 * O(logN)
 * Definition for isBadVersion()
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let p1 = 1, p2 = n; // 2-pointer approach
    while (p1 !== p2) {
      const mid = Math.floor((p1 + p2) / 2); // divide and conquer
      isBadVersion(mid) ? p2 = mid : p1 = mid + 1; // update pointers
    }
    return p1;
  };
};