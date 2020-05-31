## 学习笔记

本周动态规划的内容，不太理解。还需要多做多练还有多看，这类题目，基本都是靠经验来做的。

为了不让自己过分迷失，开始回溯本周第一节课里讲的内容。关于动态规划的本质是什么？解动态规划又应该使用什么样的思路？

### 动态规划的本质


动态规划跟递归、分治、回溯并没有什么本质上的不同，就是一些细节处理上稍有不同。

[递归的模板](https://shimo.im/docs/EICAr9lRPUIPHxsH/read) 要熟记——一共四步：终止条件、处理当前逻辑、下探到下一层、恢复当前状态数据（可选）

```javascript
function recur(level, param) {
  // terminator
  if (level > MAX_LEVEL) {
    // process result
    return
  } 
  
  // process current logic
  process(level, data)
  
  // drill down
  recur(level + 1, newParam)
  
  // restore current state(optional)
  // 如果下探到下一层的参数 newParam 是简单变量，就无需这一步了
  // 如果下探到下一层的参数 newParam 是引用类型，就需要了
}
```


分治是递归的一种特殊形式，[模板如下](https://shimo.im/docs/zvlDqLLMFvcAF79A)：

```javascript
function divide_conquer(problem, param) {
  // terminator
  if (problem is None) {
    // process result
    return
  }
  
  // split problem(divide)
  const data = prepare_data(problem)
  const problems = split_problem(problem, data)
  
  // get subproblems result(conquer & drill down)
  subresult1 = divide_conquer(problems[0], newParam)
  subresult2 = divide_conquer(problems[1], newParam)
  subresult3 = divide_conquer(problems[2], newParam)
  ...
  
  // process & generate final result
  result = process_result(subresult1, subresult2, subresult3, …)
  
  // revert current level states
}
```

不过“处理当前逻辑”被具化为“分解成子问题”并“求出各个子问题的结果”两步；“下探到下一层”则是在求子问题结果时，被使用了。在最后一步恢复状态数据之前，根据求出的子结果，计算出最终返回的结果(通常是合并操作)。

因此变为 5 步了：

1. 终止条件
1. 分解成子问题
1. 求出子结果（drill down）
1. 得到最终结果
1. 恢复当前状态数据

> 一定要避免人肉递归，找最近最简重复问题，使用数学归纳法思维。

### 动态规划的解题思路

动态规划（动态递推）：以递归的方式，将复杂的问题分解成一个个小问题来解决。

一般动态规划问题，会让求一个最优解、一个最大值，一个最少的方式。这是因为动态规划与普通的递归分治相比，多了一个“最优子结构”——不需要存储每一步的状态，只需要存储最优的状态。每一步求得最优质的，最终得到全局的最优值。

- 如何存储最优的状态？使用缓存，或者是数组
- 淘汰次优结果，剩下最优结果

动态规划跟分治（或递归）的关系：

1. 没有根本上的区别（动态规划多了一个最优子结构）
1. 共同点：找到重复子问题
1. 不同点：动态规划多了一个最优子结构，中途会淘汰次优解（复杂度从指数级别降到了多项式级别）


解题思路：

1. 最优子结构：opt[n] = best_of(opt[n - 1], opt[n - 2], ...)
1. 存储中间状态：opt[i]
1. 递推公式（状态转移方程/dp方程）
    1. fib: opt[n] =  opt[n - 1] +  opt[n - 2]
    1. 二维路径：opt[i][j] = opt[i + 1][j] + opt[i][j + 1]

（完）
