/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * Solution 1: map. O(1) space, O(n) time.
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const alpOccur = {};
  for (let i in s) {
    alpOccur[s[i]] = (alpOccur[s[i]] || 0) + 1;
    alpOccur[t[i]] = (alpOccur[t[i]] || 0) - 1;
  }
  return Object.values(alpOccur).every(val => val === 0);
}

/**
 * Solution 2: array. O(1) space, O(n) time.
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const alpOccur = [];
  alpOccur.length = 26;
  alpOccur.fill(0)  
  for (let i in s) {
    alpOccur[s.charCodeAt(i) - 97] += 1;
    alpOccur[t.charCodeAt(i) - 97] -= 1;
  }
  return alpOccur.every(val => val === 0);
}

/**
 * Solution 3: sort. O(1) space, O(nlogn) time.
 */
const isAnagram = (s, t) => {
  return s.length === t.length && 
    s.split('').sort().join('') === t.split('').sort().join('');
}
