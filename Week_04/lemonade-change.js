/**
 * See: https://leetcode-cn.com/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */

var lemonadeChange = function(bills) {
    let five = ten = 0

    for (let bill of bills) {
        if (bill === 5) {
            five++
        } else if (bill === 10) {
            // 找不开了
            if (five === 0) {
                return false
            }

            five--
            ten++
        // 收搭到 20 块钱
        } else {
            // 先 10 块、5 块的找（在此贪心，从大面值开始找）
            if (five > 0 && ten > 0) {
                five--
                ten--
            // 不行就 3 个五块
            } else if (five >= 3) {
                five = five - 3
            // 找不开
            } else {
                return false
            }
        }
    }

    return true
}
