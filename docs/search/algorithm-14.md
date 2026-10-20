---
title: "DFS之剪枝与优化"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# DFS之剪枝与优化

## 模板

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
#include <string>
#define N 30
int cat[N]={0};
int res=20;
int n,m;
int sum[N]={0};
void dps(int u,int k)
{
    int i;
    if(k>=res)
    {
        return;
    }
    else if(u==n)
    {
        res=k;
        return;
    }
    for(i=0;i<k;i++)
    {
        if(sum[i]+cat[u]<=m)
        {
            sum[i]+=cat[u];
            dps(u+1,k);
            sum[i]-=cat[u];
        }
    }
    sum[k]=cat[u];
    dps(u+1,k+1);
    sum[k]=0;
}
int main()
{
    cin>>n>>m;
    int i;
    for(i=0;i<n;i++)
    {
        cin>>cat[i];
    }
    sort(cat,cat+n);
    reverse(cat,cat+n);
    dps(0,0);
    cout<<res<<endl;
    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** DFS之剪枝与优化

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 165. 小猫爬山](https://www.acwing.com/activity/content/problem/content/1485/) | 已完成 |
| [AcWing 166. 数独](https://www.acwing.com/activity/content/problem/content/1486/) | 未完成 |
| [AcWing 167. 木棒](https://www.acwing.com/activity/content/problem/content/1487/) | 未完成 |
| [AcWing 168. 生日蛋糕](https://www.acwing.com/activity/content/problem/content/1488/) | 未完成 |

## 提交来源

- [AcWing 165. 小猫爬山](https://www.acwing.com/activity/content/code/content/9864874/)
