---
title: "栈"
description: "算法分类：数据结构"
tags:
  - 算法模板
  - "数据结构"
---

# 栈

## 模板

```cpp
#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n=0;
    stack <int>s;
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
            int num=s.empty();
            if(num==1)
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
            int num=s.top();
            cout<<num<<endl;
        }
    }
    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** 栈

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 828. 模拟栈](../problems/ds/865.md) | 已完成 |
| [AcWing 3302. 表达式求值](../problems/ds/3648.md) | 未完成 |

## 提交来源

- [AcWing 828. 模拟栈](https://www.acwing.com/activity/content/code/content/9840324/) · 我的提交
