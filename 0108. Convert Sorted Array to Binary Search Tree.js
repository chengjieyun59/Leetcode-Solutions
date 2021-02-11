var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null
  }
  
  const helper = (lowI, highI) => {
    if (lowI > highI) {
      return null
    }
    const midI = ((highI - lowI) / 2 + lowI) >> 0
    const root = new TreeNode(nums[midI])
    root.left = helper(lowI, midI - 1)
    root.right = helper(midI + 1, highI)
    return root
  }
  
  return helper(0, nums.length - 1)
};