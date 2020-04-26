/**
 * 第二周算法练习
 * @namespace Week02
 */

/**
 * 242. 有效的字母异位词
 *
 * @see {@link https://leetcode-cn.com/problems/valid-anagram/description/} for further information.
 *
 * @example
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *  
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * @param {string} s 被验证的字符串
 * @param {string} t 被验证的字符串
 * @return {boolean} 是否为字母异位词
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
};

var isAnagram2 = function(s, t) {
    var lenS = s.length
    var lenT = t.length

    if (lenS !== lenT) {
        return false
    }

    var hashMap = new Map()

    for (let i = 0; i < lenS; i++) {
        hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1)
        hashMap.set(t[i], (hashMap.get(t[i]) || 0) - 1)
    }

    for (let entry of hashMap) {
        if (entry[1] !== 0) {
            return false
        }
    }

    return true 
}

export {
    isAnagram
}