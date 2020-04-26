/**
 * 第二周算法练习
 * @namespace Week02
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = []
    travel(root, res)
    return res
}

function travel(root, res) {
    if (root === null) {
        return
    }

    res.push(root.val)

    for (let child of root.children) {
        travel(child, res)
    }
}

// 非递归
var preorder2 = function(root) {
    var res = []
    if (root === null) { return res }

    var stack = new Stack()
    stack.push(root)

    while (!stack.isEmpty()) {
        let pop = stack.pop()
        res.push(pop.val)

        let children = pop.children
        for (let i = children.length - 1; i >= 0; i--) {
            stack.push(children[i])
        }
    }

    return res
}

export {
    preorder
}