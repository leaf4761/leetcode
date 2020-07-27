/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    let len = nums.length;
    if(len === 0) {
        return 0
    }

    let a = 0, b = nums[0]
    for(let i = 1; i < len; i++) {
        let tmp = b
        b = Math.max(a + nums[i], b)
        a = tmp
    }

    return b
};

console.log(massage([2,7,9,3,1]))