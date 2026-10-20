---
title: "队列"
description: "算法分类：数据结构"
tags:
  - 算法模板
  - "数据结构"
---

# 队列

## 模板

```cpp
#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main()
{
    int n=0;
    queue <int>s;
    cin>>n;
    while(n--)
    {
        char arr[10]={0};
        scanf("%s",arr);
        if(strcmp(arr,"push")==0)
        {
            int num=0;
            cin>>num;
            s.push(num);
        }
        else if(strcmp(arr,"pop")==0)
        {
            s.pop();
        }
        else if(strcmp(arr,"empty")==0)
        {
            if(s.empty())
            {
                cout<<"YES"<<endl;
            }
            else
            {
                cout<<"NO"<<endl;
            }
        }
        else if(strcmp(arr,"query")==0)
        {
            int num=s.front();
            cout<<num<<endl;
        }
    }
    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 队列

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 829. 模拟队列](../problems/ds/866.md) | 已完成 |

## 提交来源

- [AcWing 829. 模拟队列](https://www.acwing.com/activity/content/code/content/9840391/) · 我的提交
