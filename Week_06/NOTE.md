学习笔记

本周动态规划的内容，不太理解。还需要多做多练还有多看，这类题目，基本都是靠经验来做的。

为了不让自己过分迷失，开始回溯本周第一节课里讲的内容。关于动态规划的本质是什么？解动态规划又应该使用什么样的思路？

## 动态规划的本质


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


[分治的模板](https://shimo.im/docs/zvlDqLLMFvcAF79A) 与递归类似：

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
