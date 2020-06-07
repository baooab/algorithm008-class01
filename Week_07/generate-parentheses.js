/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = []
    gen(n, 0, 0, '', res)
    return res
}

function gen(n, l, r, s, res) {
    // terminator
    if (l === n && r === n) {
        res.push(s)
        return
    }

    // process curr logic
    // drill down
    if (l < n) {
        gen(n, l + 1, r, s + '(', res)
    }
    if (r < l) {
        gen(n, l, r + 1, s + ')', res)
    }
}
