---
title: "斜率优化 DP"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 斜率优化 DP

## 模板

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
#define N 5010
typedef long long ll;
int T[N];
int C[N];
ll dp[N];
int st[N];
int sc[N];
int main()
{
    memset(dp,0x3f3f3f3f,sizeof(dp));
    dp[0]=0;
    int n,s;
    cin>>n>>s;
    int i,j;
    for(i=1;i<=n;i++)
    {
        cin>>T[i]>>C[i];
        st[i]=st[i-1]+T[i];
        sc[i]=sc[i-1]+C[i];
    }
    for(i=1;i<=n;i++)
    {
        for(j=0;j<i;j++)
        {
            dp[i]=min(dp[i],dp[j]+(ll)(sc[i]-sc[j])*(ll)st[i]+(ll)s*(ll)(sc[n]-sc[j]));//当前任务的花费+s对后面任务的花费
        }
    }
    cout<<dp[n]<<endl;
    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 斜率优化DP

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 300. 任务安排1](../problems/dp/1464.md) | 已完成 |
| [AcWing 301. 任务安排2](../problems/dp/1465.md) | 未完成 |
| [AcWing 302. 任务安排3](../problems/dp/1466.md) | 未完成 |
| [AcWing 303. 运输小猫](../problems/dp/1467.md) | 未完成 |

## 提交来源

- [AcWing 300. 任务安排1](https://www.acwing.com/activity/content/code/content/9973629/) · 我的提交
