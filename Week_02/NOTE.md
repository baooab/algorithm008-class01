# 学习笔记 - 遍历二叉树

二叉树是每个结点最多有两个子树的树结构。在工程领域，对二叉树的使用比较常见，像二叉搜索树、红黑树这些结构都是基于二叉树进行构建的。学会二叉树的遍历是后续进行二叉树查找和编辑操作的基础。


本文将会使用 JavaScript 来实现二叉树的遍历。

## 深度/广度优先遍历


二叉树的遍历方式有两种，深度优先遍历和广度优先遍历。

先以最简单的二叉树为例：

![image.png](https://cdn.nlark.com/yuque/0/2020/png/103346/1587910987474-966d585b-c618-43f3-b834-9944cdc1fee5.png#align=left&display=inline&height=214&margin=%5Bobject%20Object%5D&name=image.png&originHeight=214&originWidth=290&size=15154&status=done&style=none&width=290)

广度优先遍历是一层一层遍历，先遍历完第一层，再遍历第二层……。上图的广度优先遍历结果，即 A -> B -> C。


深度优先遍历则分三种情况，遍历顺序如下：

1. 前序遍历：A -> B -> C
1. 中序遍历：B -> A -> C
1. 后续遍历：B -> C -> A



这里的“前”、“中”、“后”是指根节点在遍历顺序中的位置。


再来一个稍微复杂点的：


![image.png](https://cdn.nlark.com/yuque/0/2020/png/103346/1587911559120-ec875074-3780-42e1-97f5-dc3e0b620340.png#align=left&display=inline&height=337&margin=%5Bobject%20Object%5D&name=image.png&originHeight=449&originWidth=610&size=47070&status=done&style=none&width=458)


广度优先遍历的结果：A -> B -> C -> D -> G -> H -> E -> F。

深度优先遍历

1. 前序：A -> B -> D -> E -> F -> G -> C -> H
1. 中序：E -> D -> F -> B -> G -> A -> C -> H
1. 后序：E -> F -> D -> G -> B -> H -> C -> A



## JavaScript 实现


### TreeNode


树中的每个节点是构造函数 TreeNode 的实例：


```javascript
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
```


二叉树遍历的实现分递归和非递归版本。递归版本相对简易，因此先从递归版本开始实现。


### 递归版本


#### 前序


```javascript
var preorderTraversal = function(root) {
  var result = []
  traversal(root, result)
  return result
}

function traversal(root, result) {
  if (root === null) { return }
  result.push(root.val) // 访问左右子树前，先访问根节点
  traversal(root.left, result)
  traversal(root.right, result)
}
```


#### 中序


```javascript
var inorderTraversal = function(root) {
  var result = []
  traversal(root, result)
  return result
}

function traversal(root, result) {
  if (root === null) { return }
  traversal(root.left, result)
  result.push(root.val) // 访问左子树后，再访问根节点
  traversal(root.right, result)
}
```


#### 后序


```javascript
var postorderTraversal = function(root) {
  var result = []
  traversal(root, result)
  return result
}

function traversal(root, result) {
  if (root === null) { return }
  traversal(root.left, result)
  traversal(root.right, result) 
  result.push(root.val) // 访问完左右子树后，再访问根节点
}
```


#### 深度优先（N叉树）


```javascript
var levelOrder = function(root) {
    var res = []
    travel(root, res, 0)
    return res
};

function travel(root, res, level) {
    if (root === null) {
        return
    }

    if (res.length === level) {
        res.push([])
    }

    res[level].push(root.val)

    let children = root.children || []
    for (let child of children) {
        travel(child, res, level + 1)
    }
}
```


### 迭代版本


非递归版本是通过 while 循环来实现的。


#### 栈


栈是先进后出结构，压入方法 push，弹出方法 pop。我们使用数组实现。


![](https://cdn.nlark.com/yuque/0/2020/svg/103346/1587912837451-207d5140-b387-475d-8b80-b04d97e6eefd.svg#align=left&display=inline&height=300&margin=%5Bobject%20Object%5D&originHeight=300&originWidth=417&size=0&status=done&style=none&width=417)


```javascript
class Stack {
	constructor() { this._arr = [] }
  isEmpty() { return this._arr.length === 0 }
  push(item) { return this._arr.push(item) }
  pop() { return this._arr.pop() }
}
```


#### 队列


队列是先进先出结构，入队方法 enqueue，出队方法 dequeue。我们使用数组实现。


```javascript
// See: http://code.iamkate.com/javascript/queues/
function Queue(){
  var queue  = [];
  var offset = 0;

  // Returns the length of the queue.
  this.getLength = function(){
    return (queue.length - offset);
  }

  this.isEmpty = function(){
    return (queue.length == 0);
  }

  this.enqueue = function(item){
    queue.push(item);
  }

  this.dequeue = function(){
    if (queue.length == 0) return undefined;
    var item = queue[offset];

    // increment the offset and remove the free space if necessary
    if (++ offset * 2 >= queue.length){
      queue  = queue.slice(offset);
      offset = 0;
    }
    
    return item;
  }
}
```


#### 前序


```javascript
var preorderTraversal = function(root) {
    var res = []

    if (root === null) { return res }

    var stack = []
    stack.push(root)

    while (stack.length) {
        let pop = stack.pop()
        res.push(pop.val)

        if (pop.right) { stack.push(pop.right) }
        if (pop.left) { stack.push(pop.left) }
    }

    return res
}
```


因为前序遍历会先遍历左子树，因此在 while 循环内部，我们后压入左子树，这样就会先弹出它了。

#### 中序


```javascript
var inorderTraversal = function(root) {
    var res = []
    
    if (root === null) { return res }

    var stack = new Stack()
    var curr = root

    while (curr !== null || !stack.isEmpty()) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        
        let pop = stack.pop()
        res.push(pop.val)

        curr = pop.right
    }

    return res
}
```


内部的 while 会将根节点在内的所有左子树节点压入到栈中，最后弹出左子树上的叶子节点，接着是叶子节点的父节点，然后是父节点的右子树……。


#### 后序


```javascript
var postorderTraversal = function(root) {
    var res = []
    
    if (root === null) { return res }

    var satck = new Stack()
    satck.push(root)

    while (!satck.isEmpty()) {
        let pop = satck.pop()
        res.unshift(pop.val)

        if (pop.left) { satck.push(pop.left) }
        if (pop.right) { satck.push(pop.right) }
    }

    return res
}
```


入栈顺序是 root -> right -> left，插入结果为 left -> right -> root。


#### 深度优先（N叉树）


```javascript
var levelOrder = function(root) {
    var res = []

    if (root === null) {
        return res
    }

    var queue = [root]
    var level = 0


    // 每一次迭代处理一层
    while (queue.length) {
        res.push([])

        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            res[level].push(node.val)

            // 向队列中压入子元素
            let children = node.children || []
            for (let child of children) {
                queue.push(child)
            }
        }

        ++level
    }

    return res
}
```


（完）
