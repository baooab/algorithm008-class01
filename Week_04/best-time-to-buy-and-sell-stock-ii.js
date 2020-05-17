/**
 * See: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0

    for (let i = 0; i < prices.length - 1; i++) {
        // 贪心：只要第二天价格比第一天贵，就在第一天买入，第二天卖出，然后再买入(T+0 交易? 笑 )
        if (prices[i + 1] > prices[i]) {
            profit += (prices[i + 1] - prices[i])
        }
    }

    return profit
}
