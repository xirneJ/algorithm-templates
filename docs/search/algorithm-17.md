---
title: "IDA*"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# IDA*

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 15;

int n;
int q[N];
int w[5][N];

int f()
{
    int cnt = 0;
    for (int i = 0; i + 1 < n; i ++ )
        if (q[i + 1] != q[i] + 1)
            cnt ++ ;
    return (cnt + 2) / 3;
}

bool check()
{
    for (int i = 0; i + 1 < n; i ++ )
        if (q[i + 1] != q[i] + 1)
            return false;
    return true;
}

bool dfs(int depth, int max_depth)
{
    if (depth + f() > max_depth) return false;
    if (check()) return true;

    for (int len = 1; len <= n; len ++ )
        for (int l = 0; l + len - 1 < n; l ++ )
        {
            int r = l + len - 1;
            for (int k = r + 1; k < n; k ++ )
            {
                memcpy(w[depth], q, sizeof q);
                int x, y;
                for (x = r + 1, y = l; x <= k; x ++, y ++ ) q[y] = w[depth][x];
                for (x = l; x <= r; x ++, y ++ ) q[y] = w[depth][x];
                if (dfs(depth + 1, max_depth)) return true;
                memcpy(q, w[depth], sizeof q);
            }
        }

    return false;
}

int main()
{
    int T;
    cin >> T;
    while (T -- )
    {
        cin >> n;
        for (int i = 0; i < n; i ++ ) cin >> q[i];

        int depth = 0;
        while (depth < 5 && !dfs(0, depth)) depth ++ ;
        if (depth >= 5) puts("5 or more");
        else cout << depth << endl;
    }

    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** IDA*

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 180. 排书](../problems/search/1491.md) | 未完成 |
| [AcWing 181. 回转游戏](../problems/search/1492.md) | 未完成 |

## 提交来源

- [AcWing 180. 排书](https://www.acwing.com/activity/content/code/content/137004/) · yxc 相关代码
