---
title: "矩阵乘法"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 矩阵乘法

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

typedef long long LL;

const int N = 3;

int n, m;

void mul(int c[], int a[], int b[][N])
{
    int temp[N] = {0};
    for (int i = 0; i < N; i ++ )
        for (int j = 0; j < N; j ++ )
            temp[i] = (temp[i] + (LL)a[j] * b[j][i]) % m;

    memcpy(c, temp, sizeof temp);
}

void mul(int c[][N], int a[][N], int b[][N])
{
    int temp[N][N] = {0};
    for (int i = 0; i < N; i ++ )
        for (int j = 0; j < N; j ++ )
            for (int k = 0; k < N; k ++ )
                temp[i][j] = (temp[i][j] + (LL)a[i][k] * b[k][j]) % m;

    memcpy(c, temp, sizeof temp);
}

int main()
{
    cin >> n >> m;

    int f1[N] = {1, 1, 1};
    int a[N][N] = {
        {0, 1, 0},
        {1, 1, 1},
        {0, 0, 1}
    };

    n -- ;
    while (n)
    {
        if (n & 1) mul(f1, f1, a);  // res = res * a
        mul(a, a, a);  // a = a * a
        n >>= 1;
    }

    cout << f1[2] % m << endl;  // 当n = 1, m = 1时，余数应该是0，需要再对m取模

    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** 矩阵乘法

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1303. 斐波那契前 n 项和](../problems/math/1756.md) | 未完成 |
| [AcWing 1304. 佳佳的斐波那契](../problems/math/1757.md) | 未完成 |
| [AcWing 1305. GT考试](../problems/math/1758.md) | 未完成 |

## 提交来源

- [AcWing 1303. 斐波那契前 n 项和](https://www.acwing.com/activity/content/code/content/174930/) · yxc 相关代码
