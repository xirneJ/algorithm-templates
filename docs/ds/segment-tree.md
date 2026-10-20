---
title: "线段树（区间加 / 区间和）"
description: "最通用的区间数据结构，带 lazy 标记后区间加、区间和都是 O(log n)。"
tags:
  - "线段树"
  - "lazy"
  - "区间修改"
---

# 线段树（区间加 / 区间和）

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
#include <string>
#define N 200010
struct node
{
    int l;
    int r;
    int v;
}tree[4*N];
int n=0;
typedef long long ll;
void pushup(int u)
{
    tree[u].v=max(tree[u*2].v,tree[u*2+1].v);
}
int query(int u,int l,int r)
{
    if(tree[u].l>=l&&tree[u].r<=r)
    {
        return tree[u].v;
    }
    int mid=(tree[u].l+tree[u].r)/2;
    int v=0;
    if(l<=mid)
    {
        v=query(u*2,l,r);
    }
    if(r>mid)
    {
        v=max(v,query(u*2+1,l,r));
    }
    return v;
}
void build(int u,int l,int r)
{
    tree[u].l=l;
    tree[u].r=r;
    if(l==r)
    {
        return;
    }
    int mid=(l+r)/2;
    build(u*2,l,mid);
    build(u*2+1,mid+1,r);
}
void modify(int u,int x,int v)
{
    if(tree[u].l==x&&tree[u].r==x)
    {
        tree[u].v=v;
        return;
    }
    else
    {
        int mid=(tree[u].l+tree[u].r)/2;
        if(x<=mid)
        {
            modify(u*2,x,v);
        }
        else if(x>mid)
        {
            modify(u*2+1,x,v);
        }
        pushup(u);
    }
}
int main()
{
    int m,p;
    cin>>m>>p;
    string str;
    int a=0;
    build(1,1,m);
    while(m--)
    {
        cin>>str;
        if(str[0]=='Q')
        {
            int l;
            cin>>l;
            a=query(1,n-l+1,n);
            cout<<a<<endl;
        }
        else if(str[0]=='A')
        {
            int num=0;
            cin>>num;
            modify(1,n+1,((ll)a+num)%p);
            n++;
        }
    }
    return 0;
}
```


## 思路

该模板覆盖「线段树、lazy、区间修改」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 线段树、lazy、区间修改


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(log n)` | `O(n)` |

## 易错点

- 数组要开 4n；build / push_up / push_down 一个都不能少。
- 区间修改先打 lazy 标记，查询或继续下探前记得 push_down。
- 区间和可能超过 int，tree、lazy 都用 long long。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 线段树

| 题目 | 状态 |
| --- | --- |
| [AcWing 1275. 最大数](../problems/ds/1607.md) | 已完成 |
| [AcWing 245. 你能回答这些问题吗](../problems/ds/1608.md) | 已完成 |
| [AcWing 246. 区间最大公约数](../problems/ds/1609.md) | 已完成 |
| [AcWing 243. 一个简单的整数问题2](../problems/ds/1610.md) | 已完成 |
| [AcWing 247. 亚特兰蒂斯](../problems/ds/1611.md) | 未完成 |
| [AcWing 1277. 维护序列](../problems/ds/1612.md) | 已完成 |

## 提交来源

- [AcWing 1275. 最大数](https://www.acwing.com/activity/content/code/content/9870512/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
