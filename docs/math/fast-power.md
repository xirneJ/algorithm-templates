---
title: "快速幂"
description: "把指数按二进制拆分，O(log b) 计算 a^b mod m，是数论题的基础。"
tags:
  - "快速幂"
  - "取模"
  - "逆元"
---

# 快速幂

## 模板

```cpp
#include <stdio.h>
#include <stdlib.h>
typedef long long ll;
ll qmi(ll a,ll k,ll p)
{
    ll res=1;
    while(k)
    {
        if(k&1)
        {
            res=res*a%p;
        }
        k=k>>1;
        a=a*a%p;
    }
    return res;
}
int main()
{
    int n=0;
    scanf("%d",&n);
    while(n--)
    {
        ll a,k,p,res;
        scanf("%lld %lld %lld",&a,&k,&p);
        res=qmi(a,k,p);
        printf("%lld\n",res);
    }
    return 0;
}
```

把指数按二进制拆分，O(log b) 计算 a^b mod m，是数论题的基础。

## 思路

该模板覆盖「快速幂、取模、逆元」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 快速幂、取模、逆元


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(log b)` | `O(1)` |

## 易错点

- 指数从低位往高位扫，遇到 1 就把当前的底数乘进结果。
- 底数先进取模，防止乘法溢出。
- 模数为质数时，a^(mod-2) 就是 a 的逆元。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 快速幂

| 题目 | 状态 |
| --- | --- |
| [AcWing 875. 快速幂](https://www.acwing.com/activity/content/problem/content/944/) | 已完成 |
| [AcWing 876. 快速幂求逆元](https://www.acwing.com/activity/content/problem/content/945/) | 已完成 |
| [AcWing 1289. 序列的第k个数](https://www.acwing.com/activity/content/problem/content/1734/) | 未完成 |
| [AcWing 1290. 越狱](https://www.acwing.com/activity/content/problem/content/1735/) | 未完成 |

## 提交来源

- [AcWing 875. 快速幂](https://www.acwing.com/activity/content/code/content/9815507/)
<!-- ALGORITHM_SUBMISSION_END -->
