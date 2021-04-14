/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let res = '', i = 0
  while (i < word1.length && i < word2.length) {
    res += word1[i] + word2[i]
    i += 1 
  }
  return res + (word1.length > word2.length ? word1.slice(i) : word2.slice(i))
};