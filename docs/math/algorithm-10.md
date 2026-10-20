---
title: "概率与数学期望"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 概率与数学期望

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 100010, M = 200010;

int n, m;
int h[N], e[M], w[M], ne[M], idx;
int dout[N];
double f[N];

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

double dp(int u)
{
    if (f[u] >= 0) return f[u];
    f[u] = 0;
    for (int i = h[u]; ~i; i = ne[i])
    {
        int j = e[i];
        f[u] += (w[i] + dp(j)) / dout[u];
    }
    return f[u];
}

int main()
{
    scanf("%d%d", &n, &m);
    memset(h, -1, sizeof h);

    for (int i = 0; i < m; i ++ )
    {
        int a, b, c;
        scanf("%d%d%d", &a, &b, &c);
        add(a, b, c);
        dout[a] ++ ;
    }

    memset(f, -1, sizeof f);

    printf("%.2lf\n", dp(1));

    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** 概率与数学期望

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 217. 绿豆蛙的归宿](../problems/math/1779.md) | 未完成 |
| [AcWing 218. 扑克牌](../problems/math/1780.md) | 未完成 |

## 提交来源

- [AcWing 217. 绿豆蛙的归宿](https://www.acwing.com/activity/content/code/content/196433/) · yxc 相关代码
