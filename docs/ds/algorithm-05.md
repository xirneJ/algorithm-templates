---
title: "单调栈"
description: "算法分类：数据结构"
tags:
  - 算法模板
  - "数据结构"
---

# 单调栈

## 模板

```cpp
#include <iostream>
#include <algorithm>
#include <stack>
using namespace std;
#define N 100010
int arr[N]={0};
int main()
{
    stack <int>s;
    int n,i;
    cin>>n;
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    for(i=0;i<n;i++)
    {
        while(!s.empty()&&arr[i]<=s.top())
        {
            s.pop();
        }
        if(s.empty())
        {
            printf("-1 ");
        }
        else
        {
            printf("%d ",s.top());
        }
        s.push(arr[i]);
    }
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 单调栈

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 830. 单调栈](https://www.acwing.com/activity/content/problem/content/867/) | 已完成 |

## 提交来源

- [AcWing 830. 单调栈](https://www.acwing.com/activity/content/code/content/9841803/)
