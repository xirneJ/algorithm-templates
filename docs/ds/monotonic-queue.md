---
title: "单调队列（滑动窗口最值）"
description: "用双端队列维护窗口内的单调序列，O(n) 求出每个滑动窗口的最值。"
tags:
  - "单调队列"
  - "滑动窗口"
  - "双端队列"
---

# 单调队列（滑动窗口最值）

## 模板

```cpp
#include <iostream>//t1找最小值，t2找最大值
#include <algorithm>
#include <queue>
using namespace std;
#define N 1000010
int arr[N]={0};
int t1[N]={0};
int t2[N]={0};
int main()
{
    int n,k;
    cin>>n>>k;
    int l1=0;
    int l2=0;
    int r1=-1;
    int r2=-1;
    int i=0;
    for(i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    for(i=0;i<n;i++)
    {
        if(i-t1[l1]>=k)
        {
            l1++;
        }
        while(l1<=r1&&arr[i]<=arr[t1[r1]])
        {
            r1--;
        }
        t1[++r1]=i;
        if(i>=k-1)
        {
            printf("%d ",arr[t1[l1]]);
        }
    }
    printf("\n");
    for(i=0;i<n;i++)
    {
        if(i-t2[l2]>=k)
        {
            l2++;
        }
        while(l2<=r2&&arr[i]>=arr[t2[r2]])
        {
            r2--;
        }
        t2[++r2]=i;
        if(i>=k-1)
        {
            printf("%d ",arr[t2[l2]]);
        }
    }
    return 0;
}
```

用双端队列维护窗口内的单调序列，O(n) 求出每个滑动窗口的最值。

## 思路

该模板覆盖「单调队列、滑动窗口、双端队列」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 单调队列、滑动窗口、双端队列


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n)` | `O(k)` |

## 易错点

- 队列里存下标而不是值，方便判断是否已经滑出窗口。
- 保证队列内对应值单调递减，队首就是当前窗口最大值。
- 窗口长度达到 k 之后再输出答案。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 单调队列

| 题目 | 状态 |
| --- | --- |
| [AcWing 154. 滑动窗口](https://www.acwing.com/activity/content/problem/content/868/) | 已完成 |

## 提交来源

- [AcWing 154. 滑动窗口](https://www.acwing.com/activity/content/code/content/9842770/)
<!-- ALGORITHM_SUBMISSION_END -->
