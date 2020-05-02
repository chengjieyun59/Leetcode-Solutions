/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, low = 0, high = nums.length - 1) {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  switch (target) {
    case nums[low]: return low;
    case nums[mid]: return mid;
    case nums[high]: return high;
  }
  if (nums[low] <= nums[mid]) { // left half sorted
    if (nums[low] <= target && target <= nums[mid]) { // in left half
      return search(nums, target, low, mid - 1);
    } else { // in right half
      return search(nums, target, mid + 1, high);
    }
  }
  if (nums[mid] <= nums[high]) { // right half sorted
    if (nums[mid] <= target && target <= nums[high]) { // in right half
      return search(nums, target, mid + 1, high); 
    } else { // in left half
      return search(nums, target, low, mid - 1);
    }
  }
  return -1;
};
