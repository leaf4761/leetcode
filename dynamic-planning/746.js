/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let a = 0, b = 0;
    
    for(let i = 0, len = cost.length; i < len; i++){
        let tmp = b
        b = Math.min(b, a) + cost[i]
        a = tmp
    }
    
    return Math.min(a, b)
};

console.log(minCostClimbingStairs([0,0,0,1]))