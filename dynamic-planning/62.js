/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp =[]
    for(let i = 0; i < n; i++){
        dp[i] = []
        for(let j = 0; j < m; j++){
            if(i == 0 || j == 0) {
                dp[i][j] = 1
            }else{
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
            }
        }
    }

    return dp[n - 1][m - 1]
};

console.log(uniquePaths(7, 3))