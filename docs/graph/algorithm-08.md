---
title: "最小生成树"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 最小生成树

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 110;

int n;
int w[N][N];
int dist[N];
bool st[N];

int prim()
{
    int res = 0;
    memset(dist, 0x3f, sizeof dist);
    dist[1] = 0;

    for (int i = 0; i < n; i ++ )
    {
        int t = -1;
        for (int j = 1; j <= n; j ++ )
            if (!st[j] && (t == -1 || dist[t] > dist[j]))
                t = j;

        res += dist[t];
        st[t] = true;

        for (int j = 1; j <= n; j ++ ) dist[j] = min(dist[j], w[t][j]);
    }

    return res;
}

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i ++ )
        for (int j = 1; j <= n; j ++ )
            cin >> w[i][j];

    cout << prim() << endl;

    return 0;
}
```

本页按算法归档，收录 5 道相关题目。

**算法分组：** 最小生成树

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1140. 最短网络](../problems/graph/1511.md) | 未完成 |
| [AcWing 1141. 局域网](../problems/graph/1512.md) | 未完成 |
| [AcWing 1142. 繁忙的都市](../problems/graph/1513.md) | 未完成 |
| [AcWing 1143. 联络员](../problems/graph/1514.md) | 未完成 |
| [AcWing 1144. 连接格点](../problems/graph/1515.md) | 未完成 |

## 提交来源

- [AcWing 1140. 最短网络](https://www.acwing.com/activity/content/code/content/148031/) · yxc 相关代码
