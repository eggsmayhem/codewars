var maxProfit = function(prices) {
    //array of numbers
    //the difference between two integers. The smallest and largest, where the index of the smallest integer is less than the index of the largest
    //[2,1,5,7,18,3] => 18 - 1 => 17
    //trying to avoid nested forloop/quadratic time if possible
    
    //initiate what I will return as a mutable value
    
    // let maxProfit = 0;
    // for (let buy = 0; buy < prices.length; buy++) {
    //     for (let sell = 1; sell<prices.length; sell++ ) {
    //         let tempProfit = prices[sell] - prices[buy];
    //         //Math.max overwrite 
    //         maxProfit = Math.max(tempProfit, maxProfit)
    //     }
    // }
    // return maxProfit
    let maxProfit = 0;
    let lowBuy = prices[0];
    for (let highSell = 0; highSell < prices.length; highSell++) {
        let high = prices[highSell];
        let temp = high - lowBuy
        if (high < lowBuy) {
            lowBuy = high
        }
        maxProfit = Math.max(temp, maxProfit)
    }
    return maxProfit

    
};
