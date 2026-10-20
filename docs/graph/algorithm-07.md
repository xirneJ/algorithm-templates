---
title: "单源最短路的扩展应用"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 单源最短路的扩展应用

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 1010, M = 20010, INF = 0x3f3f3f3f;

int n, m, T;
int h[N], e[M], w[M], ne[M], idx;
int dist[N], q[N];
bool st[N];

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

void spfa()
{
    int scnt;
    scanf("%d", &scnt);

    memset(dist, 0x3f, sizeof dist);

    int hh = 0, tt = 0;
    while (scnt -- )
    {
        int u;
        scanf("%d", &u);
        dist[u] = 0;
        q[tt ++ ] = u;
        st[u] = true;
    }

    while (hh != tt)
    {
        int t = q[hh ++ ];
        if (hh == N) hh = 0;

        st[t] = false;
        for (int i = h[t]; ~i; i = ne[i])
        {
            int j = e[i];
            if (dist[j] > dist[t] + w[i])
            {
                dist[j] = dist[t] + w[i];
                if (!st[j])
                {
                    q[tt ++ ] = j;
                    if (tt == N) tt = 0;
                    st[j] = true;
                }
            }
        }
    }
}

int main()
{
    while (scanf("%d%d%d", &n, &m, &T) != -1)
    {
        memset(h, -1, sizeof h);
        idx = 0;

        while (m -- )
        {
            int a, b, c;
            scanf("%d%d%d", &a, &b, &c);
            add(a, b, c);
        }

        spfa();

        if (dist[T] == INF) dist[T] = -1;
        printf("%d\n", dist[T]);
    }

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 单源最短路的扩展应用

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1137. 选择最佳线路](../problems/graph/1503.md) | 未完成 |
| [AcWing 1131. 拯救大兵瑞恩](../problems/graph/1504.md) | 未完成 |
| [AcWing 1134. 最短路计数](../problems/graph/1505.md) | 未完成 |
| [AcWing 383. 观光](../problems/graph/1506.md) | 未完成 |

## 提交来源

- [AcWing 1137. 选择最佳线路](https://www.acwing.com/activity/content/code/content/143197/) · yxc 相关代码
