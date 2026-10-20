---
title: "spfa"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# spfa

## 模板

```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
#include <queue>
using namespace std;
#define N 100010
#define MAX 0x3f3f3f3f
int ne[N];
int np[N];
int h[N];
int idx=0;
int w[N];
int n,m;
int dis[N];
int st[N];
void add(int a,int b,int c)
{
    np[idx]=b;
    w[idx]=c;
    ne[idx]=h[a];
    h[a]=idx++;
}
int spfa()
{
    memset(dis,0x3f3f3f3f,sizeof(dis));
    dis[1]=0;
    int i,j;
    queue<int>s;
    s.push(1);
    st[1]=1;
    while(s.size())
    {
        int t=s.front();
        s.pop();
        st[t]=0;
        for(i=h[t];i!=-1;i=ne[i])
        {
            int r=np[i];
            if(dis[r]>dis[t]+w[i])
            {
                dis[r]=dis[t]+w[i];
                if(!st[r])
                {
                    st[r]=1;
                    s.push(r);
                }
            }
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
    memset(h,-1,sizeof(h));
    cin>>n>>m;
    int i;
    for(i=0;i<m;i++)
    {
        int a,b,c;
        cin>>a>>b>>c;
        add(a,b,c);
    }
    int res=spfa();
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

本页按算法归档，收录 2 道相关题目。

**算法分组：** spfa

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 851. spfa求最短路](../problems/graph/920.md) | 已完成 |
| [AcWing 852. spfa判断负环](../problems/graph/921.md) | 已完成 |

## 提交来源

- [AcWing 851. spfa求最短路](https://www.acwing.com/activity/content/code/content/9884648/) · 我的提交
