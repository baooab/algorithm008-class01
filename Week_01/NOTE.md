## 学习笔记

经过一周的算法题学习和练习，我得到了两点收获。

一个是学习方法论，即所说的“五毒神掌”；另一个就是在做数组、链表、栈和队列的算法题过程中，开始去找这些题目间的内在关联，即所谓的“解题套路”。这两点是这一周对我帮助最大的。

先列出这一周练习的算法题：

| **数组**                                                                                            | **链表**                                                                           | **栈、队列**                                                                               |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)                   | [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)             | [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)                      |
| [42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)                                 | [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)   | [641. 设计循环双端队列](https://leetcode-cn.com/problems/design-circular-deque/)           |
| [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)                                        | [24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)  | [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)                                 |
| [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)                                     | [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)               | [84. 柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/) |
| [15. 三数之和](https://leetcode-cn.com/problems/3sum/)                                              | [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)         | [239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)            |
| [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)                                            | [25. K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/) | 用 add first 或 add last 这套新的 API 改写 Deque 的代码                                    |
| [26. 删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/) |                                                                                    | 分析 Queue 和 Priority Queue 的源码                                                        |
| [189. 旋转数组](https://leetcode-cn.com/problems/rotate-array/)                                     |                                                                                    |                                                                                            |
| [88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)                        |                                                                                    |                                                                                            |
| [66. 加一](https://leetcode-cn.com/problems/plus-one/)                                              |                                                                                    |                                                                                            |

再说我的两点收获。

### 五毒神掌

之前刷算法题，就存在这样的误区——会死磕。结果做出来了，但不再有精力和愿望在做接下来的题目，而且做出来后，也因为没有重新练习忘干净了，也没有多去想其他的解法。

“五毒神掌”是方法论，做法如下：

1. 第一遍：看了没有思路（5~10 分钟）的题目，直接看题解，找着题解代码敲一遍
1. 第二遍：然后不看题解再敲一遍
1. 第三遍：第二天（或第三天）不看题解再敲一遍
1. 第四遍：接下来一天不看题解再敲一遍
1. 第五遍：面试前敲一遍温习。

### 解题套路

#### 数组

-   原地修改借助插入索引
    -   “移动零”和“删除排序数组中的重复项”这两道题的解法都引入了一个表示当前插入位置的索引。
-   求面积借助两端索引
    -   “盛最多水的容器”和“接雨水”的解法使用了两端索引（0，length - 1），而且都是以向内收窄短板的方式，求得最终结果的

#### 链表

链表题目会涉及到两个基本操作：一个将当前指针移动移动到下一个节点；一个是交换两个节点的位置。

一、将指针移动到下一个节点

![image.png](https://cdn.nlark.com/yuque/0/2020/png/103346/1587281410436-e5cefc56-5d82-4e41-a3b1-f56d39a457d8.png#align=left&display=inline&height=329&margin=%5Bobject%20Object%5D&name=image.png&originHeight=657&originWidth=1344&size=1078673&status=done&style=none&width=672)

二、交换两个节点位置

交换节点时，需要引入一个空头节点，用来保存指向原来第二个节点的指针。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/103346/1587281064565-f5a509f9-bdb0-4013-b87e-ff3add6c7c65.png#align=left&display=inline&height=423&margin=%5Bobject%20Object%5D&name=image.png&originHeight=846&originWidth=1128&size=1407163&status=done&style=none&width=564)

#### 栈和队列

栈是后进先出的数据结构，队列则是先进先出的数据结构。

在做“有效的括号”这道题目时，巧妙的使用栈来做判断，是我想不到的，最后知道解法后，豁然开朗。

（完）
