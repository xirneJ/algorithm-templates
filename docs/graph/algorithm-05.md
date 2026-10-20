---
title: "单源最短路的建图方式"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 单源最短路的建图方式

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 2510, M = 6200 * 2 + 10;

int n, m, S, T;
int h[N], e[M], w[M], ne[M], idx;
int dist[N], q[N];
bool st[N];

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

void spfa()
{
    memset(dist, 0x3f, sizeof dist);
    dist[S] = 0;

    int hh = 0, tt = 1;
    q[0] = S, st[S] = true;

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
    cin >> n >> m >> S >> T;

    memset(h, -1, sizeof h);
    for (int i = 0; i < m; i ++ )
    {
        int a, b, c;
        cin >> a >> b >> c;
        add(a, b, c), add(b, a, c);
    }

    spfa();

    cout << dist[T] << endl;

    return 0;
}
```

本页按算法归档，收录 6 道相关题目。

**算法分组：** 单源最短路的建图方式

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1129. 热浪](../problems/graph/1493.md) | 未完成 |
| [AcWing 1128. 信使](../problems/graph/1494.md) | 未完成 |
| [AcWing 1127. 香甜的黄油](../problems/graph/1495.md) | 未完成 |
| [AcWing 1126. 最小花费](../problems/graph/1496.md) | 未完成 |
| [AcWing 920. 最优乘车](../problems/graph/1497.md) | 未完成 |
| [AcWing 903. 昂贵的聘礼](../problems/graph/1498.md) | 未完成 |

## 提交来源

- [AcWing 1129. 热浪](https://www.acwing.com/activity/content/code/content/140736/) · yxc 相关代码
