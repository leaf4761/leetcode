/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let n = obstacleGrid.length, m = obstacleGrid[0].length
        dp = []

    for(let i = 0; i < n; i++) {
        dp[i] = []
        for(let j = 0; j < m; j++) {
            if(i == 0 && j == 0){
                if(obstacleGrid[i][j] == 0) {
                    dp[i][j] = 1
                }else{
                    dp[i][j] = 0
                }
            }else if(i == 0) {
                if(obstacleGrid[i][j] == 0) {
                    dp[i][j] = dp[i][j - 1]
                }else{
                    dp[i][j] = 0
                }
            }else if(j == 0) {
                if(obstacleGrid[i][j] == 0) {
                    dp[i][j] = dp[i - 1][j]
                }else{
                    dp[i][j] = 0
                }
            }else{
                if(obstacleGrid[i][j] == 0){
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
                }else{
                    dp[i][j] = 0
                }
            }
        }
    }

    return dp[n - 1][m - 1]
};

console.log(uniquePathsWithObstacles([
   [1, 0]
  ]))