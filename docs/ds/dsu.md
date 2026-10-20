---
title: "并查集"
description: "维护不相交集合，支持合并与连通性查询，路径压缩后几乎 O(1)。"
tags:
  - "并查集"
  - "DSU"
  - "连通性"
---

# 并查集

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
#define N 100010
int p[N]={0};
int find(int x)
{
    if(p[x]==x)
    {
        return x;
    }
    return p[x]=find(p[x]);
}
int main()
{
    int n,m;
    int i=0;
    cin>>n>>m;
    for(i=1;i<=n;i++)
    {
        p[i]=i;
    }
    while(m--)
    {
        char a[10]={0};
        cin>>a;
        if(a[0]=='M')
        {
            int a,b;
            cin>>a>>b;
            int pa=find(a);//注意这一段，不能p[a]=b，也不能pa=p[a],pb=p[b],p[pa]=pb;
            int pb=find(b);
            p[pa]=pb;
        }
        else if(a[0]=='Q')
        {
            int a,b;
            cin>>a>>b;
            int pa=find(a);
            int pb=find(b);
            if(pa==pb)
            {
                printf("Yes\n");
            }
            else
            {
                printf("No\n");
            }
        }
    }
    return 0;
}
```


## 思路

该模板覆盖「并查集、DSU、连通性」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 并查集、DSU、连通性


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `均摊 O(α(n))` | `O(n)` |

## 易错点

- 路径压缩 + 按大小合并，树高很小，递归不会爆栈。
- 需要维护集合大小时，把信息记在根节点上，合并时一起更新。
- 带权并查集可以在 find 回溯时顺带算出到根的距离。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 并查集

| 题目 | 状态 |
| --- | --- |
| [AcWing 836. 合并集合](../problems/ds/885.md) | 已完成 |
| [AcWing 837. 连通块中点的数量](../problems/ds/886.md) | 已完成 |
| [AcWing 240. 食物链](../problems/ds/887.md) | 已完成 |
| [AcWing 1250. 格子游戏](../problems/ds/1579.md) | 已完成 |
| [AcWing 1252. 搭配购买](../problems/ds/1580.md) | 已完成 |
| [AcWing 237. 程序自动分析](../problems/ds/1581.md) | 已完成 |
| [AcWing 239. 奇偶游戏](../problems/ds/1582.md) | 已完成 |
| [AcWing 238. 银河英雄传说](../problems/ds/1583.md) | 已完成 |

## 提交来源

- [AcWing 836. 合并集合](https://www.acwing.com/activity/content/code/content/9842807/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
