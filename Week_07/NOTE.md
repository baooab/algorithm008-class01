## 字典树

字典树，即 Trie 树，又叫单词查找树。用来统计和排序大量的字符串，通常被搜索引擎用于文本词频统计。

优点：最大限度的减少字符串比较，查询效率比哈希表高。

字典树里的每个节点存储的不再是单个值，也不存单词。单词是在查找路径上拼成的，每条路径对应一个字符。单词有几个字符，就查找几次。

一个 Trie 节点的数据结构：

```javascript
function TrieNode() {
    this.links = new Map()
    this.isEnd = false
}
```

字典树实现（Leetcode 实现 Trie (前缀树)）

```javascript
class Trie {
  constructor()  {
    this.root = new TrieNode()
  }
  insert(word) {
    let node = this.root
    for (let char of word) {
      if (!node.links.has(char)) {
        node.links.set(char, new TrieNode())
      }
      node = node.links.get(char)
    }
    node.isEnd = true
  }
  search(word) {
    let node = this.root
    for (let char of word) {
      if (node.links.has(char)) {
        node = node.links.get(char)
      } else {
        return false
      }
    }
    return node.isEnd
  }
  startsWith(prefix) {
        let node = this.root
    for (let char of prefix) {
      if (node.links.has(char)) {
        node = node.links.get(char)
      } else {
        return false
      }
    }
    return true
  }
}
```
