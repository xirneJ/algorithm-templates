---
title: "背包问题"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 背包问题

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
typedef long long ll;
#define N 1010
int dp[N];
struct arry
{
    int v;
    int valu;
}arr[N];
int main()
{
    int n,V;
    cin>>n>>V;
    int i,j;
    for(i=0;i<n;i++)
    {
        cin>>arr[i].v;
        cin>>arr[i].valu;
    }
    for(i=0;i<n;i++)
    {
        for(j=V;j>=arr[i].v;j--)
        {
            dp[j]=max(dp[j],dp[j-arr[i].v]+arr[i].valu);
        }
    }
    cout<<dp[V]<<endl;
    return 0;
}
```

本页按算法归档，收录 24 道相关题目。

**算法分组：** 背包问题、背包模型

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 2. 01背包问题](https://www.acwing.com/activity/content/problem/content/997/) | 已完成 |
| [AcWing 3. 完全背包问题](https://www.acwing.com/activity/content/problem/content/998/) | 已完成 |
| [AcWing 4. 多重背包问题 I](https://www.acwing.com/activity/content/problem/content/999/) | 已完成 |
| [AcWing 5. 多重背包问题 II](https://www.acwing.com/activity/content/problem/content/1000/) | 已完成 |
| [AcWing 9. 分组背包问题](https://www.acwing.com/activity/content/problem/content/1001/) | 已完成 |
| [AcWing 423. 采药](https://www.acwing.com/activity/content/problem/content/1267/) | 已完成 |
| [AcWing 1024. 装箱问题](https://www.acwing.com/activity/content/problem/content/1268/) | 已完成 |
| [AcWing 1022. 宠物小精灵之收服](https://www.acwing.com/activity/content/problem/content/1269/) | 已完成 |
| [AcWing 278. 数字组合](https://www.acwing.com/activity/content/problem/content/1270/) | 已完成 |
| [AcWing 1023. 买书](https://www.acwing.com/activity/content/problem/content/1271/) | 已完成 |
| [AcWing 1021. 货币系统](https://www.acwing.com/activity/content/problem/content/1272/) | 已完成 |
| [AcWing 532. 货币系统](https://www.acwing.com/activity/content/problem/content/1273/) | 已完成 |
| [AcWing 6. 多重背包问题 III](https://www.acwing.com/activity/content/problem/content/1274/) | 未完成 |
| [AcWing 1019. 庆功会](https://www.acwing.com/activity/content/problem/content/1275/) | 已完成 |
| [AcWing 7. 混合背包问题](https://www.acwing.com/activity/content/problem/content/1276/) | 已完成 |
| [AcWing 8. 二维费用的背包问题](https://www.acwing.com/activity/content/problem/content/1277/) | 已完成 |
| [AcWing 1020. 潜水员](https://www.acwing.com/activity/content/problem/content/1278/) | 已完成 |
| [AcWing 1013. 机器分配](https://www.acwing.com/activity/content/problem/content/1279/) | 已完成 |
| [AcWing 426. 开心的金明](https://www.acwing.com/activity/content/problem/content/1280/) | 已完成 |
| [AcWing 10. 有依赖的背包问题](https://www.acwing.com/activity/content/problem/content/1281/) | 已完成 |
| [AcWing 11. 背包问题求方案数](https://www.acwing.com/activity/content/problem/content/1282/) | 已完成 |
| [AcWing 12. 背包问题求具体方案](https://www.acwing.com/activity/content/problem/content/1283/) | 已完成 |
| [AcWing 734. 能量石](https://www.acwing.com/activity/content/problem/content/1284/) | 已完成 |
| [AcWing 487. 金明的预算方案](https://www.acwing.com/activity/content/problem/content/1285/) | 已完成 |

## 提交来源

- [AcWing 2. 01背包问题](https://www.acwing.com/activity/content/code/content/9886502/)
- [AcWing 423. 采药](https://www.acwing.com/activity/content/code/content/9905702/)
