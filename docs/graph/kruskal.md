---
title: "Kruskal 最小生成树"
description: "按边权从小到大加边，用并查集判环，适合稀疏图求最小生成树。"
tags:
  - "最小生成树"
  - "Kruskal"
  - "并查集"
---

# Kruskal 最小生成树

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
struct eadge
{
    int l,r,v;
};
int n,m;
eadge arr[200010];
int p[100010];
int find(int x)
{
    if(p[x]==x)
    {
        return x;
    }
    else
    {
        return p[x]=find(p[x]);
    }
}
int cmp(const void*e1,const void*e2)
{
    eadge*a1=(eadge*)e1;
    eadge*a2=(eadge*)e2;
    return (a1->v)-(a2->v);
}
int Kruskal()//从整张图出发选边，从最小的开始选，如果这两点不在集合中就加进去，在的话就找下一条边，最后如果点数没找完就代表找不到了，点都在一个集合中的话就代表能找到
{
    int i;
    int res=0;
    int cnt=0;
    for(i=0;i<m;i++)
    {
        int l=arr[i].l;
        int r=arr[i].r;
        int w=arr[i].v;
        int pl=find(l);
        int pr=find(r);
        if(pl!=pr)
        {
            res+=w;
            p[pl]=pr;
            cnt++;
        }
    }
    if(cnt<n-1)
    {
        return 0;
    }
    else
    {
        return res;
    }
}
int main()
{
    cin>>n>>m;
    int i;
    for(i=0;i<m;i++)
    {
        cin>>arr[i].l>>arr[i].r>>arr[i].v;
    }
    for(i=1;i<=n;i++)
    {
        p[i]=i;
    }
    qsort(arr,m,sizeof(eadge),cmp);
    int res=Kruskal();
    if(res)
    {
        cout<<res<<endl;
    }
    else
    {
        cout<<"impossible"<<endl;
    }
    return 0;
}
```


## 思路

该模板覆盖「最小生成树、Kruskal、并查集」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 最小生成树、Kruskal、并查集


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(m log m)` | `O(n + m)` |

## 易错点

- 先对所有边排序，再依次尝试合并两个端点。
- 成功加入 n - 1 条边就可以提前结束。
- 图不连通时不存在生成树，函数返回 -1。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** Kruskal

| 题目 | 状态 |
| --- | --- |
| [AcWing 859. Kruskal算法求最小生成树](../problems/graph/925.md) | 已完成 |

## 提交来源

- [AcWing 859. Kruskal算法求最小生成树](https://www.acwing.com/activity/content/code/content/9882506/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
