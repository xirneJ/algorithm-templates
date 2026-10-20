---
title: "单调队列优化 DP"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 单调队列优化 DP

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
#define N 300010
int sum[N];
int team[N];
int arr[N];
int main()
{
    int n,m;
    cin>>n>>m;
    int i;
    for(i=1;i<=n;i++)
    {
        cin>>arr[i];
        sum[i]=sum[i-1]+arr[i];
    }
    int res=-2147483648;
    int left=0;
    int right=0;
    for(i=1;i<=n;i++)
    {
        while(team[left]<i-m)
        {
            left++;
        }
        res=max(res,sum[i]-sum[team[left]]);
        while(left<=right&&sum[team[right]]>sum[i])
        {
            right--;
        }
        team[++right]=i;
        // cout<<res<<' '<<sum[i]<<' '<<sum[team[left]]<<endl;
    }
    cout<<res<<endl;
    return 0;
}
```

本页按算法归档，收录 6 道相关题目。

**算法分组：** 单调队列优化DP

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 135. 最大子序和](https://www.acwing.com/activity/content/problem/content/1458/) | 已完成 |
| [AcWing 1087. 修剪草坪](https://www.acwing.com/activity/content/problem/content/1459/) | 已完成 |
| [AcWing 1088. 旅行问题](https://www.acwing.com/activity/content/problem/content/1460/) | 已完成 |
| [AcWing 1089. 烽火传递](https://www.acwing.com/activity/content/problem/content/1461/) | 已完成 |
| [AcWing 1090. 绿色通道](https://www.acwing.com/activity/content/problem/content/1462/) | 已完成 |
| [AcWing 1091. 理想的正方形](https://www.acwing.com/activity/content/problem/content/1463/) | 已完成 |

## 提交来源

- [AcWing 135. 最大子序和](https://www.acwing.com/activity/content/code/content/9964454/)
