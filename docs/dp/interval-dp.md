---
title: "区间 DP（环形石子合并）"
description: "枚举区间长度、起点和断点，把大区间拆成两个小区间合并，是区间 DP 的通用套路。"
tags:
  - "区间DP"
  - "石子合并"
  - "环形"
---

# 区间 DP（环形石子合并）

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 301
#define MAX 0x3f3f3f3f
int dp[N][N]={0};
int arr[N]={0};
int sum[N]={0};
int min(int a,int b)
{
    return a<b?a:b;
}
int main()
{
    int n=0;
    int i=0;
    int j=0;
    int k=0;
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    sum[0]=arr[0];
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            if(i==j)
            {
                dp[i][j]=0;
            }
            else
            {
                dp[i][j]=MAX;
            }
        }
    }
    for(i=1;i<n;i++)
    {
        sum[i]=sum[i-1]+arr[i];
    }
    for(k=2;k<=n;k++)
    {
        for(i=0;i<n&&i+k-1<n;i++)
        {
            for(j=i;j<i+k-1;j++)
            {
                if(i==0)
                {
                    dp[i][i+k-1]=min(dp[i][i+k-1],dp[i][j]+dp[j+1][i+k-1]+sum[i+k-1]);
                }
                else if(i>=1)
                {
                    dp[i][i+k-1]=min(dp[i][i+k-1],dp[i][j]+dp[j+1][i+k-1]+sum[i+k-1]-sum[i-1]);
                }
            }
        }
    }
    printf("%d",dp[0][n-1]);
    return 0;
}
```

枚举区间长度、起点和断点，把大区间拆成两个小区间合并，是区间 DP 的通用套路。

## 思路

该模板覆盖「区间DP、石子合并、环形」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 区间DP、石子合并、环形


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n³)` | `O(n²)` |

## 易错点

- 先枚举区间长度，再枚举起点，保证子区间已经算好。
- 环形问题常用「断环成链」：把数组复制一份接在后面。
- 求最大 / 最小值时初始化不同，注意 INF 的取值。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 区间DP

| 题目 | 状态 |
| --- | --- |
| [AcWing 282. 石子合并](https://www.acwing.com/activity/content/problem/content/1007/) | 已完成 |
| [AcWing 1068. 环形石子合并](https://www.acwing.com/activity/content/problem/content/1297/) | 已完成 |
| [AcWing 320. 能量项链](https://www.acwing.com/activity/content/problem/content/1298/) | 已完成 |
| [AcWing 479. 加分二叉树](https://www.acwing.com/activity/content/problem/content/1299/) | 已完成 |
| [AcWing 1069. 凸多边形的划分](https://www.acwing.com/activity/content/problem/content/1300/) | 未完成 |
| [AcWing 321. 棋盘分割](https://www.acwing.com/activity/content/problem/content/1301/) | 未完成 |

## 提交来源

- [AcWing 282. 石子合并](https://www.acwing.com/activity/content/code/content/9809361/)
- [AcWing 1068. 环形石子合并](https://www.acwing.com/activity/content/code/content/9919296/)
<!-- ALGORITHM_SUBMISSION_END -->
