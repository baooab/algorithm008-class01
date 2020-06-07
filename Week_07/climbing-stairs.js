/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
  if (n < 3) { return n }

let first = 1
  let second = 2

  let third

  for (let i = 3; i <= n; i++) {
   third = first + second

    first = second
    second = third
  }

  return second
}
