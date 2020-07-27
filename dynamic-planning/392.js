/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let slen = s.length, tlen = t.length, flag = false
    if(!slen){
        return true
    }
    for(let i = 0; i < tlen; i++) {
        if(!flag){
            for(let j = i, k = 0; j < tlen; j++){
                if(s[k] == t[j]){
                    if(k === slen - 1){
                        flag = true
                        break
                    }
                    k++
                }else if(tlen - j < slen - k) {
                    break
                }
            }
        }else{
            break
        }
    }

    return flag
};

var isSubsequence1 = function(s, t) {
    let slen = s.length, tlen = t.length, i=0, j=0, flag = false

    if(!slen){
        return true
    }
    
    while(i < slen && j < tlen){
        if(s[i] == t[j]){
            i++
            if(i == slen) {
                flag = true
                break
            }
        }
        j++
    }

    return flag
};

var isSubsequence2 = function(s, t) {
    let slen = s.length, tlen = t.length, f = []

    /**
     * 初始化
     */
        f[tlen] = []
        for(let j = 0; j < 26; j++) {
            f[tlen][j] = tlen
        }
    
    // console.log(f)

    /**
     * 根据s，t赋值
     */
    for(let i = tlen - 1; i >= 0; i--){
        f[i] = []
        for(let j = 0; j < 26; j++){
            if(t.charCodeAt(i) == 97 + j){
                f[i][j] = i
            }else{
                f[i][j] = f[i + 1][j]
            }
        }
    }

    console.log(f)

    /**
     * 寻找
     */
    for(let i = 0, add = 0; i < slen; i++){
        if(f[add][s.charCodeAt(i) - 97] == tlen) {
            return false
        }
        add = f[add][s.charCodeAt(i) - 97] + 1
    }

    return true
}

console.log(isSubsequence2("aaaa", "bbaa"))