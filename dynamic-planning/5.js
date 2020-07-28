/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let len = s.length, dp=new Array(len), maxSub = ''
    for(let i = 0; i < len; i++){
        dp[i] = new Array(len)
        dp[i].fill(false)
    }

    for(let l = 0; l < len; l++){
        for(let i = 0; i + l< len; i++) {
            let j = i + l
            if(l == 0) {
                dp[i][j] = true
            }else if( l == 1) {
                dp[i][j] = (s[i] === s[j])
            }else {
                dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
            }
            if(dp[i][j] && (l+1 > maxSub.length)){
                console.log(i, j)
                maxSub = s.slice(i, j+1)
            }
        }
    }

    return maxSub
}

var longestPalindrome1 = function(s) {
    if(!s){
        return s
    }

    function isPal(str) {
        let i = 0, j = str.length - 1,flag = true

        while(i<j){
            if(str[i] != str[j]){
                flag = false
                break
            }
            i++
            j--
        }

        return flag
    }

    let len = s.length, max = 1, maxSubArr = s[0]

    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++) {
            let str = s.slice(i, j+1)
            if(isPal(str)){
                if(str.length > max){
                    max = str.length
                    maxSubArr = str
                }
            }
        }
    }

    return maxSubArr
};

var longestPalindrome2 = function(s) {
    function expand(s, l, r) {
        let start = l, end = r, len = s.length
        while(start >= 0 && end < len && s[start] === s[end]) {
            start--
            end++
        }

        return end - start - 1
    }

    let start = 0, end = 0
    for(let i = 0; i < s.length; i++) {
        let l1 = expand(s, i, i)
        let l2 = expand(s, i, i + 1)

        let l = Math.max(l1, l2)

        if(l > (end - start + 1)){
            start = i - Math.floor((l -1)/2)
            end = i + Math.floor(l/2)
            console.log(start, end)
        }
    }

    return s.slice(start, end + 1)
}

console.log(longestPalindrome2("bb"))