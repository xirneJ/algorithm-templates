---
title: "数字三角形模型"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 数字三角形模型

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int g[110][110];
        int dp[110][110];
        int i,j;
        int n,m;
        cin>>n>>m;
        for(i=0;i<n;i++)
        {
            for(j=0;j<m;j++)
            {
                cin>>g[i][j];
            }
        }
        dp[0][0]=g[0][0];
        for(i=1;i<n;i++)
        {
            dp[i][0]=dp[i-1][0]+g[i][0];
        }
        for(i=1;i<m;i++)
        {
            dp[0][i]=dp[0][i-1]+g[0][i];
        }
        for(i=1;i<n;i++)
        {
            for(j=1;j<m;j++)
            {
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])+g[i][j];
            }
        }
        cout<<dp[n-1][m-1]<<endl;
    }
    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 数字三角形模型

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1015. 摘花生](https://www.acwing.com/activity/content/problem/content/1256/) | 已完成 |
| [AcWing 1018. 最低通行费](https://www.acwing.com/activity/content/problem/content/1257/) | 已完成 |
| [AcWing 1027. 方格取数](https://www.acwing.com/activity/content/problem/content/1258/) | 已完成 |
| [AcWing 275. 传纸条](https://www.acwing.com/activity/content/problem/content/1286/) | 已完成 |

## 提交来源

- [AcWing 1015. 摘花生](https://www.acwing.com/activity/content/code/content/9903070/)
