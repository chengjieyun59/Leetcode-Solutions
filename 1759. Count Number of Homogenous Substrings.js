/**
 * @param {string} s
 * @return {number}
 * If the current character is the same as the previous character, 
 * we need to add the current homogenuous substring length to the total count.
 * For example, if our string is 'bbb'.
 * When i = 0, homoCount = 1, count = 1
 * When i = 1, homoCount = 2, count = count + 2 = 1 + 2
 * When i = 1, homoCount = 3, count = count + 3 = 1 + 2 + 3
 */
var countHomogenous = function(s) {
  let prev = '', count = 0, homoCount = 1
  for (let i = 0; i < s.length; i += 1) {
    homoCount = s[i] === prev ? homoCount + 1 : 1
    count += homoCount
    prev = s[i]
  }
  return count % 1000000007
};