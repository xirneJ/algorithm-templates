---
title: "Floyd 多源最短路"
description: "多源最短路，三层循环、代码极短，适合 n 只有几百的图。"
tags:
  - "最短路"
  - "Floyd"
  - "多源"
---

# Floyd 多源最短路

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
#define N 210
#define MAX 0x3f3f3f3f
int d[N][N]={0};
int main()
{
    int i,j,k,n,m,q;
    cin>>n>>m>>q;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            if(i==j)
            {
                d[i][j]=0;
            }
            else
            {
                d[i][j]=MAX;
            }
        }
    }
    while(m--)
    {
        int l,r,v;
        cin>>l>>r>>v;
        d[l][r]=min(d[l][r],v);
    }
    for(k=1;k<=n;k++)
    {
        for(i=1;i<=n;i++)
        {
            for(j=1;j<=n;j++)
            {
                d[i][j]=min(d[i][j],d[i][k]+d[k][j]);
            }
        }
    }
    while(q--)
    {
        int l,r;
        cin>>l>>r;
        if(d[l][r]>MAX/2)
        {
            printf("impossible\n");
        }
        else
        {
            cout<<d[l][r]<<endl;
        }
    }
    return 0;
}
```

多源最短路，三层循环、代码极短，适合 n 只有几百的图。

## 思路

该模板覆盖「最短路、Floyd、多源」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 最短路、Floyd、多源


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n³)` | `O(n²)` |

## 易错点

- 三层循环里 k 必须在最外层。
- k 的含义是「允许经过 1..k 号点中转」，本质是区间 DP。
- 初始化 d[i][i] = 0、无边为 INF，INF 不要太大以免相加溢出。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** Floyd、Floyd算法

| 题目 | 状态 |
| --- | --- |
| [AcWing 854. Floyd求最短路](https://www.acwing.com/activity/content/problem/content/923/) | 已完成 |
| [AcWing 1125. 牛的旅行](https://www.acwing.com/activity/content/problem/content/1507/) | 未完成 |
| [AcWing 343. 排序](https://www.acwing.com/activity/content/problem/content/1508/) | 未完成 |
| [AcWing 344. 观光之旅](https://www.acwing.com/activity/content/problem/content/1509/) | 未完成 |
| [AcWing 345. 牛站](https://www.acwing.com/activity/content/problem/content/1510/) | 未完成 |

## 提交来源

- [AcWing 854. Floyd求最短路](https://www.acwing.com/activity/content/code/content/9841766/)
<!-- ALGORITHM_SUBMISSION_END -->
