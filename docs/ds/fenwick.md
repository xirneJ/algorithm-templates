---
title: "树状数组"
description: "支持单点修改、前缀查询，代码短、常数小，也能扩展成区间修改。"
tags:
  - "树状数组"
  - "BIT"
  - "前缀和"
---

# 树状数组

## 模板

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
#define N 200010
typedef long long ll;
int a[N]={0};
int tree[N]={0};//记录<=i的树出现的次数
int Greater[N]={0};//记录这个数前面比这个数大的数
int Lower[N]={0};//记录这个数前面比这个数小的数
int n;
int lowbit(int x)
{
    return x&(-x);
}
void add(int x,int d)
{
    int i;
    for(i=x;i<=n;i+=lowbit(i))
    {
        tree[i]+=d;
    }
}
int sum(int x)
{
    int i;
    ll res=0;
    for(i=x;i;i-=lowbit(i))
    {
        res+=tree[i];
    }
    return res;
}
int main()
{
    cin>>n;
    int i;
    for(i=1;i<=n;i++)
    {
        cin>>a[i];
    }
    for(i=1;i<=n;i++)
    {
        int y=a[i];
        Greater[i]=sum(n)-sum(y);
        Lower[i]=sum(y-1);
        add(y,1);
    }
    ll res1=0;
    ll res2=0;
    memset(tree,0,sizeof(tree));
    for(i=n;i>=1;i--)
    {
        int y=a[i];
        res1=res1+Greater[i]*(ll)(sum(n)-sum(y));
        res2=res2+Lower[i]*(ll)sum(y-1);
        add(y,1);
    }
    printf("%lld %lld",res1,res2);
    return 0;
}
```

支持单点修改、前缀查询，代码短、常数小，也能扩展成区间修改。

## 思路

该模板覆盖「树状数组、BIT、前缀和」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** 树状数组、BIT、前缀和


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(log n)` | `O(n)` |

## 易错点

- lowbit(i) = i & -i，树状数组下标一定从 1 开始。
- 区间和 = sum(r) - sum(l - 1)，sum(0) 自然返回 0。
- 区间加、单点查：对差分数组建树状数组即可。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 树状数组

| 题目 | 状态 |
| --- | --- |
| [AcWing 241. 楼兰图腾](https://www.acwing.com/activity/content/problem/content/1592/) | 已完成 |
| [AcWing 242. 一个简单的整数问题](https://www.acwing.com/activity/content/problem/content/1593/) | 已完成 |
| [AcWing 243. 一个简单的整数问题2](https://www.acwing.com/activity/content/problem/content/1594/) | 已完成 |
| [AcWing 244. 谜一样的牛](https://www.acwing.com/activity/content/problem/content/1595/) | 已完成 |

## 提交来源

- [AcWing 241. 楼兰图腾](https://www.acwing.com/activity/content/code/content/9880935/)
<!-- ALGORITHM_SUBMISSION_END -->
