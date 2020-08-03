/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let dp = [], r = triangle.length, min = 0
    if(r == 0) {
        return min
    }
    for(let i = 0; i < r; i++) {
        dp[i] = []
        for(let j = 0; j < i + 1; j++) {
            if(i == 0 && j == 0) {
                dp[i][j] = triangle[i][j]
            }else if(j == 0){
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
            }else if(j == i) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            }else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
            }
        }
    }

    return Math.min(...dp[r - 1])
};

var minimumTotal1 = function(triangle) {
    let dp = [], r = triangle.length, min = 0
    if(r == 0) {
        return min
    }
    dp[0] = triangle[0][0]
    for(let i = 1; i < r; i++) {
        for(let j = i; j >= 0; j--) {
            if(j == i){
                dp[j] = dp[j] + triangle[i][j - 1]
            }else if(j == 0){
                dp[j] = dp[j] + triangle[i][j]
            }else{
                dp[j] = Math.min(dp[j], dp[j - 1]) + triangle[i][j]
            }          
        }
    }

    return Math.min(...dp)
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))