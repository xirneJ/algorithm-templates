---
title: "前缀和与差分"
description: "前缀和把区间查询降到 O(1)，差分把区间修改降到 O(1)，两者互为逆运算。"
tags:
  - "前缀和"
  - "差分"
  - "二维"
---

# 前缀和与差分

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#define N 100010
int main()
{
    int n=0;
    int i=0;
    int q=0;
    int arr[N]={0};
    scanf("%d %d",&n,&q);
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    int sum[N]={0};
    sum[0]=arr[0];
    for(i=1;i<n;i++)
    {
        sum[i]=sum[i-1]+arr[i];
    }
    while(q--)
    {
        int l,r;
        scanf("%d %d",&l,&r);
        l--;
        r--;
        int res=sum[r];
        if(l>=1)
        {
            res-=sum[l-1];
        }
        printf("%d\n",res);
    }
    return 0;
}
```

前缀和把区间查询降到 O(1)，差分把区间修改降到 O(1)，两者互为逆运算。

## 思路

该模板覆盖「前缀和、差分、二维」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 前缀和、差分、二维


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `预处理 O(n)，查询/修改 O(1)` | `O(n)` |

## 易错点

- 前缀和数组从 1 开始、s[0] = 0，可以省掉一堆越界判断。
- 区间加 c：d[l] += c, d[r + 1] -= c，最后从头做一次前缀和还原。
- 二维前缀和用容斥计算，注意多减掉的左上角要加回来。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 前缀和与差分

| 题目 | 状态 |
| --- | --- |
| [AcWing 795. 前缀和](https://www.acwing.com/activity/content/problem/content/829/) | 已完成 |
| [AcWing 796. 子矩阵的和](https://www.acwing.com/activity/content/problem/content/830/) | 已完成 |
| [AcWing 797. 差分](https://www.acwing.com/activity/content/problem/content/831/) | 已完成 |
| [AcWing 798. 差分矩阵](https://www.acwing.com/activity/content/problem/content/832/) | 已完成 |
| [AcWing 99. 激光炸弹](https://www.acwing.com/activity/content/problem/content/1788/) | 已完成 |
| [AcWing 100. 增减序列](https://www.acwing.com/activity/content/problem/content/1789/) | 已完成 |

## 提交来源

- [AcWing 795. 前缀和](https://www.acwing.com/activity/content/code/content/9837745/)
- [AcWing 99. 激光炸弹](https://www.acwing.com/activity/content/code/content/9902689/)
<!-- ALGORITHM_SUBMISSION_END -->
