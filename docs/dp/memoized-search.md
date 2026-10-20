---
title: "记忆化搜索"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 记忆化搜索

## 模板

```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
int n,m;
#define N 310
int f[N][N];
int arr[N][N];
int dp(int x,int y)
{
    int&v=f[x][y];
    if(v!=-1)
    {
        return v;
    }
    v=1;
    int nx[4]={1,-1,0,0};
    int ny[4]={0,0,1,-1};
    int i;
    for(i=0;i<4;i++)
    {
        int new_x=nx[i]+x;
        int new_y=ny[i]+y;
        if(new_x>=1&&new_x<=n&&new_y>=1&&new_y<=m&&arr[x][y]>arr[new_x][new_y])
        {
            v=max(v,dp(new_x,new_y)+1);
        }
    }
    return v;;
}
int main()
{
    memset(f,-1,sizeof(f));
    cin>>n>>m;
    int i,j;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=m;j++)
        {
            cin>>arr[i][j];
        }
    }
    int res=0;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=m;j++)
        {
            res=max(res,dp(i,j));
        }
    }
    cout<<res<<endl;
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 记忆化搜索

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 901. 滑雪](../problems/dp/1013.md) | 已完成 |

## 提交来源

- [AcWing 901. 滑雪](https://www.acwing.com/activity/content/code/content/9894846/) · 我的提交
