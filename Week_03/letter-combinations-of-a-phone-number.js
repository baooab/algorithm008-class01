const dict = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
])

var letterCombinations = function(digits) {
    var res = []
    if (digits) {
        gen(digits, res, '', 0)
    }
    return res
}

function gen(digits, res, tmp, index) {

    // terminator
    if (digits.length === index) {
        res.push(tmp)
        return
    }

    // process curr logic
    let currChars = dict.get(digits[index])

    // drill down
    for (let char of currChars) {
        gen(digits, res, tmp + char, index + 1)
    }

}
