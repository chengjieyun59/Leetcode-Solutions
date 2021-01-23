/**
 * Sort the intervals by the start index in ascending order. 
 * We can tell if the current interval overlap with the previous one 
 * if the current start value > the previous end value. 
 * Update the previous interval accordingly.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = [intervals[0]]
  for (let curr of intervals) {
    prev = res[res.length - 1]
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(curr[1], prev[1])
    } else {
      res.push(curr)
    }
  }
  return res
};