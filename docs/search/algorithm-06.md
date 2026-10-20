---
title: "最短路模型"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# 最短路模型

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

#define x first
#define y second

using namespace std;

typedef pair<int, int> PII;

const int N = 1010, M = N * N;

int n;
int g[N][N];
PII q[M];
PII pre[N][N];

void bfs(int sx, int sy)
{
    int dx[4] = {-1, 0, 1, 0}, dy[4] = {0, 1, 0, -1};

    int hh = 0, tt = 0;
    q[0] = {sx, sy};

    memset(pre, -1, sizeof pre);
    pre[sx][sy] = {0, 0};
    while (hh <= tt)
    {
        PII t = q[hh ++ ];

        for (int i = 0; i < 4; i ++ )
        {
            int a = t.x + dx[i], b = t.y + dy[i];
            if (a < 0 || a >= n || b < 0 || b >= n) continue;
            if (g[a][b]) continue;
            if (pre[a][b].x != -1) continue;

            q[ ++ tt] = {a, b};
            pre[a][b] = t;
        }
    }
}

int main()
{
    scanf("%d", &n);

    for (int i = 0; i < n; i ++ )
        for (int j = 0; j < n; j ++ )
            scanf("%d", &g[i][j]);

    bfs(n - 1, n - 1);

    PII end(0, 0);

    while (true)
    {
        printf("%d %d\n", end.x, end.y);
        if (end.x == n - 1 && end.y == n - 1) break;
        end = pre[end.x][end.y];
    }

    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** 最短路模型

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1076. 迷宫问题](../problems/search/1471.md) | 未完成 |
| [AcWing 188. 武士风度的牛](../problems/search/1472.md) | 未完成 |
| [AcWing 1100. 抓住那头牛](../problems/search/1473.md) | 未完成 |

## 提交来源

- [AcWing 1076. 迷宫问题](https://www.acwing.com/activity/content/code/content/130866/) · yxc 相关代码
