/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length
    const cols = grid[0].length

    const calc = cache(function (grid, i, j) {
        const dp = grid

        // terminator
        if (i < 0 || j < 0) {
            return Number.MAX_VALUE
        }
        if (i === 0 && j === 0) {
            return dp[i][j]
        }

        // 1. subproblems
        // 2. 状态数组: dp
        // 3. 状态转移公式: dp(i, j) = grid[i][j] + min(dp(i - 1, j), dp(i, j - 1))
        return grid[i][j] + Math.min(calc(grid, i - 1, j), calc(grid, i, j - 1))
    }, 1)

    return calc(grid, rows - 1, cols - 1)
}

function cache(fn, start = 0) {
    const hit = Object.create(null)
    return function cached(...args) {
        const key = String(args.slice(start))
        return hit[key] || (hit[key] = fn(...args))
    }
}
