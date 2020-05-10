# 学习笔记

本周学习了递归、分治和回溯。对递归和分治开始有解题的想法和思路了。但对“回溯”的概念还是有点模糊。
泛型递归模板（JS 版）

```javascript
function recur(level, param) {
	// terminator
  if (max > MAX_LEVEL) {
  	// process result
    return
  }
  
  // process curr logic
  process(level, param)
  
  // drill down
  recur(level + 1, newParam)
  
  // restore curr state(optional)
}
```

分治代码本质也是一种递归问题，它比泛型递归模板多了一步：process and generate final result

```javascript

function divide_conqure(problem, param) {
	// terminator
	if (problem is None) {
		// process result
		return
	}

	// process curr loic
	data = prepare_data(problem)
	subproblems = split_problem(problem, data)

	// drill down
	subresult1 = divide_conqure(subproblems[0], newParam)
	subresult2 = divide_conqure(subproblems[1], newParam)
	subresult3 = divide_conqure(subproblems[2], newParam)

	// process result and generate final result
	result = process_result(subresult1, subresult2, subresult3, ...)

	// restore curr state
}
```

再记住了分支模板之后，我很土气的套用模板，完成了 [50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/) 的求解。

```javascript
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
```

虽然代码，看起来不够完美，还有优化的空间，不过算是套着模板写出来了。
这让我想到了前两天面试，出的题目，求数组最深嵌套深度：

```javascript
var arr = [1, [2, [3, [4]]], [5, 6], 7, [8, 9]];
var depth = getDepth(arr);
console.log(depth); // 4
```

如果编写这个 getDepth 函数呢？我套用这套模板试试，因为只是需要递归求解的，不是泛型递归，就是分治递归。

```javascript
// 这里的思想是：当前数据的最大深度 = 最大成员深度 + 1
function getDepth(arr) {
	// terminator
  if (!Array.isArray(arr)) { return 0 }
  
  // process curr logic
  // drill down
  let result = []
  for (let ele of arr) {
  	result.push(getDepth(ele))
  }
  
  // process and generate final result
 	return Math.max(...result) + 1

}
```

[78. 子集](https://leetcode-cn.com/problems/subsets/) 这个问题开始做的时候，还是没有太好的思路，因为跟 [22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/) 很像，我就把之前的题目找来做了。做出来了。

```javascript
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
```

按照这个思路，重新开始思考 [78. 子集](https://leetcode-cn.com/problems/subsets/) 这个问题。

```javascript
var subsets = function(nums) {
    var res = []
    if (nums !== null) {
        gen(nums, res, [], 0)
    }

    return res
}

function gen(nums, res, tmp, index) {
    // terminetor
    if (nums.length === index) {
        res.push(tmp.slice())
        return
    }

    // process curr logic
    let curr = nums[index]

    // drill down
    // 加入或者不加入
    gen(nums, res, tmp, index + 1)
    tmp.push(curr)
    gen(nums, res, tmp, index + 1)

    // restore curr state
    tmp.pop()
}
```
