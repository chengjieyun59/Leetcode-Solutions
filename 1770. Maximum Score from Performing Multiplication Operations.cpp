/*
If we simply use recursion, we'll get exponential O(2^m) 
since we call the helper function twice in each recursion 
and we do so M times until we exhaust the multipliers array. 
This would result in time-limit-exceeded (TLE) error. 
The key is to do memoization to remember all the computations made 
for each current lo (lower index of nums) and m (current multiplier index). 
This would reduce the time complexity to O(m*m). Much better.
*/

class Solution {
  public:
    int dp[1000][1000];
    
    int maximumScore(vector<int>& nums, vector<int>& multipliers) {
      memset(dp, -1, sizeof dp);
      return helper(dp, nums, multipliers, 0, 0);
    }
    
    int helper(int dp[1000][1000], vector<int>& nums, vector<int>& multipliers, int lo, int m) {
      if (m >= multipliers.size()) {
        return 0;
      }
      if (dp[lo][m] != -1) {
        return dp[lo][m];
      }
      
      int hi = nums.size() - 1 - (m - lo);
      int takeFirst = multipliers[m] * nums[lo] + helper(dp, nums, multipliers, lo + 1, m + 1);
      int takeLast = multipliers[m] * nums[hi] + helper(dp, nums, multipliers, lo, m + 1);
      dp[lo][m] = max(takeFirst, takeLast);
      return dp[lo][m];
    }
};