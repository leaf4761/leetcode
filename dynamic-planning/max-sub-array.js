/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = nums[0], maxSum = nums[0], subArray = [], maxSubArray = []
    nums.forEach((num) => {
        if(pre + num > num) {
            subArray.push(num)
        }else{
            subArray = [num]
        }
        pre = Math.max(pre + num, num)
        if(pre > maxSum){
            maxSubArray = subArray.slice()
        }
        maxSum = Math.max(pre, maxSum)
    })

    return {maxSum, maxSubArray}
}

var maxSubArray1 = function(nums) {

    function Status(lSum, rSum, mSum, iSum) {
        this.lSum = lSum
        this.rSum = rSum
        this.mSum = mSum
        this.iSum = iSum
    }

    function getStatus(la, ra){
        const iSum = la.iSum + ra.iSum
        const lSum = Math.max(la.lSum, la.iSum + ra.lSum)
        const rSum = Math.max(ra.rSum, ra.iSum + la.rSum)
        const mSum = Math.max(la.mSum, ra.mSum, la.rSum + ra.lSum)

        return new Status(lSum, rSum, mSum, iSum)
    }

    function getMaxSub(arr, l, r) {
        // console.log(l, r)
        if(l == r) {
            return new Status(arr[l], arr[l], arr[l], arr[l])
        }
        let mid = (r+l)>>1
        let la = getMaxSub(arr, l, mid)
        let ra = getMaxSub(arr, mid + 1, r)
        return getStatus(la, ra)
    }

    return getMaxSub(nums, 0, nums.length -1).mSum
};

console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]))