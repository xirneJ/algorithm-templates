---
title: "DFS之搜索顺序"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# DFS之搜索顺序

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 10;

int n, m;
bool st[N][N];
int ans;
int dx[8] = {-2, -1, 1, 2, 2, 1, -1, -2};
int dy[8] = {1, 2, 2, 1, -1, -2, -2, -1};

void dfs(int x, int y, int cnt)
{
    if (cnt == n * m)
    {
        ans ++ ;
        return;
    }
    st[x][y] = true;

    for (int i = 0; i < 8; i ++ )
    {
        int a = x + dx[i], b = y + dy[i];
        if (a < 0 || a >= n || b < 0 || b >= m) continue;
        if (st[a][b]) continue;
        dfs(a, b, cnt + 1);
    }

    st[x][y] = false;
}

int main()
{
    int T;
    scanf("%d", &T);
    while (T -- )
    {
        int x, y;
        scanf("%d%d%d%d", &n, &m, &x, &y);

        memset(st, 0, sizeof st);
        ans = 0;
        dfs(x, y, 1);

        printf("%d\n", ans);
    }

    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** DFS之搜索顺序

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1116. 马走日](../problems/search/1482.md) | 未完成 |
| [AcWing 1117. 单词接龙](../problems/search/1483.md) | 未完成 |
| [AcWing 1118. 分成互质组](../problems/search/1484.md) | 未完成 |

## 提交来源

- [AcWing 1116. 马走日](https://www.acwing.com/activity/content/code/content/134135/) · yxc 相关代码
