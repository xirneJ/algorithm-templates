---
title: "单源最短路的综合应用"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 单源最短路的综合应用

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

typedef pair<int, int> PII;

const int N = 50010, M = 200010, INF = 0x3f3f3f3f;

int n, m;
int h[N], e[M], w[M], ne[M], idx;
int q[N], dist[6][N];
int source[6];
bool st[N];

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

void dijkstra(int start, int dist[])
{
    memset(dist, 0x3f, N * 4);
    dist[start] = 0;
    memset(st, 0, sizeof st);

    priority_queue<PII, vector<PII>, greater<PII>> heap;
    heap.push({0, start});

    while (heap.size())
    {
        auto t = heap.top();
        heap.pop();

        int ver = t.second;
        if (st[ver]) continue;
        st[ver] = true;

        for (int i = h[ver]; ~i; i = ne[i])
        {
            int j = e[i];
            if (dist[j] > dist[ver] + w[i])
            {
                dist[j] = dist[ver] + w[i];
                heap.push({dist[j], j});
            }
        }
    }
}

int dfs(int u, int start, int distance)
{
    if (u > 5) return distance;

    int res = INF;
    for (int i = 1; i <= 5; i ++ )
        if (!st[i])
        {
            int next = source[i];
            st[i] = true;
            res = min(res, dfs(u + 1, i, distance + dist[start][next]));
            st[i] = false;
        }

    return res;
}

int main()
{
    scanf("%d%d", &n, &m);
    source[0] = 1;
    for (int i = 1; i <= 5; i ++ ) scanf("%d", &source[i]);

    memset(h, -1, sizeof h);
    while (m -- )
    {
        int a, b, c;
        scanf("%d%d%d", &a, &b, &c);
        add(a, b, c), add(b, a, c);
    }

    for (int i = 0; i < 6; i ++ ) dijkstra(source[i], dist[i]);

    memset(st, 0, sizeof st);
    printf("%d\n", dfs(1, 0, 0));

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 单源最短路的综合应用

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1135. 新年好](../problems/graph/1499.md) | 未完成 |
| [AcWing 340. 通信线路](../problems/graph/1500.md) | 未完成 |
| [AcWing 342. 道路与航线](../problems/graph/1501.md) | 未完成 |
| [AcWing 341. 最优贸易](../problems/graph/1502.md) | 未完成 |

## 提交来源

- [AcWing 1135. 新年好](https://www.acwing.com/activity/content/code/content/141215/) · yxc 相关代码
