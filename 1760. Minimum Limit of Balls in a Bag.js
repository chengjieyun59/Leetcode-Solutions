/**
 * @param {string} s
 * @return {number}
 * After all the operations, the string will look like either of these scenarios:
(a) all even indices are 0 and all odd indices are 1. Ex: 0101
(b) all even indices are 1 and all odd indices are 0. Ex: 10101

Now, the minimum operations to arrive at each scanario would be:
(a) (number of even indices that were 1) + (number of odd indices that were 0)
(b) (number of even indices that were 0) + (number of odd indices that were 1)
We just need to take the minimum of above two operations
 */
var minOperations = function(s) {
  const odd = { '0': 0, '1': 0 }, even = { '0': 0, '1': 0 }
  for (let i = 0; i < s.length; i += 1) {
    i % 2 ? odd[s[i]] += 1 : even[s[i]] += 1
  }
  return Math.min(odd['1'] + even['0'], odd['0'] + even['1'])
};
