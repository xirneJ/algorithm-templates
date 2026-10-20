---
title: "树与图的广度优先遍历"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# 树与图的广度优先遍历

## 模板

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#include <algorithm>
using namespace std;
#define N 100010
int ne[N];
int np[N];
int h[N];
int idx;
int dis[N];
void add(int a,int b)
{
    np[idx]=b;
    ne[idx]=h[a];
    h[a]=idx++;
}
int n,m;
void bfs(int u)
{
    int i;
    queue<int>s;
    s.push(1);
    while(s.size())
    {
        int u=s.front();
        s.pop();
        for(i=h[u];i!=-1;i=ne[i])
        {
            int p=np[i];
            if(dis[p]>dis[u]+1)
            {
                dis[p]=dis[u]+1;
                s.push(p);
            }
        }
    }
}
int main()
{
    memset(h,-1,sizeof(h));
    memset(dis,0x3f3f3f3f,sizeof(dis));
    dis[1]=0;
    cin>>n>>m;
    int i;
    for(i=0;i<m;i++)
    {
        int l,r;
        cin>>l>>r;
        add(l,r);
    }
    bfs(1);
    if(dis[n]==0x3f3f3f3f)
    {
        cout<<"-1"<<endl;
    }
    else
    {
        cout<<dis[n]<<endl;
    }
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 树与图的广度优先遍历

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 847. 图中点的层次](../problems/search/910.md) | 已完成 |

## 提交来源

- [AcWing 847. 图中点的层次](https://www.acwing.com/activity/content/code/content/9949479/) · 我的提交
