/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === '0') return 0

    let a = 1, b = 1
    for(let i = 1, len = s.length; i < len; i++){
        let tmp = b
        if(s[i] === '0'){
            if(s[i - 1] == '1' || s[i - 1] == '2'){
                b = a
            }else{
                return 0
            }
        }else{
            if(s[i - 1] == '1'){
                b = b + a
            }else if(s[i - 1] == '2'){
                if(s[i] > '0' && s[i] < '7'){
                    b = b + a
                }
            }
        }

        a = tmp
    }

    return b
};

console.log(numDecodings('227'))