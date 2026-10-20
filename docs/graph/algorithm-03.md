---
title: "Prim"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# Prim

## 模板

```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
#define MAX 0x3f3f3f3f
#define N 510
int g[N][N]={0};
int dis[N]={0};
int st[N]={0};
int n,m;
int prim()//prim的原理是找到一条连到该集合的最小的边，然后把该边加入集合
{
    memset(dis,MAX,sizeof(dis));
    int i,j;
    int res=0;
    for(i=0;i<n;i++)
    {
        int t=-1;
        for(j=1;j<=n;j++)
        {
            if(!st[j]&&(t==-1||dis[t]>dis[j]))
            {
                t=j;
            }
        }
        st[t]=1;
        if(i&&dis[t]==MAX)
        {
            return MAX;
        }
        if(i)
        {
            res+=dis[t];
        }
        for(j=1;j<=n;j++)
        {
            dis[j]=min(dis[j],g[t][j]);//这里是dis[j]=min(dis[j],g[t][j]),而不是dis[j]=min(dis[j],g[t][j]+dis[t])
                                       //是该点到集合的距离
        }
    }
    return res;
}
int main()
{
    memset(g,MAX,sizeof(g));
    cin>>n>>m;
    while(m--)
    {
        int l,r,c;
        cin>>l>>r>>c;
        g[l][r]=min(g[l][r],c);
        g[r][l]=g[l][r];
    }
    int res=prim();
    if(res==MAX)
    {
        cout<<"impossible"<<endl;
    }
    else
    {
        cout<<res<<endl;
    }
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** Prim

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 858. Prim算法求最小生成树](https://www.acwing.com/activity/content/problem/content/924/) | 已完成 |

## 提交来源

- [AcWing 858. Prim算法求最小生成树](https://www.acwing.com/activity/content/code/content/9882403/)
