/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 * O(1) space, O(n) time.
 * Total profit is the sum of all the differences between 
 * a local minimum and the following local maximum.
 */

const maxProfit = prices => {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i += 1) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
};