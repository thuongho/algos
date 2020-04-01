/**
 * @param {number[]} prices
 * @return {number}
 */

// input array of int output max profit
// [7,1,5,3,6,4]
var maxProfitFn = function(prices) {
  // ref min price index
  let minPriceIdx = 0;
  // ref max profit
  let maxProfit = 0;
  // loop through prices
  for (let i = 1; i < prices.length; i++) {
    // get net with current price minus min price
    const net = prices[i] - prices[minPriceIdx];
    // if revenue > max profit
    if (net > maxProfit) {
      // update max profit
      maxProfit = net;
      // if net < 0 update min price to current price
    } else if (net < 0) {
      minPriceIdx = i;
    }
  }
  return maxProfit;
};