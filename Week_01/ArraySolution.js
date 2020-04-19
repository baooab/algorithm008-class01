/**
 * 26. 删除排序数组中的重复项
 *
 * @see {@link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/} for further information.
 *
 * @example
 * // 返回 2
 * removeDuplicates([1,1,2])
 *
 * @param {number[]} nums 输入数组
 * @return {number} 不重复元素数量
 */
var removeDuplicates = function (nums) {
    var j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }
    }
    return j + 1
}

/**
 * 11. 盛最多水的容器
 *
 * @see {@link https://leetcode-cn.com/problems/container-with-most-water/} for further information.
 *
 * @example
 * // 返回 49
 * maxArea([1,8,6,2,5,4,8,3,7])
 *
 * @param {number[]} height 柱子的高度分布
 * @return {number} 最大容水量
 */
var maxArea = function (height) {
    var l = 0
    var r = height.length - 1
    var max = 0

    while (l < r) {
        max = Math.max(max, (r - l) * Math.min(height[l], height[r]))
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }

    return max
}

// var maxArea = function(height) {

//   var len = height.length
//   var max = 0

//   // 计算所有可能的结果，最后取出最大值
//   for (let i = 0; i < len - 1; i++) {
//       for (let j = i + 1; j < len; j++) {
//           max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
//       }
//   }

//   return max
// }

/**
 * 42. 接雨水
 *
 * @see {@link https://leetcode-cn.com/problems/trapping-rain-water/} for further information.
 *
 * @example
 * // 返回 6
 * trap([0,1,0,2,1,0,1,3,2,1,2,1])
 *
 * @param {number[]} height 柱子的高度分布
 * @return {number} 能接多少雨水
 */
var trap = function (height) {
    var lMax = (rMax = 0)
    var lArea = (rArea = 0)
    var len = height.length

    for (let i = 0; i < len; i++) {
        lMax = Math.max(lMax, height[i])
        rMax = Math.max(rMax, height[len - i - 1])
        lArea += lMax
        rArea += rMax
    }

    return lArea + rArea - lMax * len - height.reduce((a, b) => a + b, 0)
}

// var trap = function(height) {
//   var l = 0
//   var r = height.length - 1
//   var lMax = 0
//   var rMax = 0

//   var s = 0

//   while (l < r) {
//       if (height[l] < height[r]) {
//           lMax = Math.max(lMax, height[l])
//           s += lMax - height[l]
//           l++
//       } else {
//           rMax = Math.max(rMax, height[r])
//           s += rMax - height[r]
//           r--
//       }
//   }

//   return s
// }

export { trap, removeDuplicates, maxArea }
