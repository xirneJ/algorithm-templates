---
title: "树形 DP（没有上司的舞会）"
description: "在树上做状态 DP，dp[u][0/1] 表示不选 / 选当前节点时，子树能取得的最优值。"
tags:
  - "树形DP"
  - "树"
  - "DP"
---

# 树形 DP（没有上司的舞会）

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 6010
int h[N]={0};
int np[N]={0};
int ne[N]={0};
int f[N]={0};
int idx=0;
int happy[N]={0};
int dp[N][2]={0};
void add(int a,int b)
{
    np[idx]=b;
    ne[idx]=h[a];
    h[a]=idx++;
}
int max(int a,int b)
{
    return a>b?a:b;
}
void dps(int u)
{
    dp[u][1]=happy[u];
    int i=0;
    int j=0;
    for(i=h[u];i!=-1;i=ne[i])
    {
        int son=np[i];
        dps(son);
        dp[u][1]+=dp[son][0];
        dp[u][0]+=max(dp[son][0],dp[son][1]);
    }
}
int main()
{
    int n=0;
    scanf("%d",&n);
    memset(h,-1,sizeof(h));
    int i=0;
    for(i=1;i<=n;i++)
    {
        scanf("%d",&happy[i]);
    }
    for(i=0;i<n-1;i++)
    {
        int s=0;
        int p=0;
        scanf("%d %d",&s,&p);
        add(p,s);
        f[s]=1;
    }
    int root=0;
    for(i=1;i<=n;i++)
    {
        if(f[i]==0)
        {
            root=i;
            break;
        }
    }
    dps(root);
    printf("%d",max(dp[root][1],dp[root][0]));
    return 0;
}
```

在树上做状态 DP，dp[u][0/1] 表示不选 / 选当前节点时，子树能取得的最优值。

## 思路

该模板覆盖「树形DP、树、DP」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 树形DP、树、DP


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n)` | `O(n)` |

## 易错点

- 先递归处理儿子，再把儿子的答案合并到父亲。
- 用 has_parent 标记找出根节点，从根开始 DFS。
- 邻接表存树，DFS 时传入父亲避免走回头路。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 树形DP

| 题目 | 状态 |
| --- | --- |
| [AcWing 285. 没有上司的舞会](https://www.acwing.com/activity/content/problem/content/1012/) | 已完成 |
| [AcWing 1072. 树的最长路径](https://www.acwing.com/activity/content/problem/content/1302/) | 已完成 |
| [AcWing 1073. 树的中心](https://www.acwing.com/activity/content/problem/content/1303/) | 已完成 |
| [AcWing 1075. 数字转换](https://www.acwing.com/activity/content/problem/content/1304/) | 已完成 |
| [AcWing 1074. 二叉苹果树](https://www.acwing.com/activity/content/problem/content/1305/) | 已完成 |
| [AcWing 323. 战略游戏](https://www.acwing.com/activity/content/problem/content/1306/) | 已完成 |
| [AcWing 1077. 皇宫看守](https://www.acwing.com/activity/content/problem/content/1307/) | 已完成 |

## 提交来源

- [AcWing 285. 没有上司的舞会](https://www.acwing.com/activity/content/code/content/9810807/)
- [AcWing 1072. 树的最长路径](https://www.acwing.com/activity/content/code/content/9959143/)
<!-- ALGORITHM_SUBMISSION_END -->
