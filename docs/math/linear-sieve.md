---
title: "线性筛素数"
description: "每个合数只被它的最小质因子筛掉一次，O(n) 求出 1..n 内的所有质数。"
tags:
  - "筛法"
  - "素数"
  - "欧拉筛"
  - "积性函数"
---

# 线性筛素数

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int is_prime(int num)
{
    int i=0;
    if(num<2)
    {
        return 0;
    }
    for(i=2;i<=num/i;i++)
    {
        if(num%i==0)
        {
            return 0;
        }
    }
    return 1;
}
int main()
{
    int n=0;
    scanf("%d",&n);
    int i=0;
    for(i=0;i<n;i++)
    {
        int num=0;
        scanf("%d",&num);
        if(is_prime(num))
        {
            printf("Yes\n");
        }
        else
        {
            printf("No\n");
        }
    }
    return 0;
}
```


## 思路

该模板覆盖「筛法、素数、欧拉筛、积性函数」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 筛法、素数、欧拉筛、积性函数


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n)` | `O(n)` |

## 易错点

- 内层循环中一旦 i % primes[j] == 0 就立即 break。
- 顺便可以在筛的过程中预处理欧拉函数、约数个数等积性函数。
- n 较大时用 bool / char 数组标记，节省内存。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 质数、筛质数

| 题目 | 状态 |
| --- | --- |
| [AcWing 866. 试除法判定质数](../problems/math/935.md) | 已完成 |
| [AcWing 867. 分解质因数](../problems/math/936.md) | 已完成 |
| [AcWing 868. 筛质数](../problems/math/937.md) | 已完成 |
| [AcWing 1292. 哥德巴赫猜想](../problems/math/1730.md) | 未完成 |
| [AcWing 1293. 夏洛克和他的女朋友](../problems/math/1731.md) | 未完成 |
| [AcWing 196. 质数距离](../problems/math/1732.md) | 未完成 |

## 提交来源

- [AcWing 866. 试除法判定质数](https://www.acwing.com/activity/content/code/content/9812653/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
