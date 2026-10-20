---
title: "计数类 DP"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 计数类 DP

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#define N 1010
#define MAX 0x3f3f3f3f
typedef long long ll;
#define NU 1000000007
ll dp[N]={0};
ll max(ll a,ll b)
{
    return a>b?a:b;
}
int main()
{
    int n=0;
    scanf("%d",&n);
    ll i=0;
    ll j=0;
    dp[0]=1;
    for(i=1;i<=n;i++)
    {
        for(j=0;j<=n;j++)
        {
            if(j-i>=0)
            {
                dp[j]=(dp[j]+dp[j-i])%NU;
            }
        }
    }
    printf("%d\n",dp[n]);
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 计数类DP

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 900. 整数划分](https://www.acwing.com/activity/content/problem/content/1008/) | 已完成 |

## 提交来源

- [AcWing 900. 整数划分](https://www.acwing.com/activity/content/code/content/9807866/)
