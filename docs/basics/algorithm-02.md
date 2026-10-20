---
title: "双指针算法"
description: "算法分类：基础算法"
tags:
  - 算法模板
  - "基础算法"
---

# 双指针算法

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#define N 100010
int arr[N]={0};
int count[N]={0};
int max(int a,int b)
{
    return a>b?a:b;
}
int main()
{
    int n=0;
    int i=0;
    int j=0;
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    int res=-1;
    for(i=0,j=0;i<n;i++)
    {
        count[arr[i]]++;
        while(count[arr[i]]>1)
        {
            count[arr[j]]--;
            j++;
        }
        res=max(res,i-j+1);
    }
    printf("%d",res);
    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** 双指针算法

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 799. 最长连续不重复子序列](https://www.acwing.com/activity/content/problem/content/833/) | 已完成 |
| [AcWing 800. 数组元素的目标和](https://www.acwing.com/activity/content/problem/content/834/) | 已完成 |
| [AcWing 2816. 判断子序列](https://www.acwing.com/activity/content/problem/content/2981/) | 已完成 |

## 提交来源

- [AcWing 799. 最长连续不重复子序列](https://www.acwing.com/activity/content/code/content/9838214/)
