/**
 * 第二周算法练习
 * @namespace Week02
 */

/**
 * 1. 两数之和
 *
 * @see {@link https://leetcode-cn.com/problems/two-sum/} for further information.
 *
 * @example
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1] 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const book = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (book.has(nums[i])) {
            return [i, book.get(nums[i])]
        } else {
            book.set(target - nums[i], i)
        }
    }
    return []
}

export {
    twoSum
}