---
title: "位运算"
description: "算法分类：基础算法"
tags:
  - 算法模板
  - "基础算法"
---

# 位运算

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int n=0;
    scanf("%d",&n);
    while(n--)
    {
        int num=0;
        scanf("%d",&num);
        int count=0;
        while(num)
        {
            if(num&1)
            {
                count++;
            }
            num>>=1;
        }
        printf("%d ",count);
    }
    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** 位运算

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 801. 二进制中1的个数](../problems/basics/835.md) | 已完成 |
| [AcWing 90. 64位整数乘法](../problems/basics/1784.md) | 已完成 |

## 提交来源

- [AcWing 801. 二进制中1的个数](https://www.acwing.com/activity/content/code/content/9837840/) · 我的提交
