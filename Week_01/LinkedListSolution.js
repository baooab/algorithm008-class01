/**
 * 第一周算法练习
 * @namespace Week01
 */

 /**
 * 21. 合并两个有序链表
 *
 * @see {@link https://leetcode-cn.com/problems/merge-two-sorted-lists/} for further information.
 *
 * @example
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 * @param {ListNode} l1 链表 1
 * @param {ListNode} l2 链表 2
 * @return {ListNode} 新的升序链表
 */
var mergeTwoLists = function (l1, l2) {
    var dummy = (prev = {})

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }

        prev = prev.next
    }

    prev.next = l1 !== null ? l1 : l2

    return dummy.next
}

export { mergeTwoLists }
