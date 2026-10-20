---
title: "A*"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# A*

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>
#include <queue>

#define x first
#define y second

using namespace std;

typedef pair<int, int> PII;
typedef pair<int, PII> PIII;

const int N = 1010, M = 200010;

int n, m, S, T, K;
int h[N], rh[N], e[M], w[M], ne[M], idx;
int dist[N], cnt[N];
bool st[N];

void add(int h[], int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

void dijkstra()
{
    priority_queue<PII, vector<PII>, greater<PII>> heap;
    heap.push({0, T});

    memset(dist, 0x3f, sizeof dist);
    dist[T] = 0;

    while (heap.size())
    {
        auto t = heap.top();
        heap.pop();

        int ver = t.y;
        if (st[ver]) continue;
        st[ver] = true;

        for (int i = rh[ver]; ~i; i = ne[i])
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

int astar()
{
    priority_queue<PIII, vector<PIII>, greater<PIII>> heap;
    heap.push({dist[S], {0, S}});

    while (heap.size())
    {
        auto t = heap.top();
        heap.pop();

        int ver = t.y.y, distance = t.y.x;
        cnt[ver] ++ ;
        if (cnt[T] == K) return distance;

        for (int i = h[ver]; ~i; i = ne[i])
        {
            int j = e[i];
            if (cnt[j] < K)
                heap.push({distance + w[i] + dist[j], {distance + w[i], j}});
        }
    }

    return -1;
}

int main()
{
    scanf("%d%d", &n, &m);
    memset(h, -1, sizeof h);
    memset(rh, -1, sizeof rh);

    for (int i = 0; i < m; i ++ )
    {
        int a, b, c;
        scanf("%d%d%d", &a, &b, &c);
        add(h, a, b, c);
        add(rh, b, a, c);
    }
    scanf("%d%d%d", &S, &T, &K);
    if (S == T) K ++ ;

    dijkstra();
    printf("%d\n", astar());

    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** A*

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 178. 第K短路](../problems/search/1478.md) | 未完成 |
| [AcWing 179. 八数码](../problems/search/1479.md) | 未完成 |

## 提交来源

- [AcWing 178. 第K短路](https://www.acwing.com/activity/content/code/content/132735/) · yxc 相关代码
