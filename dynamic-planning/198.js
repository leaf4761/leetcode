/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length > 0){
        let max = 0, a = 0, b = nums[0]

        for(let i = 1, len = nums.length; i < len; i++) {
            let tmp = b
            b = Math.max(b, nums[i] + a)
            a = tmp
        }
        return b
    }
    
    return 0
};

console.log(rob([1,2,3,1]))