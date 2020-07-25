/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
    this.sums = [0]
    for(let i = 0, len = nums.length; i < len; i++) {
        sums[i+1] = sums[i] + nums[i]
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sum = 0
    for(let k = i ; k <= j; k++){
        sum += this.nums[k]
    }

    return sum;
};

NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */