## 学习笔记


本周收集了以往到现在接触到的代码模板，还是挺有用的。现在对递归调用的题目有点感觉了。

<a name="0peJ4"></a>
## 递归代码模板

<br />[https://shimo.im/docs/DjqqGCT3xqDYwPyY/read](https://shimo.im/docs/DjqqGCT3xqDYwPyY/read)<br />

```python
def recursion(level, param1, param2, ...): 
    # recursion terminator 
    if level > MAX_LEVEL: 
	   process_result 
	   return 
    
    # process logic in current level 
    process(level, data...) 
    
    # drill down 
    self.recursion(level + 1, p1, ...) 
    
    # reverse the current level status if needed
```


```java
public void recur(int level, int param) { 
  // terminator 
  if (level > MAX_LEVEL) { 
    // process result 
    return; 
  }
    
  // process current logic 
  process(level, param); 
  
  // drill down 
  recur( level: level + 1, newParam); 
  
  // restore current status 
}
```
<a name="l6KB7"></a>
## 分治代码模板

<br />[https://shimo.im/docs/3xvghYh3JJPKwdvt/read](https://shimo.im/docs/3xvghYh3JJPKwdvt/read)<br />

```python
def divide_conquer(problem, param1, param2, ...): 
  # recursion terminator 
  if problem is None: 
	print_result 
	return 

  # prepare data 
  data = prepare_data(problem) 
  subproblems = split_problem(problem, data) 

  # conquer subproblems 
  subresult1 = self.divide_conquer(subproblems[0], p1, ...) 
  subresult2 = self.divide_conquer(subproblems[1], p1, ...) 
  subresult3 = self.divide_conquer(subproblems[2], p1, ...) 
  …

  # process and generate the final result 
  result = process_result(subresult1, subresult2, subresult3, …)
	
  # revert the current level states
```

<br />[https://visualgo.net/zh/dfsbfs](https://visualgo.net/zh/dfsbfs)<br />

<a name="ewmv4"></a>
## DFS 代码模板


<a name="MZym8"></a>
### 递归写法

<br />[https://shimo.im/docs/ddgwCccJQKxkrcTq/read](https://shimo.im/docs/ddgwCccJQKxkrcTq/read)<br />
<br />下面的模板也适应于对图的深度优先遍历。关键点是最开始检查 visited 中是否包含要遍历的 node。<br />

```python
visited = set() 

def dfs(node, visited):
    if node in visited: # terminator
    	# already visited 
    	return 

	visited.add(node) 

	# process current node here. 
	...
	for next_node in node.children():
		if next_node not in visited: 
			dfs(next_node, visited)
```


<a name="9NRDA"></a>
### 非递归写法

<br />注意看，深度遍历的迭代实现，是通过“栈”来实现的——先向栈中压入节点，然后弹出，接着再压入节点到栈再弹出。如此反复，直到栈为空。<br />

```python
def DFS(self, tree): 

	if tree.root is None: 
		return [] 

	visited, stack = [], [tree.root]

	while stack: 
		node = stack.pop() 
		visited.add(node)

		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 

	# other processing work 
	...
```


<a name="yaEGH"></a>
## BFS 代码模板

<br />[https://shimo.im/docs/P8TqKHGKt3ytkYYd/read](https://shimo.im/docs/P8TqKHGKt3ytkYYd/read)<br />

<a name="yWmMm"></a>
### 非递归写法

<br />广度优先则是使用“队列”这个结构，与栈相反，它是先进先出。先向队列中压入每一层节点（从根节点所在的层开始），然后在当前层节点出队的时候，顺势入队后续一层的节点。如此反复，直到队列为空，即遍历完全。<br />

```python
def BFS(graph, start, end):
    visited = set()
	queue = [] 
	queue.append([start]) 

	while queue: 
		node = queue.pop() 
		visited.add(node)

		process(node)
		nodes = generate_related_nodes(node) 
		queue.push(nodes)

	# other processing work 
	...
```


```javascript
def BFS(graph, start, end):
  visited = set()
	queue = [] 
	queue.push([start]) 

	while queue: 
		node = queue.shift() 
		visited.add(node)

		process(node)
		nodes = generate_related_nodes(node) 
		queue.push(nodes)

	// other processing work 
	...
```


<a name="bGjSy"></a>
## 二分查找代码模板


```python
left, right = 0, len(array) - 1 
while left <= right: 
	  mid = (left + right) / 2 
	  if array[mid] == target: 
		    # find the target!! 
		    break or return result 
	  elif array[mid] < target: 
		    left = mid + 1 
	  else: 
		    right = mid - 1
```


```javascript
function binarySearch<T>(array: T[], target: T) {
	let left = 0;
	let right = array.length - 1;

	let idx = -1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (array[mid] === target) {
			idx = mid
			break
		}

		if (array[mid] < target) {
			left = mid + 1	
		} else {
			right = mid - 1
		}
	}

	return idx
}

console.log(
	binarySearch([1,2,3,4,5,6,7,8], 2)
)
```
