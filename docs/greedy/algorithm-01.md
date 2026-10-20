---
title: "区间问题"
description: "算法分类：贪心"
tags:
  - 算法模板
  - "贪心"
---

# 区间问题

## 模板

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 100010;

int n;
struct Range
{
    int l, r;
    bool operator< (const Range &W)const
    {
        return r < W.r;
    }
}range[N];

int main()
{
    scanf("%d", &n);
    for (int i = 0; i < n; i ++ ) scanf("%d%d", &range[i].l, &range[i].r);

    sort(range, range + n);

    int res = 0, ed = -2e9;
    for (int i = 0; i < n; i ++ )
        if (range[i].l > ed)
        {
            res ++ ;
            ed = range[i].r;
        }

    printf("%d\n", res);

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 区间问题

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 905. 区间选点](../problems/greedy/1111.md) | 未完成 |
| [AcWing 908. 最大不相交区间数量](../problems/greedy/1112.md) | 未完成 |
| [AcWing 906. 区间分组](../problems/greedy/1113.md) | 未完成 |
| [AcWing 907. 区间覆盖](../problems/greedy/1114.md) | 未完成 |

## 提交来源

- [AcWing 905. 区间选点](https://www.acwing.com/activity/content/code/content/65062/) · yxc 相关代码
