/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let n = grid.length, m = grid[0].length, dp =[]
    for(let i = 0; i < n; i++){
        dp[i] = []
        for(let j = 0; j < m; j++){
            if(i == 0 && j == 0) {
                dp[i][j] = grid[i][j]
            }else if(i == 0) {
                dp[i][j] = grid[i][j] + dp[i][j - 1]
            }else if(j == 0){
                dp[i][j] = grid[i][j] + dp[i - 1][j]
            }else{
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j]
            }
        }
    }

    return dp[n - 1][m - 1]
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]))