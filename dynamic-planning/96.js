/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let f = []
    f[0] = 1, f[1] = 1, f[2] = 2

    for(let i = 3; i <=n; i++) {
        f[i] = 0
        for(let j = 1; j <= i; j++){
            f[i] += f[j - 1] * f[i - j]
        }
    }

    return f[n]
};

console.log(numTrees(3))