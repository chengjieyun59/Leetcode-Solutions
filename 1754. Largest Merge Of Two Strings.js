/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
  let p1 = 0, p2 = 0
  let merge = ''
  
  const breakTie = () => {
    let t1 = p1, t2 = p2
    while (word1.charCodeAt(t1) === word2.charCodeAt(t2)) {
      t1 += 1
      t2 += 1
    }
    merge += (word1.charCodeAt(t1) > word2.charCodeAt(t2) || word2[t2] === undefined) ? word1[p1++] : word2[p2++]
  }
  
  while (p1 !== word1.length && p2 !== word2.length) {
    if (word1.charCodeAt(p1) > word2.charCodeAt(p2)) {
      merge += word1[p1]
      p1 += 1
    } else if (word1.charCodeAt(p1) < word2.charCodeAt(p2)) {
      merge += word2[p2]
      p2 += 1
    } else {
      breakTie()
    }
  }
  
  return merge + (p1 !== word1.length ? word1.slice(p1) : word2.slice(p2))
};