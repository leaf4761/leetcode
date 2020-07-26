/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    /**
     * N为偶数即可
     */
    return (N&1) === 0
};

var divisorGame1 = function(N) {
    let f = []
    f[1] = false
    f[2] = true
    for(let i = 3; i <= N; i++) {
        for(let j = 1; j<i; j++) {
            if((i%j === 0) && !f[i - j]){
                f[i] = true
                break
            }
        }
        
    }
    return !!f[N]
}

console.log(divisorGame1(9))