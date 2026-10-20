---
title: "二分图"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 二分图

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 20010, M = 200010;

int n, m;
int h[N], e[M], w[M], ne[M], idx;
int color[N];

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

bool dfs(int u, int c, int mid)
{
    color[u] = c;
    for (int i = h[u]; ~i; i = ne[i])
    {
        int j = e[i];
        if (w[i] <= mid) continue;
        if (color[j])
        {
            if (color[j] == c) return false;
        }
        else if (!dfs(j, 3 - c, mid)) return false;
    }

    return true;
}

bool check(int mid)
{
    memset(color, 0, sizeof color);
    for (int i = 1; i <= n; i ++ )
        if (!color[i])
            if (!dfs(i, 1, mid))
                return false;
    return true;
}

int main()
{
    scanf("%d%d", &n, &m);
    memset(h, -1, sizeof h);

    while (m -- )
    {
        int a, b, c;
        scanf("%d%d%d", &a, &b, &c);
        add(a, b, c), add(b, a, c);
    }

    int l = 0, r = 1e9;
    while (l < r)
    {
        int mid = l + r >> 1;
        if (check(mid)) r = mid;
        else l = mid + 1;
    }

    printf("%d\n", r);

    return 0;
}
```

本页按算法归档，收录 5 道相关题目。

**算法分组：** 二分图

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 257. 关押罪犯](../problems/graph/1557.md) | 未完成 |
| [AcWing 372. 棋盘覆盖](../problems/graph/1558.md) | 未完成 |
| [AcWing 376. 机器任务](../problems/graph/1559.md) | 未完成 |
| [AcWing 378. 骑士放置](../problems/graph/1560.md) | 未完成 |
| [AcWing 379. 捉迷藏](../problems/graph/1561.md) | 未完成 |

## 提交来源

- [AcWing 257. 关押罪犯](https://www.acwing.com/activity/content/code/content/158085/) · yxc 相关代码
