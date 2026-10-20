---
title: "染色法判定二分图"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 染色法判定二分图

## 模板

```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
#define N 100010
int ne[N*2];
int h[N];
int np[N*2];
int idx=0;
int n,m;
void add(int a,int b)
{
    np[idx]=b;
    ne[idx]=h[a];
    h[a]=idx++;
}
int color[N];
int dps(int u,int c)
{
    color[u]=c;
    int i;
    for(i=h[u];i!=-1;i=ne[i])
    {
        int r=np[i];
        if(!color[r])
        {
            if(!dps(r,3-c))
            {
                return 0;
            }
        }
        else if(color[r]==c)
        {
            return 0;
        }
    }
    return 1;
}
int main()
{
    memset(h,-1,sizeof(h));
    cin>>n>>m;
    int i;
    for(i=0;i<m;i++)
    {
        int l,r;
        cin>>l>>r;
        add(l,r);
        add(r,l);
    }
    for(i=1;i<=n;i++)
    {
        if(!color[i])
        {
            if(!dps(i,1))
            {
                printf("No\n");
                return 0;
            }
        }
    }
    printf("Yes\n");
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 染色法判定二分图

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 860. 染色法判定二分图](https://www.acwing.com/activity/content/problem/content/926/) | 已完成 |

## 提交来源

- [AcWing 860. 染色法判定二分图](https://www.acwing.com/activity/content/code/content/9882747/)
