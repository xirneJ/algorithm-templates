---
title: "Flood Fill"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# Flood Fill

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

int n, m;
char g[N][N];
PII q[M];
bool st[N][N];

void bfs(int sx, int sy)
{
    int hh = 0, tt = 0;
    q[0] = {sx, sy};
    st[sx][sy] = true;

    while (hh <= tt)
    {
        PII t = q[hh ++ ];

        for (int i = t.x - 1; i <= t.x + 1; i ++ )
            for (int j = t.y - 1; j <= t.y + 1; j ++ )
            {
                if (i == t.x && j == t.y) continue;
                if (i < 0 || i >= n || j < 0 || j >= m) continue;
                if (g[i][j] == '.' || st[i][j]) continue;

                q[ ++ tt] = {i, j};
                st[i][j] = true;
            }
    }
}

int main()
{
    scanf("%d%d", &n, &m);
    for (int i = 0; i < n; i ++ ) scanf("%s", g[i]);

    int cnt = 0;
    for (int i = 0; i < n; i ++ )
        for (int j = 0; j < m; j ++ )
            if (g[i][j] == 'W' && !st[i][j])
            {
                bfs(i, j);
                cnt ++ ;
            }

    printf("%d\n", cnt);

    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** Flood Fill

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1097. 池塘计数](../problems/search/1468.md) | 未完成 |
| [AcWing 1098. 城堡问题](../problems/search/1469.md) | 未完成 |
| [AcWing 1106. 山峰和山谷](../problems/search/1470.md) | 未完成 |

## 提交来源

- [AcWing 1097. 池塘计数](https://www.acwing.com/activity/content/code/content/130752/) · yxc 相关代码
