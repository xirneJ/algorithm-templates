---
title: "高斯消元"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 高斯消元

## 模板

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
#include <cmath>

using namespace std;

const int N = 110;
const double eps = 1e-8;

int n;
double a[N][N];

int gauss()  // 高斯消元，答案存于a[i][n]中，0 <= i < n
{
    int c, r;
    for (c = 0, r = 0; c < n; c ++ )
    {
        int t = r;
        for (int i = r; i < n; i ++ )  // 找绝对值最大的行
            if (fabs(a[i][c]) > fabs(a[t][c]))
                t = i;

        if (fabs(a[t][c]) < eps) continue;

        for (int i = c; i <= n; i ++ ) swap(a[t][i], a[r][i]);  // 将绝对值最大的行换到最顶端
        for (int i = n; i >= c; i -- ) a[r][i] /= a[r][c];  // 将当前行的首位变成1
        for (int i = r + 1; i < n; i ++ )  // 用当前行将下面所有的列消成0
            if (fabs(a[i][c]) > eps)
                for (int j = n; j >= c; j -- )
                    a[i][j] -= a[r][j] * a[i][c];

        r ++ ;
    }

    if (r < n)
    {
        for (int i = r; i < n; i ++ )
            if (fabs(a[i][n]) > eps)
                return 2; // 无解
        return 1; // 有无穷多组解
    }

    for (int i = n - 1; i >= 0; i -- )
        for (int j = i + 1; j < n; j ++ )
            a[i][n] -= a[i][j] * a[j][n];

    return 0; // 有唯一解
}

int main()
{
    scanf("%d", &n);
    for (int i = 0; i < n; i ++ )
        for (int j = 0; j < n + 1; j ++ )
            scanf("%lf", &a[i][j]);

    int t = gauss();
    if (t == 2) puts("No solution");
    else if (t == 1) puts("Infinite group solutions");
    else
    {
        for (int i = 0; i < n; i ++ )
            printf("%.2lf\n", a[i][n]);
    }

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 高斯消元

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 883. 高斯消元解线性方程组](../problems/math/953.md) | 未完成 |
| [AcWing 884. 高斯消元解异或线性方程组](../problems/math/954.md) | 未完成 |
| [AcWing 207. 球形空间产生器](../problems/math/1775.md) | 未完成 |
| [AcWing 208. 开关问题](../problems/math/1776.md) | 未完成 |

## 提交来源

- [AcWing 883. 高斯消元解线性方程组](https://www.acwing.com/activity/content/code/content/53389/) · yxc 相关代码
