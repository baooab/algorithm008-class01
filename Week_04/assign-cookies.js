/**
 * See: https://leetcode-cn.com/problems/assign-cookies/
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function(g, s) {
    // 对小孩胃口和饼干尺寸做升序排序
    g = g.sort((a, b) => a -b)
    s = s.sort((a, b) => a -b)

    let gLen = g.length, sLen = s.length
    let gIndex = 0, sIndex = 0
    let count = 0

    // 贪心：从胃口最小的小孩开始喂饼干，这样找到最大值
    while (gIndex < gLen && sIndex < sLen ) {
        if (g[gIndex] <= s[sIndex]) {
            count++
            gIndex++
            sIndex++
        } else {
            sIndex++
        }
    }

    return count
}
