---
title: "DFS"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# DFS

## 模板

```cpp
#include <iostream>
#include <stack>
using namespace std;
int arr[10]={0};
int st[10]={0};
int len=0;
void dps(int deep,int n)
{
    int i;
    if(deep==n)
    {
        for(i=0;i<deep;i++)
        {
            printf("%d ",arr[i]);
        }
        printf("\n");
        return;
    }
    for(i=1;i<=n;i++)
    {
        if(!st[i])
        {
            st[i]=1;
            arr[len++]=i;
            dps(deep+1,n);
            len--;
            st[i]=0;
        }
    }
}
int main()
{
    int n;
    cin>>n;
    dps(0,n);
    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** DFS

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 842. 排列数字](../problems/search/905.md) | 已完成 |
| [AcWing 843. n-皇后问题](../problems/search/906.md) | 已完成 |

## 提交来源

- [AcWing 842. 排列数字](https://www.acwing.com/activity/content/code/content/9864641/) · 我的提交
