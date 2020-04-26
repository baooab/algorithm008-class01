/**
 * 第二周算法练习
 * @namespace Week02
 */


/**
 * 49. 字母异位词分组
 *
 * @see {@link https://leetcode-cn.com/problems/group-anagrams/} for further information.
 *
 * @example
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 *  ["ate","eat","tea"],
 *  ["nat","tan"],
 *  ["bat"]
 * ]
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    var groupMap = new Map()
    let sorted
    let tmp

    for (let str of strs) {
        sorted = Array.from(str).sort().join('')
        tmp = groupMap.get(sorted) || []
        tmp.push(str)
        groupMap.set(sorted, tmp)
    }

    return Array.from(groupMap.values())
}

export {
    groupAnagrams
}