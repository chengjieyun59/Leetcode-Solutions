/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const contained = []
  for (let num of nums) {
    if (contained[num]) {
      return true
    }
    contained[num] = true
  }
  return false
};