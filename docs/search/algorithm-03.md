---
title: "树与图的深度优先遍历"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# 树与图的深度优先遍历

## 模板

```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
#define N 100010
int ne[N*2]={0};
int h[N]={0};
int np[N*2]={0};
int st[N]={0};
int idx=0;
void add(int a,int b)
{
    np[idx]=b;
    ne[idx]=h[a];
    h[a]=idx++;
}
int res=0x3f3f3f3f;
int n;
int get_sum(int u)
{
    st[u]=1;
    int sum=1;
    int i=0;
    int s=0;
    for(i=h[u];i!=-1;i=ne[i])
    {
        int r=np[i];
        if(!st[r])
        {
            int m=get_sum(r);
            s=max(s,m);
            sum+=m;
        }
    }
    s=max(s,n-sum);
    res=min(res,s);
    return sum;
}
int main()
{
    memset(h,-1,sizeof(h));
    cin>>n;
    int i;
    for(i=0;i<n;i++)
    {
        int l,r;
        cin>>l>>r;
        add(l,r);
        add(r,l);
    }
    int sum=get_sum(1);
    cout<<res<<endl;
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 树与图的深度优先遍历

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 846. 树的重心](https://www.acwing.com/activity/content/problem/content/909/) | 已完成 |

## 提交来源

- [AcWing 846. 树的重心](https://www.acwing.com/activity/content/code/content/9864763/)
