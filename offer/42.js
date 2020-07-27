/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let a = 0, maxSum = nums[0]
    for(let i = 0, len = nums.length; i<len ;i++) {
        a = Math.max(a + nums[i], nums[i])
        maxSum = Math.max(a, maxSum)
    }

    return maxSum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))