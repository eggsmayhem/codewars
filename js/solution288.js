// LC 121
//
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        // let temp = prices[i] - buyLow;
        // if (prices[i] < buyLow) buyLow = prices[i];
        // maxProfit = Math.max(maxProfit, temp);
        low = Math.min(low, prices[i]);
        profit = Math.max(profit, prices[i] - low);
    }
    return profit;
};
