---
title: "递推与递归"
description: "算法分类：基础算法"
tags:
  - 算法模板
  - "基础算法"
---

# 递推与递归

## 模板

```cpp
#include <algorithm>
#include <iostream>
#include <cstring>
using namespace std;
char g[6][6];
char bg[6][6];
int nx[5]={1,-1,0,0,0};
int ny[5]={0,0,1,-1,0};
void turn(int x,int y)
{
    int i;
    for(i=0;i<5;i++)
    {
        int new_x=nx[i]+x;
        int new_y=ny[i]+y;
        if(new_x>=0&&new_x<5&&new_y>=0&&new_y<5)
        {
            g[new_x][new_y]=g[new_x][new_y]^1;
        }
    }
}
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int i,j,op;
        int res=100;
        for(i=0;i<5;i++)
        {
            cin>>bg[i];
        }
        for(op=0;op<(1<<5);op++)
        {
            memcpy(g,bg,sizeof(g));
            int cnt=0;
            for(i=0;i<5;i++)
            {
                if(op>>i&1)
                {
                    turn(0,i);
                    cnt++;
                }
            }
            for(i=0;i<4;i++)
            {
                for(j=0;j<5;j++)
                {
                    if(g[i][j]=='0')
                    {
                        turn(i+1,j);
                        cnt++;
                    }
                }
            }
            int st=1;
            for(i=0;i<5;i++)
            {
                if(g[4][i]=='0')
                {
                    st=0;
                }
            }
            if(st)
            {
                res=min(res,cnt);
            }
        }
        if(res>6)
        {
            cout<<"-1"<<endl;
        }
        else
        {
            cout<<res<<endl;
        }
    }
    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** 递推与递归

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 95. 费解的开关](../problems/basics/1785.md) | 已完成 |
| [AcWing 97. 约数之和](../problems/basics/1786.md) | 已完成 |
| [AcWing 98. 分形之城](../problems/basics/1787.md) | 未完成 |

## 提交来源

- [AcWing 95. 费解的开关](https://www.acwing.com/activity/content/code/content/9900045/) · 我的提交
