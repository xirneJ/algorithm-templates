---
title: "状态压缩 DP"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 状态压缩 DP

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef long long ll;
int main()
{
    int n=0;
    int m=0;
    int i=0;
    int j=0;
    int k=0;
    while(scanf("%d %d",&n,&m)&&(n||m))
    {
        ll dp[15][3000]={0};
        int sym[3000]={0};
        for(i=0;i<(1<<n);i++)
        {
            int count=0;
            sym[i]=1;
            for(j=0;j<n;j++)
            {
                if(i>>j&1)
                {
                    if(count&1)
                    {
                        sym[i]=0;
                    }
                    count=0;
                }
                else
                {
                    count++;
                }
            }
            if(count&1)
            {
                sym[i]=0;
            }
        }
        dp[0][0]=1;
        for(i=1;i<=m;i++)
        {
            for(j=0;j<(1<<n);j++)
            {
                for(k=0;k<(1<<n);k++)
                {
                    if((j&k)==0&&sym[j|k])
                    {
                        dp[i][j]+=dp[i-1][k];
                    }
                }
            }
        }
        printf("%lld\n",dp[m][0]);
    }
    return 0;
}
```

本页按算法归档，收录 7 道相关题目。

**算法分组：** 状态压缩DP

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 291. 蒙德里安的梦想](https://www.acwing.com/activity/content/problem/content/1010/) | 已完成 |
| [AcWing 91. 最短Hamilton路径](https://www.acwing.com/activity/content/problem/content/1011/) | 已完成 |
| [AcWing 1064. 小国王](https://www.acwing.com/activity/content/problem/content/1292/) | 已完成 |
| [AcWing 327. 玉米田](https://www.acwing.com/activity/content/problem/content/1293/) | 已完成 |
| [AcWing 292. 炮兵阵地](https://www.acwing.com/activity/content/problem/content/1294/) | 已完成 |
| [AcWing 524. 愤怒的小鸟](https://www.acwing.com/activity/content/problem/content/1295/) | 已完成 |
| [AcWing 529. 宝藏](https://www.acwing.com/activity/content/problem/content/1296/) | 未完成 |

## 提交来源

- [AcWing 291. 蒙德里安的梦想](https://www.acwing.com/activity/content/code/content/9810491/)
- [AcWing 1064. 小国王](https://www.acwing.com/activity/content/code/content/9914003/)
