---
title: "归并排序"
description: "稳定排序，也可以顺手统计逆序对，是分治思想的代表。"
tags:
  - "排序"
  - "分治"
  - "逆序对"
  - "sort"
---

# 归并排序

## 模板

```cpp
#include <iostream>
#include <bits/stdc++.h>
#include <cstdlib>
using namespace std;
#define N 100010
void gb(int*arr,int left,int right)
{
    if(left>=right)
    {
        return;
    }
    int mid=(right-left)/2+left;
    gb(arr,left,mid);
    gb(arr,mid+1,right);
    int*temp=(int*)malloc(sizeof(int)*(right-left+1));
    int k=0;
    int i=left;
    int j=mid+1;
    while(i<=mid&&j<=right)
    {
        if(arr[i]<arr[j])
        {
            temp[k++]=arr[i++];
        }
        else
        {
            temp[k++]=arr[j++];
        }
    }
    while(i<=mid)
    {
        temp[k++]=arr[i++];
    }
    while(j<=right)
    {
        temp[k++]=arr[j++];
    }
    for(i=0;i<k;i++)
    {
        arr[left+i]=temp[i];
    }
    free(temp);
}
int main()
{
    int n=0;
    scanf("%d",&n);
    int i=0;
    int arr[N]={0};
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    gb(arr,0,n-1);
    for(i=0;i<n;i++)
    {
        printf("%d ",arr[i]);
    }
    return 0;
}
```


## 思路

该模板覆盖「排序、分治、逆序对、sort」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 排序、分治、逆序对、sort


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n log n)` | `O(n)` |

## 易错点

- 合并时先把两段有序数据放进 tmp，再整体写回原数组。
- 比较时用 a[i] <= a[j] 才能保证稳定性。
- 求逆序对时，在 a[i] > a[j] 的位置累加 mid - i + 1。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 归并排序

| 题目 | 状态 |
| --- | --- |
| [AcWing 787. 归并排序](../problems/sorting/821.md) | 已完成 |
| [AcWing 788. 逆序对的数量](../problems/sorting/822.md) | 未完成 |

## 提交来源

- [AcWing 787. 归并排序](https://www.acwing.com/activity/content/code/content/9839979/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
