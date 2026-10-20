---
title: "bellman-ford"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# bellman-ford

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
#include <cstring>
#define N 510
#define M 10010
#define MAX 0x3f3f3f3f
struct eadge
{
    int l,r,w;
}eadges[M]={0};
int dis[N]={0};
int backup[N]={0};
int n,m,k;
int bellman()//通过松绑来求得最短路
{
    memset(dis,MAX,sizeof(dis));
    dis[1]=0;
    int i,j;
    for(i=0;i<k;i++)
    {
        memcpy(backup,dis,sizeof(dis));//用上一次的结果来求，防止左脚踩右脚升天
        for(j=0;j<m;j++)
        {
            int l=eadges[j].l;
            int r=eadges[j].r;
            int w=eadges[j].w;
            dis[r]=min(dis[r],backup[l]+w);
        }
    }
    if(dis[n]>=MAX/2)
    {
        return -10;
    }
    else
    {
        return dis[n];
    }
}
int main()
{
    cin>>n>>m>>k;
    int i;
    for(i=0;i<m;i++)
    {
        int l,r,w;
        cin>>l>>r>>w;
        eadges[i]={l,r,w};
    }
    int res=bellman();
    if(res==-10)
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

**算法分组：** bellman-ford

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 853. 有边数限制的最短路](../problems/graph/922.md) | 已完成 |

## 提交来源

- [AcWing 853. 有边数限制的最短路](https://www.acwing.com/activity/content/code/content/9883613/) · 我的提交
