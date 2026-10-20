---
title: "整数二分"
description: "两种最常用的二分写法：查找第一个满足条件的位置，以及二分答案。"
tags:
  - "二分"
  - "查找"
  - "二分答案"
---

# 整数二分

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#define N 100010
int arr[N]={0};
int find_left(int*arr,int left,int right,int x)
{
    while(left<=right)
    {
        int mid=(right-left)/2+left;
        if(arr[mid]<x)
        {
            left=mid+1;
        }
        else if(arr[mid]>=x)
        {
            right=mid-1;
        }
    }
    return left;
}
int find_right(int*arr,int left,int right,int x)
{
    while(left<=right)
    {
        int mid=(right-left)/2+left;
        if(arr[mid]<=x)
        {
            left=mid+1;
        }
        else if(arr[mid]>x)
        {
            right=mid-1;
        }
    }
    return right;
}
int main()
{
    int n=0;
    int q=0;
    scanf("%d %d",&n,&q);
    int i=0;
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    while(q--)
    {
        int x=0;
        scanf("%d",&x);
        int l=find_left(arr,0,n-1,x);
        int r=find_right(arr,0,n-1,x);
        if(l<=r)
        {
            printf("%d %d\n",l,r);
        }
        else
        {
            printf("-1 -1\n");
        }
    }
    return 0;
}
```


## 思路

该模板覆盖「二分、查找、二分答案」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 二分、查找、二分答案


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(log n)` | `O(1)` |

## 易错点

- 区间统一用左闭右开 [l, r)，从 l = 0, r = n 开始，能少很多边界判断。
- 二分答案要求答案具有单调性；求最大的可行值可以反过来写 check。
- mid 写成 l + (r - l) / 2，避免 l + r 溢出。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 二分

| 题目 | 状态 |
| --- | --- |
| [AcWing 789. 数的范围](../problems/binary-search/823.md) | 已完成 |
| [AcWing 790. 数的三次方根](../problems/binary-search/824.md) | 已完成 |
| [AcWing 102. 最佳牛围栏](../problems/binary-search/1790.md) | 已完成 |
| [AcWing 113. 特殊排序](../problems/binary-search/1791.md) | 未完成 |

## 提交来源

- [AcWing 789. 数的范围](https://www.acwing.com/activity/content/code/content/9838761/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
