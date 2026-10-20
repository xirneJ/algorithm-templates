---
title: "推公式"
description: "算法分类：贪心"
tags:
  - 算法模板
  - "贪心"
---

# 推公式

## 模板

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

typedef pair<int, int> PII;

const int N = 50010;

int n;
PII cow[N];

int main()
{
    scanf("%d", &n);
    for (int i = 0; i < n; i ++ )
    {
        int s, w;
        scanf("%d%d", &w, &s);
        cow[i] = {w + s, w};
    }

    sort(cow, cow + n);

    int res = -2e9, sum = 0;
    for (int i = 0; i < n; i ++ )
    {
        int s = cow[i].first - cow[i].second, w = cow[i].second;
        res = max(res, sum - s);
        sum += w;
    }

    printf("%d\n", res);

    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 推公式

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 125. 耍杂技的牛](../problems/greedy/1215.md) | 未完成 |

## 提交来源

- [AcWing 125. 耍杂技的牛](https://www.acwing.com/activity/content/code/content/79282/) · yxc 相关代码
