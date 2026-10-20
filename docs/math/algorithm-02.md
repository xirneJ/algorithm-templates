---
title: "欧拉函数"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 欧拉函数

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int n=0;
    scanf("%d",&n);
    int num=0;
    while(n--)
    {
        scanf("%d",&num);
        int res=num;
        int i=0;
        for(i=2;i<=num/i;i++)
        {
            if(num%i==0)
            {
                res=res/i*(i-1);
            }
            while(num%i==0)
            {
                num/=i;
            }
        }
        if(num>1)
        {
            res=res/num*(num-1);
        }
        printf("%d\n",res);
    }
    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 欧拉函数

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 873. 欧拉函数](../problems/math/942.md) | 已完成 |
| [AcWing 874. 筛法求欧拉函数](../problems/math/943.md) | 已完成 |
| [AcWing 201. 可见的点](../problems/math/1742.md) | 未完成 |
| [AcWing 220. 最大公约数](../problems/math/1743.md) | 未完成 |

## 提交来源

- [AcWing 873. 欧拉函数](https://www.acwing.com/activity/content/code/content/9815514/) · 我的提交
