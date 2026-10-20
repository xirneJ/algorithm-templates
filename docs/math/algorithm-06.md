---
title: "博弈论"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 博弈论

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int n=0;
    int res=0;
    scanf("%d",&n);
    while(n--)
    {
        int m=0;
        scanf("%d",&m);
        res=res^m;
    }
    if(res==0)
    {
        printf("No\n");
    }
    else
    {
        printf("Yes\n");
    }
    return 0;
}
```

本页按算法归档，收录 7 道相关题目。

**算法分组：** 博弈论

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 891. Nim游戏](../problems/math/961.md) | 已完成 |
| [AcWing 892. 台阶-Nim游戏](../problems/math/962.md) | 已完成 |
| [AcWing 893. 集合-Nim游戏](../problems/math/963.md) | 已完成 |
| [AcWing 894. 拆分-Nim游戏](../problems/math/964.md) | 已完成 |
| [AcWing 1319. 移棋子游戏](../problems/math/1781.md) | 未完成 |
| [AcWing 1321. 取石子](../problems/math/1782.md) | 未完成 |
| [AcWing 1322. 取石子游戏](../problems/math/1783.md) | 未完成 |

## 提交来源

- [AcWing 891. Nim游戏](https://www.acwing.com/activity/content/code/content/9819175/) · 我的提交
