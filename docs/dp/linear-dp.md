---
title: "线性 DP"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 线性 DP

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
int dp[510][510];
int main()
{
    int n;
    cin>>n;
    int arr[510][510]={0};
    int i,j;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            cin>>arr[i][j];
        }
    }
    for(j=1;j<=n;j++)
    {
        dp[n][j]=arr[n][j];
    }
    for(i=n-1;i>=1;i--)
    {
        for(j=1;j<=i;j++)
        {
            dp[i][j]=max(dp[i+1][j],dp[i+1][j+1])+arr[i][j];
        }
    }
    cout<<dp[1][1]<<endl;
    return 0;
}
```

本页按算法归档，收录 6 道相关题目。

**算法分组：** 线性DP

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 898. 数字三角形](../problems/dp/1002.md) | 已完成 |
| [AcWing 895. 最长上升子序列](../problems/dp/1003.md) | 已完成 |
| [AcWing 896. 最长上升子序列 II](../problems/dp/1004.md) | 未完成 |
| [AcWing 897. 最长公共子序列](../problems/dp/1005.md) | 已完成 |
| [AcWing 902. 最短编辑距离](../problems/dp/1094.md) | 已完成 |
| [AcWing 899. 编辑距离](../problems/dp/1006.md) | 未完成 |

## 提交来源

- [AcWing 898. 数字三角形](https://www.acwing.com/activity/content/code/content/9889262/) · 我的提交
