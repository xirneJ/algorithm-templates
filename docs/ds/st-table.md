---
title: "ST 表（RMQ）"
description: "静态区间最值查询：预处理倍增表，查询时用两段重叠区间拼出答案。"
tags:
  - "ST表"
  - "稀疏表"
  - "RMQ"
  - "区间最值"
---

# ST 表（RMQ）

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <cmath>

using namespace std;

const int N = 200010, M = 18;

int n, m;
int w[N];
int f[N][M];

void init()
{
    for (int j = 0; j < M; j ++ )
        for (int i = 1; i + (1 << j) - 1 <= n; i ++ )
            if (!j) f[i][j] = w[i];
            else f[i][j] = max(f[i][j - 1], f[i + (1 << j - 1)][j - 1]);
}

int query(int l, int r)
{
    int len = r - l + 1;
    int k = log(len) / log(2);

    return max(f[l][k], f[r - (1 << k) + 1][k]);
}

int main()
{
    scanf("%d", &n);
    for (int i = 1; i <= n; i ++ ) scanf("%d", &w[i]);

    init();

    scanf("%d", &m);
    while (m -- )
    {
        int l, r;
        scanf("%d%d", &l, &r);
        printf("%d\n", query(l, r));
    }

    return 0;
}
```

静态区间最值查询：预处理倍增表，查询时用两段重叠区间拼出答案。

## 思路

该模板覆盖「ST表、稀疏表、RMQ、区间最值」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** ST表、稀疏表、RMQ、区间最值


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n log n) 预处理，O(1) 查询` | `O(n log n)` |

## 易错点

- 只适用于数组不修改的静态问题。
- max、min、gcd 这类「可重复贡献」的运算才能用两段覆盖。
- LOG 取 ceil(log2(n))，1e5 的数据取 17 就够。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** RMQ

| 题目 | 状态 |
| --- | --- |
| [AcWing 1273. 天才的记忆](../problems/ds/1795.md) | 未完成 |

## 提交来源

- [AcWing 1273. 天才的记忆](https://www.acwing.com/activity/content/code/content/205231/) · yxc 相关代码
<!-- ALGORITHM_SUBMISSION_END -->
