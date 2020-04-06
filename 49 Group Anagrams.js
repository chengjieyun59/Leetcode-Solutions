/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 * Group strings by their sorted counterparts.
 * Use sorted string as the key and all anagram strings as the value.
 */

const groupAnagrams = strs => {
  const map = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    map[sorted] !== undefined ? map[sorted].push(str) : map[sorted] = [str];
  }
  return Object.values(map);
};
