---
title: "快速排序"
description: "分治排序的经典写法，原地排序、常数小，是手写排序时的首选。"
tags:
  - "排序"
  - "分治"
  - "sort"
---

# 快速排序

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#define N 100010
void quick_sort(int*arr,int left,int right)
{
    if(left>=right)
    {
        return;
    }
    int x=arr[(right-left)/2+left];
    int i=left-1;
    int j=right+1;
    while(i<j)
    {
        do
        {
            i++;
        }while(arr[i]<x);
        do
        {
            j--;
        }while(arr[j]>x);
        if(i<j)
        {
            int num=arr[i];
            arr[i]=arr[j];
            arr[j]=num;
        }
    }
    quick_sort(arr,left,j);
    quick_sort(arr,j+1,right);
}
int main()
{
    int n=0;
    int arr[N]={0};
    scanf("%d",&n);
    int i=0;
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    quick_sort(arr,0,n-1);
    for(i=0;i<n;i++)
    {
        printf("%d ",arr[i]);
    }
    return 0;
}
```


## 思路

该模板覆盖「排序、分治、sort」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 排序、分治、sort


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n log n)` | `O(log n)` |

## 易错点

- 取中间元素作为基准，双指针从两端向中间扫描，能避免有序数据退化成 O(n²)。
- 循环结束后递归 [l, j] 和 [j + 1, r]，注意 j 可能被减到 l - 1。
- 重复元素很多时可以用三路划分进一步优化。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 快速排序

| 题目 | 状态 |
| --- | --- |
| [AcWing 785. 快速排序](../problems/sorting/819.md) | 已完成 |
| [AcWing 786. 第k个数](../problems/sorting/820.md) | 已完成 |

## 提交来源

- [AcWing 785. 快速排序](https://www.acwing.com/activity/content/code/content/9837724/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
