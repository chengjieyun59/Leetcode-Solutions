/**
 * Get an azNum where A maps to 1, Z maps to 26
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let total = 0
  for (let i = 0; i < s.length; i += 1) {
    const azNum = s.charCodeAt(i) - "A".charCodeAt(0) + 1
    total = total * 26 + azNum
  }
  return total
};