---
title: "组合数（阶乘逆元）"
description: "预处理阶乘和阶乘逆元，O(1) 查询 C(n, m)，要求模数为质数。"
tags:
  - "组合数"
  - "阶乘"
  - "逆元"
  - "MOD"
---

# 组合数（阶乘逆元）

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
int dp[2010][2010]={0};
int n=0;
void get()
{
    int i=0;
    int j=0;
    for(i=0;i<2010;i++)
    {
        for(j=0;j<=i;j++)
        {
            if(j==0)
            {
                dp[i][j]=1;
            }
            if(i==0)
            {
                dp[i][j]=1;
            }
            else
            {
                dp[i][j]=(dp[i-1][j-1]+dp[i-1][j])%1000000007;
            }
        }
    }
}
int main()
{
    scanf("%d",&n);
    get();
    while(n--)
    {
        int a=0;
        int b=0;
        scanf("%d %d",&a,&b);
        printf("%d\n",dp[a][b]);
    }
    return 0;
}
```


## 思路

该模板覆盖「组合数、阶乘、逆元、MOD」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 组合数、阶乘、逆元、MOD


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n) 预处理，O(1) 查询` | `O(n)` |

## 易错点

- 用费马小定理求逆元：inv_fac[n] = fac[n] ^ (MOD - 2)。
- 从大到小递推 inv_fac[i - 1] = inv_fac[i] * i。
- n 很大而 m 很小时，直接暴力乘 O(m) 也够用。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 求组合数

| 题目 | 状态 |
| --- | --- |
| [AcWing 885. 求组合数 I](../problems/math/955.md) | 已完成 |
| [AcWing 886. 求组合数 II](../problems/math/956.md) | 已完成 |
| [AcWing 887. 求组合数 III](../problems/math/957.md) | 已完成 |
| [AcWing 888. 求组合数 IV](../problems/math/958.md) | 已完成 |
| [AcWing 889. 满足条件的01序列](../problems/math/959.md) | 已完成 |

## 提交来源

- [AcWing 885. 求组合数 I](https://www.acwing.com/activity/content/code/content/9816007/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
