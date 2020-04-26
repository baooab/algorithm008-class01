/**
 * 第一周算法练习
 * @namespace Week01
 */

/**
 * 20. 有效的括号
 *
 * @see {@link https://leetcode-cn.com/problems/valid-parentheses/} for further information.
 *
 * @example
 * 输入："()[]{}"
 * 输出：true
 *
 * 输入："(]"
 * 输出：false
 *
 * @param {string} s 被验证的字符串
 * @return {boolean}
 */
var isValid = function (s) {
    var closeCharMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])

    var stack = []

    for (let char of s) {
        if (
            stack.length &&
            closeCharMap.get(char) === stack[stack.length - 1]
        ) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return !stack.length
}

export { isValid }
