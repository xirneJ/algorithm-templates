---
title: "DFS之连通性模型"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# DFS之连通性模型

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 110;

int n;
char g[N][N];
int xa, ya, xb, yb;
int dx[4] = {-1, 0, 1, 0}, dy[4] = {0, 1, 0, -1};
bool st[N][N];

bool dfs(int x, int y)
{
    if (g[x][y] == '#') return false;
    if (x == xb && y == yb) return true;

    st[x][y] = true;

    for (int i = 0; i < 4; i ++ )
    {
        int a = x + dx[i], b = y + dy[i];
        if (a < 0 || a >= n || b < 0 || b >= n) continue;
        if (st[a][b]) continue;
        if (dfs(a, b)) return true;
    }

    return false;
}

int main()
{
    int T;
    scanf("%d", &T);
    while (T -- )
    {
        scanf("%d", &n);
        for (int i = 0; i < n; i ++ ) scanf("%s", g[i]);
        scanf("%d%d%d%d", &xa, &ya, &xb, &yb);

        memset(st, 0, sizeof st);
        if (dfs(xa, ya)) puts("YES");
        else puts("NO");
    }

    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** DFS之连通性模型

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1112. 迷宫](../problems/search/1480.md) | 未完成 |
| [AcWing 1113. 红与黑](../problems/search/1481.md) | 未完成 |

## 提交来源

- [AcWing 1112. 迷宫](https://www.acwing.com/activity/content/code/content/134071/) · yxc 相关代码
