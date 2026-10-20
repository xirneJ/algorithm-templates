---
title: "高精度"
description: "算法分类：基础算法"
tags:
  - 算法模板
  - "基础算法"
---

# 高精度

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#define N 100010
char a[N]={0};//存储第一个字符串
char b[N]={0};//存储第二个字符串

int A[N]={0};//存储第一个字符串转化为数字的结果
int B[N]={0};//存储第二个字符串转化成数字的结果
int C[N]={0};//存储最终结果

int len1=0;//a(A)的长度
int len2=0;//b(B)的长度
int len3=0;//C的长度

void add()
{
    int res=0;
    int i=0;
    for(i=0;i<len1||i<len2;i++)
    {
        if(i<len1)
        {
            res+=A[i];
        }
        if(i<len2)
        {
            res+=B[i];
        }
        C[len3++]=res%10;
        res=res/10;
    }
    if(res>0)
    {
        C[len3++]=1;
    }
}
int main()
{
    scanf("%s %s",a,b);
    len1=strlen(a);
    len2=strlen(b);
    int i=0;
    for(i=0;i<len1;i++)
    {
        A[i]=a[len1-1-i]-'0';
    }
    for(i=0;i<len2;i++)
    {
        B[i]=b[len2-1-i]-'0';
    }
    add();
    for(i=len3-1;i>=0;i--)
    {
        printf("%d",C[i]);
    }
    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 高精度

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 791. 高精度加法](https://www.acwing.com/activity/content/problem/content/825/) | 已完成 |
| [AcWing 792. 高精度减法](https://www.acwing.com/activity/content/problem/content/826/) | 已完成 |
| [AcWing 793. 高精度乘法](https://www.acwing.com/activity/content/problem/content/827/) | 已完成 |
| [AcWing 794. 高精度除法](https://www.acwing.com/activity/content/problem/content/828/) | 已完成 |

## 提交来源

- [AcWing 791. 高精度加法](https://www.acwing.com/activity/content/code/content/9812829/)
