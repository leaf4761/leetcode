/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1, b = 1
    for(let i = 1; i< n ; i++){
        [a, b] = [b, a]
        b = a + b
    }

    return b
};

var climbStairs1 = function(n) {

    function multiply(a, b){
        let c=[]

        for(let i = 0; i < 2; i++) {
            for(let j = 0; j < 2; j++) {
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]
            }
        }

        return c
    }

    function getN(n){
        let a = [[1, 1], [1, 0]], c = [[1,0], [0,1]]
        let res
        while(n) {
            if((n & 1) === 1) {
                res = multiply(a, c)
            }
            a = multiply(a, a)
            n >> 1
        }
    }

    return getN(n)[0][0]
};

console.log(climbStairs1(3))