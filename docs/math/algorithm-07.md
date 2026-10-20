---
title: "分解质因数"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 分解质因数

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 1000010;

int primes[N], cnt;
bool st[N];

void init(int n)
{
    for (int i = 2; i <= n; i ++ )
    {
        if (!st[i]) primes[cnt ++ ] = i;
        for (int j = 0; primes[j] * i <= n; j ++ )
        {
            st[i * primes[j]] = true;
            if (i % primes[j] == 0) break;
        }
    }
}

int main()
{
    int n;
    cin >> n;
    init(n);

    for (int i = 0; i < cnt; i ++ )
    {
        int p = primes[i];
        int s = 0;
        for (int j = n; j; j /= p) s += j / p;
        printf("%d %d\n", p, s);
    }

    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 分解质因数

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 197. 阶乘分解](../problems/math/1733.md) | 未完成 |

## 提交来源

- [AcWing 197. 阶乘分解](https://www.acwing.com/activity/content/code/content/172909/) · yxc 相关代码
