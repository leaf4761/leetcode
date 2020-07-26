/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, end = 0
    for(let i = 0, len = prices.length; i <len ; i++){
        for(let j = i + 1; j < len; j++) {
            if(prices[j] > prices[i]) {
                if(prices[j] - prices[i] > profit) {
                    end = j + 1
                    profit = prices[j] - prices[i]
                }
            }
        }
    }

    return profit
};

var maxProfit1 = function(prices) {
    let minPro = Number.MAX_VALUE, profit = 0
    for(let i = 0, len = prices.length; i < len; i++) {
        minPro > prices[i] && (minPro = prices[i])
        if(profit < prices[i] - minPro){
            profit = prices[i] - minPro
        }
    }

    return profit
};

console.log(maxProfit1([7,1,5,3,6,4]))