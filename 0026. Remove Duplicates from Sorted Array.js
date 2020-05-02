/**
 * @param {number[]} nums
 * @return {number}
 * O(n) time, O(1) space
 */
const removeDuplicates = nums => {
  let i = 0;
  nums.forEach(function(el){
    if(nums[i] !== el){
      i++;
      nums[i] = el;
    }
  });
  return i+1;
};
