---
title: "约数"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 约数

## 模板

```cpp
//这个是朴素算法的求约数算法
#include <stdio.h>
#include <stdlib.h>
int cmp(const void*e1,const void*e2)
{
    int*a1=(int*)e1;
    int*a2=(int*)e2;
    return (*a1)-(*a2);
}
int main()
{
    int n=0;
    int i=0;
    int j=0;
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        int num=0;
        int len=0;
        scanf("%d",&num);
        int arr[10000]={0};
        for(j=1;j<=num/j;j++)
        {
            if(num%j==0)
            {
                arr[len++]=j;
                if(num/j!=j)
                {
                    arr[len++]=num/j;
                }
            }
        }
        qsort(arr,len,sizeof(int),cmp);
        for(j=0;j<len;j++)
        {
            printf("%d ",arr[j]);
        }
        printf("\n");
    }
    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 约数

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 869. 试除法求约数](https://www.acwing.com/activity/content/problem/content/938/) | 已完成 |
| [AcWing 870. 约数个数](https://www.acwing.com/activity/content/problem/content/939/) | 已完成 |
| [AcWing 871. 约数之和](https://www.acwing.com/activity/content/problem/content/940/) | 已完成 |
| [AcWing 872. 最大公约数](https://www.acwing.com/activity/content/problem/content/941/) | 已完成 |

## 提交来源

- [AcWing 869. 试除法求约数](https://www.acwing.com/activity/content/code/content/9812736/)
