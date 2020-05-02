class Solution {
public:
    int climbStairs(int n) {
        if(n <= 3) return n;
        int dp[n+1]; // dynamic programming
        dp[1] = 1;
        dp[2] = 2;
        for(int i = 3; i <= n; i++){
            dp[i] = dp[i-2] + dp[i-1];
        }
        return dp[n];
    }
};