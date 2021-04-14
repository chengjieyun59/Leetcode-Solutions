/**
 * @param {string} boxes
 * @return {number[]}
 * Find all the indexes that is 1
 * Then for each box, sum the distance between these indexes and the current box.
 * That would be the number of operations needed to move every ball to the current box.
 */
var minOperations = function(boxes) {
  const ones = []
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i] === '1') {
      ones.push(i)
    }
  }
  const res = []
  for (let i = 0; i < boxes.length; i += 1) {
    let op = 0
    for (let one of ones) {
      op += Math.abs(one - i)
    }
    res.push(op)
  }
  return res
};