/**
 * @param {number[][]} grid
 * @return {number}
 * Dynamic programming approach
 * O(m*n) time, O(1) space
 */
var minPathSum = function(grid) {
  const n = grid.length, m = grid[0].length;
  for (let r = 1; r < n; r += 1) {
    grid[r][0] += grid[r - 1][0];
  }
  for (let c = 1; c < m; c += 1) {
    grid[0][c] += grid[0][c - 1];
  }
  for (let r = 1; r < n; r += 1) {
    for (let c = 1; c < m; c += 1) {
      grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1])
    }
  }
  return grid[n - 1][m - 1];
};