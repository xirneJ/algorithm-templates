---
title: "离散化"
description: "把数值大但数量少的序列映射成 1..m 的排名，方便开数组、上树状数组。"
tags:
  - "离散化"
  - "排序"
  - "去重"
---

# 离散化

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#define N 100010
typedef struct l
{
    int p;
    int v;
}arry;
arry arr[N]={0};
int sum[N]={0};
int cmp(const void*e1,const void*e2)
{
    arry*a1=(arry*)e1;
    arry*a2=(arry*)e2;
    return a1->p-a2->p;
}
int find_left(arry*arr,int left,int right,int x)
{
    while(left<=right)
    {
        int mid=(right-left)/2+left;
        if(arr[mid].p<x)
        {
            left=mid+1;
        }
        else if(arr[mid].p>x)
        {
            right=mid-1;
        }
        else if(arr[mid].p==x)
        {
            return mid;
        }
    }
    return left;
}
int find_right(arry*arr,int left,int right,int x)
{
    while(left<=right)
    {
        int mid=(right-left)/2+left;
        if(arr[mid].p<x)
        {
            left=mid+1;
        }
        else if(arr[mid].p>x)
        {
            right=mid-1;
        }
        else if(arr[mid].p==x)
        {
            return mid;
        }
    }
    return right;
}
int main()
{
    int n,q;
    scanf("%d %d",&n,&q);
    int i=0;
    int j=-1;
    for(i=0;i<n;i++)
    {
        scanf("%d %d",&arr[i].p,&arr[i].v);
    }
    qsort(arr,n,sizeof(arry),cmp);
    for(i=0;i<n;i++)
    {
        if(j==-1||arr[i].p!=arr[j].p)
        {
            j++;
            arr[j]=arr[i];
        }
        else
        {
            arr[j].v+=arr[i].v;
        }
    }
    sum[0]=arr[0].v;
    for(i=1;i<=j;i++)
    {
        sum[i]=sum[i-1]+arr[i].v;
    }
    while(q--)
    {
        int l,r;
        scanf("%d %d",&l,&r);
        int res=sum[find_right(arr,0,j,r)];
        int p=find_left(arr,0,j,l);
        if(p>=1)
        {
            res-=sum[p-1];
        }
        printf("%d\n",res);
    }
    return 0;
}
```

把数值大但数量少的序列映射成 1..m 的排名，方便开数组、上树状数组。

## 思路

该模板覆盖「离散化、排序、去重」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 离散化、排序、去重


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n log n)` | `O(n)` |

## 易错点

- 先排序再去重，下标从 1 开始更符合树状数组的习惯。
- 相同数值必须映射到相同排名，所以一定要 unique 去重。
- 处理动态插入时，可以先把所有操作离线读入、一起离散化。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 离散化

| 题目 | 状态 |
| --- | --- |
| [AcWing 802. 区间和](https://www.acwing.com/activity/content/problem/content/836/) | 已完成 |

## 提交来源

- [AcWing 802. 区间和](https://www.acwing.com/activity/content/code/content/9838159/)
<!-- ALGORITHM_SUBMISSION_END -->
