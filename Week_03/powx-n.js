var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x
        n = -n
    }

    return fastPow(x, n)
}

function fastPow(x, n) {
    // terminator
    if (n === 0) { return 1 }

    // process curr log
    let newN = Math.trunc(n / 2)

    // drill down
    half = fastPow(x, newN)

    // process result and generate final result
    return n % 2 === 1 ? half * half * x : half * half 
}
