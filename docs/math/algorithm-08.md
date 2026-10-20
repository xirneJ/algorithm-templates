---
title: "约数个数"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 约数个数

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 1000010;

int n;
int a[N], cnt[N], s[N];

int main()
{
    scanf("%d", &n);

    for (int i = 0; i < n; i ++ )
    {
        scanf("%d", &a[i]);
        cnt[a[i]] ++ ;
    }

    for (int i = 1; i < N; i ++ )
        for (int j = i; j < N; j += i)
            s[j] += cnt[i];

    for (int i = 0; i < n; i ++ ) printf("%d\n", s[a[i]] - 1);

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 约数个数

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1291. 轻拍牛头](../problems/math/1738.md) | 未完成 |
| [AcWing 1294. 樱花](../problems/math/1739.md) | 未完成 |
| [AcWing 198. 反素数](../problems/math/1740.md) | 未完成 |
| [AcWing 200. Hankson的趣味题](../problems/math/1741.md) | 未完成 |

## 提交来源

- [AcWing 1291. 轻拍牛头](https://www.acwing.com/activity/content/code/content/174305/) · yxc 相关代码
