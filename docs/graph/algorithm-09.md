---
title: "最小生成树的扩展应用"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 最小生成树的扩展应用

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 310;

int n;
int w[N][N];
int dist[N];
bool st[N];

int prim()
{
    memset(dist, 0x3f, sizeof dist);
    dist[0] = 0;

    int res = 0;
    for (int i = 0; i < n + 1; i ++ )
    {
        int t = -1;
        for (int j = 0; j <= n; j ++ )
            if (!st[j] && (t == -1 || dist[t] > dist[j]))
                t = j;
        st[t] = true;
        res += dist[t];

        for (int j = 0; j <= n; j ++ ) dist[j] = min(dist[j], w[t][j]);
    }

    return res;
}

int main()
{
    scanf("%d", &n);
    for (int i = 1; i <= n; i ++ )
    {
        scanf("%d", &w[0][i]);
        w[i][0] = w[0][i];
    }

    for (int i = 1; i <= n; i ++ )
        for (int j = 1; j <= n; j ++ )
            scanf("%d", &w[i][j]);

    printf("%d\n", prim());

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 最小生成树的扩展应用

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1146. 新的开始](../problems/graph/1526.md) | 未完成 |
| [AcWing 1145. 北极通讯网络](../problems/graph/1527.md) | 未完成 |
| [AcWing 346. 走廊泼水节](../problems/graph/1528.md) | 未完成 |
| [AcWing 1148. 秘密的牛奶运输](../problems/graph/1529.md) | 未完成 |

## 提交来源

- [AcWing 1146. 新的开始](https://www.acwing.com/activity/content/code/content/151256/) · yxc 相关代码
