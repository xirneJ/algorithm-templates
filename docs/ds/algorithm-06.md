---
title: "堆"
description: "算法分类：数据结构"
tags:
  - 算法模板
  - "数据结构"
---

# 堆

## 模板

```cpp
#include <iostream>
#include <queue>
#include <algorithm>
using namespace std;
int cmp(int a,int b)
{
    return a>b;
}
int main()
{
    int n,m;
    cin>>n>>m;
    priority_queue<int,vector<int>,greater<int>>s;
    int i=0;
    for(i=0;i<n;i++)
    {
        int a;
        cin>>a;
        s.push(a);
    }
    while(m--)
    {
        cout<<s.top()<<" ";
        s.pop();
    }
    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** 堆

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 838. 堆排序](../problems/ds/888.md) | 已完成 |
| [AcWing 839. 模拟堆](../problems/ds/889.md) | 已完成 |

## 提交来源

- [AcWing 838. 堆排序](https://www.acwing.com/activity/content/code/content/9847136/) · 我的提交
