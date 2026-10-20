---
title: "容斥原理"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 容斥原理

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
typedef long long ll;
int main()
{
    int n,m;
    scanf("%d %d",&n,&m);
    int p[20]={0};
    int i=0;
    int j=0;
    for(i=0;i<m;i++)
    {
        scanf("%d",&p[i]);
    }
    ll res=0;
    for(i=1;i<1<<m;i++)
    {
        ll t=1;
        ll count=0;
        for(j=0;j<m;j++)
        {
            if(i>>j&1)
            {
                count++;
                if(t*p[j]>n)
                {
                    t=-1;
                    break;
                }
                t=t*p[j];
            }
        }
        if(t!=-1)
        {
            if(count%2==1)
            {
                res=res+n/t;
            }
            else if(count%2==0)
            {
                res=res-n/t;
            }
        }
    }
    printf("%lld\n",res);
    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** 容斥原理

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 890. 能被整除的数](https://www.acwing.com/activity/content/problem/content/960/) | 已完成 |
| [AcWing 214. Devu和鲜花](https://www.acwing.com/activity/content/problem/content/1777/) | 未完成 |
| [AcWing 215. 破译密码](https://www.acwing.com/activity/content/problem/content/1778/) | 未完成 |

## 提交来源

- [AcWing 890. 能被整除的数](https://www.acwing.com/activity/content/code/content/9819107/)
