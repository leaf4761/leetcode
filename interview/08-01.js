/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    let a = 1, b = 1, c = 2
    if(n == 1){
        return b
    }

    if(n == 2) {
        return c
    }

    for(let i = 3; i<= n; i++) {
        let tmp = c
        c = (a + b + c) % 1000000007
        a = b
        b = tmp
        console.log(a, b, c)
    }

    return c 
};

console.log(waysToStep(76))