---
title: "哈希表"
description: "算法分类：数据结构"
tags:
  - 算法模板
  - "数据结构"
---

# 哈希表

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct l
{
    struct l*next_node;
    int v;
}arry;
#define N 100010
arry*arr[N]={0};
int find(int p,int x)
{
    arry*now_node=arr[p];
    while(now_node!=NULL)
    {
        if(now_node->v==x)
        {
            return 1;
        }
        now_node=now_node->next_node;
    }
    return 0;
}
arry*get(int v)
{
    arry*new_node=malloc(sizeof(arry));
    new_node->next_node=NULL;
    new_node->v=v;
    return new_node;
}
void insert(int p,int x)
{
    if(arr[p]==NULL)
    {
        arr[p]=get(x);
    }
    else
    {
        arry*now_node=arr[p];
        while(now_node->next_node!=NULL)
        {
            now_node=now_node->next_node;
        }
        now_node->next_node=get(x);
    }
}
int main()
{
    int n=0;
    scanf("%d",&n);
    while(n--)
    {
        char str[10]={0};
        scanf("%s",str);
        if(strcmp(str,"I")==0)
        {
            int x,p;
            scanf("%d",&x);
            p=(x+1000000000)%100000;
            insert(p,x);

        }
        else if(strcmp(str,"Q")==0)
        {
            int x,p;
            scanf("%d",&x);
            p=(x+1000000000)%100000;
            if(find(p,x))
            {
                printf("Yes\n");
            }
            else
            {
                printf("No\n");
            }
        }
    }
    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** 哈希表

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 840. 模拟散列表](https://www.acwing.com/activity/content/problem/content/890/) | 已完成 |
| [AcWing 841. 字符串哈希](https://www.acwing.com/activity/content/problem/content/891/) | 未完成 |

## 提交来源

- [AcWing 840. 模拟散列表](https://www.acwing.com/activity/content/code/content/9854933/)
