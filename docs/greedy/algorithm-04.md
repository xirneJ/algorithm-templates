---
title: "绝对值不等式"
description: "算法分类：贪心"
tags:
  - 算法模板
  - "贪心"
---

# 绝对值不等式

## 模板

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 100010;

int n;
int q[N];

int main()
{
    scanf("%d", &n);

    for (int i = 0; i < n; i ++ ) scanf("%d", &q[i]);

    sort(q, q + n);

    int res = 0;
    for (int i = 0; i < n; i ++ ) res += abs(q[i] - q[n / 2]);

    printf("%d\n", res);

    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 绝对值不等式

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 104. 货仓选址](../problems/greedy/1214.md) | 未完成 |

## 提交来源

- [AcWing 104. 货仓选址](https://www.acwing.com/activity/content/code/content/79277/) · yxc 相关代码
