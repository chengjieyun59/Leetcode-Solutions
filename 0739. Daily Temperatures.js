/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [] // stack of unprocessed indices
  const res = new Array(T.length).fill(0)
  
  for (let i = 0; i < T.length; i += 1) {
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      const j = stack.pop()
      res[j] = i - j
    }
    stack.push(i)
  }
  return res
};
