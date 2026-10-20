---
title: "匈牙利算法（二分图匹配）"
description: "逐个为左部点寻找增广路，求出二分图最大匹配。"
tags:
  - "二分图"
  - "最大匹配"
  - "匈牙利算法"
  - "增广路"
---

# 匈牙利算法（二分图匹配）

## 模板

```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
#define N 510
#define M 200010
int idx=0;
int ne[M]={0};
int np[M]={0};
int h[N]={0};
int st[N]={0};
int match[N]={0};
void add(int a,int b)
{
    np[idx]=b;
    ne[idx]=h[a];
    h[a]=idx++;
}
int find(int x)
{
    int i;
    for(i=h[x];i!=-1;i=ne[i])
    {
        int r=np[i];
        if(!st[r])
        {
            st[r]=1;
            if(match[r]==0||find(match[r]))
            {
                match[r]=x;
                return 1;
            }
        }
    }
    return 0;
}
int main()
{
    memset(h,-1,sizeof(h));
    int n1,n2,m;
    cin>>n1>>n2>>m;
    int i;
    for(i=0;i<m;i++)
    {
        int l,r;
        cin>>l>>r;
        add(l,r);
    }
    int res=0;
    for(i=1;i<=n1;i++)
    {
        memset(st,0,sizeof(st));
        if(find(i))
        {
            res++;
        }
    }
    cout<<res<<endl;
    return 0;
}
```


## 思路

该模板覆盖「二分图、最大匹配、匈牙利算法、增广路」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 二分图、最大匹配、匈牙利算法、增广路


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(nm)` | `O(n + m)` |

## 易错点

- vis 标记右部点，防止同一次增广中重复访问。
- 找到增广路后更新 match 并立即返回 true。
- 每个左部点开始增广前都要清空 vis。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 匈牙利算法

| 题目 | 状态 |
| --- | --- |
| [AcWing 861. 二分图的最大匹配](../problems/graph/927.md) | 已完成 |

## 提交来源

- [AcWing 861. 二分图的最大匹配](https://www.acwing.com/activity/content/code/content/9882848/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
