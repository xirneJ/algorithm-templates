---
title: "Tarjan 强连通分量"
description: "一次 DFS 求有向图所有强连通分量，缩点后可以转化成 DAG 继续处理。"
tags:
  - "Tarjan"
  - "强连通分量"
  - "SCC"
  - "缩点"
---

# Tarjan 强连通分量

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 10010, M = 50010;

int n, m;
int h[N], e[M], ne[M], idx;
int dfn[N], low[N], timestamp;
int stk[N], top;
bool in_stk[N];
int id[N], scc_cnt, Size[N];
int dout[N];

void add(int a, int b)
{
    e[idx] = b, ne[idx] = h[a], h[a] = idx ++ ;
}

void tarjan(int u)
{
    dfn[u] = low[u] = ++ timestamp;
    stk[ ++ top] = u, in_stk[u] = true;
    for (int i = h[u]; i != -1; i = ne[i])
    {
        int j = e[i];
        if (!dfn[j])
        {
            tarjan(j);
            low[u] = min(low[u], low[j]);
        }
        else if (in_stk[j]) low[u] = min(low[u], dfn[j]);
    }

    if (dfn[u] == low[u])
    {
        ++ scc_cnt;
        int y;
        do {
            y = stk[top -- ];
            in_stk[y] = false;
            id[y] = scc_cnt;
            Size[scc_cnt] ++ ;
        } while (y != u);
    }
}

int main()
{
    scanf("%d%d", &n, &m);
    memset(h, -1, sizeof h);
    while (m -- )
    {
        int a, b;
        scanf("%d%d", &a, &b);
        add(a, b);
    }

    for (int i = 1; i <= n; i ++ )
        if (!dfn[i])
            tarjan(i);

    for (int i = 1; i <= n; i ++ )
        for (int j = h[i]; ~j; j = ne[j])
        {
            int k = e[j];
            int a = id[i], b = id[k];
            if (a != b) dout[a] ++ ;
        }

    int zeros = 0, sum = 0;
    for (int i = 1; i <= scc_cnt; i ++ )
        if (!dout[i])
        {
            zeros ++ ;
            sum += Size[i];
            if (zeros > 1)
            {
                sum = 0;
                break;
            }
        }

    printf("%d\n", sum);

    return 0;
}
```

一次 DFS 求有向图所有强连通分量，缩点后可以转化成 DAG 继续处理。

## 思路

该模板覆盖「Tarjan、强连通分量、SCC、缩点」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** Tarjan、强连通分量、SCC、缩点


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n + m)` | `O(n + m)` |

## 易错点

- dfn 是访问时间戳，low 是能回溯到的最小时间戳。
- 用栈维护当前搜索路径上的点，low == dfn 时弹栈得到一个强连通分量。
- 注意区分「在栈中」和「已经访问过」。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 有向图的强连通分量

| 题目 | 状态 |
| --- | --- |
| [AcWing 1174. 受欢迎的牛](../problems/graph/1541.md) | 未完成 |
| [AcWing 367. 学校网络](../problems/graph/1542.md) | 未完成 |
| [AcWing 1175. 最大半连通子图](../problems/graph/1543.md) | 未完成 |
| [AcWing 368. 银河](../problems/graph/1544.md) | 未完成 |

## 提交来源

- [AcWing 1174. 受欢迎的牛](https://www.acwing.com/activity/content/code/content/155842/) · yxc 相关代码
<!-- ALGORITHM_SUBMISSION_END -->
