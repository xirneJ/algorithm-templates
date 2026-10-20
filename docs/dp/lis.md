---
title: "最长上升子序列（LIS）"
description: "贪心 + 二分求最长上升子序列长度，tails 维护每个长度下的最小结尾。"
tags:
  - "LIS"
  - "最长上升子序列"
  - "二分"
  - "贪心"
---

# 最长上升子序列（LIS）

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
    int t;
    cin>>t;
    int i,j;
    while(t--)
    {
        int n;
        int res1=1;
        int res2=1;
        int arr[110]={0};
        int dp1[110]={0};
        int dp2[110]={0};
        cin>>n;
        for(i=0;i<n;i++)
        {
            cin>>arr[i];
            dp1[i]=1;
            dp2[i]=1;
        }
        for(i=0;i<n;i++)
        {
            for(j=0;j<i;j++)
            {
                if(arr[j]>arr[i])
                {
                    dp1[i]=max(dp1[i],dp1[j]+1);
                    res1=max(res1,dp1[i]);
                }
                if(arr[j]<arr[i])
                {
                    dp2[i]=max(dp2[i],dp2[j]+1);
                    res2=max(res2,dp2[i]);
                }
            }
        }

        cout<<max(res1,res2)<<endl;
    }
    return 0;
}
```


## 思路

该模板覆盖「LIS、最长上升子序列、二分、贪心」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** LIS、最长上升子序列、二分、贪心


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n log n)` | `O(n)` |

## 易错点

- tails 数组本身不是 LIS，只用来记录每个长度能达到的最小结尾。
- 严格上升用 lower_bound，非严格上升用 upper_bound。
- 需要输出方案时，额外记录每个位置的前驱再回溯。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 最长上升子序列模型

| 题目 | 状态 |
| --- | --- |
| [AcWing 1017. 怪盗基德的滑翔翼](../problems/dp/1259.md) | 已完成 |
| [AcWing 1014. 登山](../problems/dp/1260.md) | 已完成 |
| [AcWing 482. 合唱队形](../problems/dp/1261.md) | 已完成 |
| [AcWing 1012. 友好城市](../problems/dp/1262.md) | 已完成 |
| [AcWing 1016. 最大上升子序列和](../problems/dp/1263.md) | 已完成 |
| [AcWing 1010. 拦截导弹](../problems/dp/1264.md) | 已完成 |
| [AcWing 187. 导弹防御系统](../problems/dp/1265.md) | 已完成 |
| [AcWing 272. 最长公共上升子序列](../problems/dp/1266.md) | 已完成 |

## 提交来源

- [AcWing 1017. 怪盗基德的滑翔翼](https://www.acwing.com/activity/content/code/content/9903577/) · 我的提交
<!-- ALGORITHM_SUBMISSION_END -->
