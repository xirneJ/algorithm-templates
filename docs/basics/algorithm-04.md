---
title: "区间合并"
description: "算法分类：基础算法"
tags:
  - 算法模板
  - "基础算法"
---

# 区间合并

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#define N 100010
typedef struct l
{
    int l;
    int r;
}arry;
arry arr[N]={0};
int cmp(const void*e1,const void*e2)
{
    arry*a1=(arry*)e1;
    arry*a2=(arry*)e2;
    if(a1->l!=a2->l)
    {
        return a1->l-a2->l;
    }
    else
    {
        return a1->r-a2->r;
    }
}
int max(int a,int b)
{
    return a>b?a:b;
}
int main()
{
    int n=0;
    int i=0;
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        scanf("%d %d",&arr[i].l,&arr[i].r);
    }
    qsort(arr,n,sizeof(arry),cmp);
    int res=1;
    int x=arr[0].r;
    for(i=1;i<n;i++)
    {
        if(x<arr[i].l)
        {
            res++;
            x=arr[i].r;
        }
        else if(x>=arr[i].l)
        {
            x=max(x,arr[i].r);
        }
    }
    printf("%d\n",res);
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 区间合并

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 803. 区间合并](../problems/basics/837.md) | 已完成 |

## 提交来源

- [AcWing 803. 区间合并](https://www.acwing.com/activity/content/code/content/9838187/) · 我的提交
