---
title: "状态机 DP"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 状态机 DP

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
int arr[100010];
int dp[2][100010];
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,i;
        cin>>n;
        for(i=0;i<n;i++)
        {
            cin>>arr[i];
        }
        dp[1][0]=arr[0];
        for(i=1;i<n;i++)
        {
            dp[0][i]=max(dp[1][i-1],dp[0][i-1]);
            dp[1][i]=dp[0][i-1]+arr[i];
        }
        cout<<max(dp[0][n-1],dp[1][n-1])<<endl;
    }
    return 0;
}
```

本页按算法归档，收录 5 道相关题目。

**算法分组：** 状态机模型

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1049. 大盗阿福](../problems/dp/1287.md) | 已完成 |
| [AcWing 1057. 股票买卖 IV](../problems/dp/1288.md) | 未完成 |
| [AcWing 1058. 股票买卖 V](../problems/dp/1289.md) | 已完成 |
| [AcWing 1052. 设计密码](../problems/dp/1290.md) | 未完成 |
| [AcWing 1053. 修复DNA](../problems/dp/1291.md) | 未完成 |

## 提交来源

- [AcWing 1049. 大盗阿福](https://www.acwing.com/activity/content/code/content/9910891/) · 我的提交
