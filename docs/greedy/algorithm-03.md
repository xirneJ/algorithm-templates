---
title: "排序不等式"
description: "算法分类：贪心"
tags:
  - 算法模板
  - "贪心"
---

# 排序不等式

## 模板

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

typedef long long LL;

const int N = 100010;

int n;
int t[N];

int main()
{
    scanf("%d", &n);
    for (int i = 0; i < n; i ++ ) scanf("%d", &t[i]);

    sort(t, t + n);
    reverse(t, t + n);

    LL res = 0;
    for (int i = 0; i < n; i ++ ) res += t[i] * i;

    printf("%lld\n", res);

    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 排序不等式

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 913. 排队打水](../problems/greedy/1213.md) | 未完成 |

## 提交来源

- [AcWing 913. 排队打水](https://www.acwing.com/activity/content/code/content/79272/) · yxc 相关代码
