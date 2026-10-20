---
title: "倍增求 LCA"
description: "预处理每个点向上 2^k 级祖先，快速求树上两点的最近公共祖先。"
tags:
  - "LCA"
  - "最近公共祖先"
  - "倍增"
  - "树"
---

# 倍增求 LCA

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 40010, M = N * 2;

int n, m;
int h[N], e[M], ne[M], idx;
int depth[N], fa[N][16];
int q[N];

void add(int a, int b)
{
    e[idx] = b, ne[idx] = h[a], h[a] = idx ++ ;
}

void bfs(int root)
{
    memset(depth, 0x3f, sizeof depth);
    depth[0] = 0, depth[root] = 1;
    int hh = 0, tt = 0;
    q[0] = root;
    while (hh <= tt)
    {
        int t = q[hh ++ ];
        for (int i = h[t]; ~i; i = ne[i])
        {
            int j = e[i];
            if (depth[j] > depth[t] + 1)
            {
                depth[j] = depth[t] + 1;
                q[ ++ tt] = j;
                fa[j][0] = t;
                for (int k = 1; k <= 15; k ++ )
                    fa[j][k] = fa[fa[j][k - 1]][k - 1];
            }
        }
    }
}

int lca(int a, int b)
{
    if (depth[a] < depth[b]) swap(a, b);
    for (int k = 15; k >= 0; k -- )
        if (depth[fa[a][k]] >= depth[b])
            a = fa[a][k];
    if (a == b) return a;
    for (int k = 15; k >= 0; k -- )
        if (fa[a][k] != fa[b][k])
        {
            a = fa[a][k];
            b = fa[b][k];
        }
    return fa[a][0];
}

int main()
{
    scanf("%d", &n);
    int root = 0;
    memset(h, -1, sizeof h);

    for (int i = 0; i < n; i ++ )
    {
        int a, b;
        scanf("%d%d", &a, &b);
        if (b == -1) root = a;
        else add(a, b), add(b, a);
    }

    bfs(root);

    scanf("%d", &m);
    while (m -- )
    {
        int a, b;
        scanf("%d%d", &a, &b);
        int p = lca(a, b);
        if (p == a) puts("1");
        else if (p == b) puts("2");
        else puts("0");
    }

    return 0;
}
```

预处理每个点向上 2^k 级祖先，快速求树上两点的最近公共祖先。

## 思路

该模板覆盖「LCA、最近公共祖先、倍增、树」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** LCA、最近公共祖先、倍增、树


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n log n) 预处理，O(log n) 查询` | `O(n log n)` |

## 易错点

- 先 DFS 求出深度和 up[u][0]，再递推 up[u][j] = up[up[u][j-1]][j-1]。
- 查询时先把较深的点跳到与另一点同深度，再一起往上跳。
- 根节点的祖先记为 0，up 数组全局清零即可。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 最近公共祖先

| 题目 | 状态 |
| --- | --- |
| [AcWing 1172. 祖孙询问](../problems/graph/1537.md) | 未完成 |
| [AcWing 1171. 距离](../problems/graph/1538.md) | 未完成 |
| [AcWing 356. 次小生成树](../problems/graph/1539.md) | 未完成 |
| [AcWing 352. 闇の連鎖](../problems/graph/1540.md) | 未完成 |

## 提交来源

- [AcWing 1172. 祖孙询问](https://www.acwing.com/activity/content/code/content/154772/) · yxc 相关代码
<!-- ALGORITHM_SUBMISSION_END -->
