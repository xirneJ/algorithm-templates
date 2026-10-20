---
title: "扩展欧几里得"
description: "求 ax + by = gcd(a, b) 的一组整数解，也用来求模逆元和解线性同余方程。"
tags:
  - "exgcd"
  - "逆元"
  - "同余方程"
---

# 扩展欧几里得

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
int mgcd(int a,int b,int*x,int*y)
{
    if(b==0)
    {
        (*x)=1;
        (*y)=0;
        return a;
    }
    else
    {
        int d=mgcd(b,a%b,y,x);
        (*y)=(*y)-(a/b*(*x));
        return d;
    }
}
int main()
{
    int n=0;
    scanf("%d",&n);
    while(n--)
    {
        int a,b;
        int x=0;
        int y=0;
        scanf("%d %d",&a,&b);
        mgcd(a,b,&x,&y);
        printf("%d %d\n",x,y);
    }
    return 0;
}
```

求 ax + by = gcd(a, b) 的一组整数解，也用来求模逆元和解线性同余方程。

## 思路

该模板覆盖「exgcd、逆元、同余方程」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** exgcd、逆元、同余方程


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(log min(a, b))` | `O(log min(a, b))` |

## 易错点

- 递归边界 b = 0 时，x = 1, y = 0。
- 回溯时执行 y -= a / b * x。
- 求逆元要求 gcd(a, m) = 1，结果要归一到 [0, m)。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 扩展欧几里得算法

| 题目 | 状态 |
| --- | --- |
| [AcWing 877. 扩展欧几里得算法](https://www.acwing.com/activity/content/problem/content/946/) | 已完成 |
| [AcWing 878. 线性同余方程](https://www.acwing.com/activity/content/problem/content/947/) | 未完成 |

## 提交来源

- [AcWing 877. 扩展欧几里得算法](https://www.acwing.com/activity/content/code/content/9815627/)
<!-- ALGORITHM_SUBMISSION_END -->
