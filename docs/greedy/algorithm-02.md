---
title: "Huffman树"
description: "算法分类：贪心"
tags:
  - 算法模板
  - "贪心"
---

# Huffman树

## 模板

```cpp
#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

int main()
{
    int n;
    scanf("%d", &n);

    priority_queue<int, vector<int>, greater<int>> heap;
    while (n -- )
    {
        int x;
        scanf("%d", &x);
        heap.push(x);
    }

    int res = 0;
    while (heap.size() > 1)
    {
        int a = heap.top(); heap.pop();
        int b = heap.top(); heap.pop();
        res += a + b;
        heap.push(a + b);
    }

    printf("%d\n", res);
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** Huffman树

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 148. 合并果子](../problems/greedy/1115.md) | 未完成 |

## 提交来源

- [AcWing 148. 合并果子](https://www.acwing.com/activity/content/code/content/65246/) · yxc 相关代码
