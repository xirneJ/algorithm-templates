---
title: "拓扑排序"
description: "对有向无环图求拓扑序，同时可以用来判断图中是否存在环。"
tags:
  - "拓扑排序"
  - "DAG"
  - "判环"
---

# 拓扑排序

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 100010
int ne[N]={0};
int np[N]={0};
int h[N]={0};
int idx=0;
void add(int a,int b)
{
    np[idx]=b;
    ne[idx]=h[a];
    h[a]=idx++;
}
int team[N]={0};
int sym[N]={0};
int count[N]={0};
int n=0;
int m=0;
int left=0;
int right=-1;
int tp()
{
    int i=0;
    for(i=1;i<=n;i++)
    {
        if(count[i]==0)
        {
            team[++right]=i;
        }
    }
    while(left<=right)
    {
        int l=team[left];
        for(i=h[l];i!=-1;i=ne[i])
        {
            int r=np[i];
            count[r]--;
            if(count[r]==0)
            {
                team[++right]=r;
            }
        }
        left++;
    }
    if(right==n-1)
    {
        return 1;
    }
    else
    {
        return -1;
    }
}
int main()
{
    scanf("%d %d",&n,&m);
    memset(h,-1,sizeof(int)*(n+1));
    int i=0;
    for(i=0;i<m;i++)
    {
        int l=0;
        int r=0;
        scanf("%d %d",&l,&r);
        add(l,r);
        count[r]++;
    }
    int res=tp();
    if(res==1)
    {
        for(i=0;i<=right;i++)
    {
        printf("%d ",team[i]);
    }
    }
    else
    {
        printf("-1");
    }
    return 0;
}
```

对有向无环图求拓扑序，同时可以用来判断图中是否存在环。

## 思路

该模板覆盖「拓扑排序、DAG、判环」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 拓扑排序、DAG、判环


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n + m)` | `O(n)` |

## 易错点

- 把所有入度为 0 的点入队，BFS 过程中不断删去出边。
- 输出点数小于 n 说明存在环。
- 需要字典序最小的拓扑序时，把队列换成小根堆。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 拓扑排序

| 题目 | 状态 |
| --- | --- |
| [AcWing 848. 有向图的拓扑序列](https://www.acwing.com/activity/content/problem/content/911/) | 已完成 |
| [AcWing 1191. 家谱树](https://www.acwing.com/activity/content/problem/content/1575/) | 未完成 |
| [AcWing 1192. 奖金](https://www.acwing.com/activity/content/problem/content/1576/) | 未完成 |
| [AcWing 164. 可达性统计](https://www.acwing.com/activity/content/problem/content/1577/) | 未完成 |
| [AcWing 456. 车站分级](https://www.acwing.com/activity/content/problem/content/1578/) | 未完成 |

## 提交来源

- [AcWing 848. 有向图的拓扑序列](https://www.acwing.com/activity/content/code/content/9809492/)
<!-- ALGORITHM_SUBMISSION_END -->
