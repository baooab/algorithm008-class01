/**
 * 第二周算法练习
 * @namespace Week02
 */


/**
 * 94. 二叉树的中序遍历
 *
 * @see {@link https://leetcode-cn.com/problems/binary-tree-inorder-traversal/} for further information.
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) {
        return []
    }

    var  result = []

    var stack = []
    var curr = root

    while (curr !== null || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left 
        }

        var pop = stack.pop()
        result.push(pop.val)

        curr = curr.right
    }

    return result
}


export {
    inorderTraversal
}