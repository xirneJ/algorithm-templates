---
title: "排序"
description: "算法分类：排序"
tags:
  - 算法模板
  - "排序"
---

# 排序

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <algorithm>

using namespace std;

typedef long long LL;

const int N = 100010;

int row[N], col[N], s[N], c[N];

LL work(int n, int a[])
{
    for (int i = 1; i <= n; i ++ ) s[i] = s[i - 1] + a[i];

    if (s[n] % n) return -1;

    int avg = s[n] / n;

    c[1] = 0;
    for (int i = 2; i <= n; i ++ ) c[i] = s[i - 1] - (i - 1) * avg;

    sort(c + 1, c + n + 1);
    LL res = 0;
    for (int i = 1; i <= n; i ++ ) res += abs(c[i] - c[(n + 1) / 2]);

    return res;
}

int main()
{
    int n, m, cnt;
    scanf("%d%d%d", &n, &m, &cnt);

    while (cnt -- )
    {
        int x, y;
        scanf("%d%d", &x, &y);
        row[x] ++, col[y] ++ ;
    }

    LL r = work(n, row);
    LL c = work(m, col);

    if (r != -1 && c != -1) printf("both %lld\n", r + c);
    else if (r != -1) printf("row %lld\n", r);
    else if (c != -1) printf("column %lld\n", c);
    else printf("impossible\n");

    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** 排序

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 105. 七夕祭](../problems/sorting/1792.md) | 未完成 |
| [AcWing 106. 动态中位数](../problems/sorting/1793.md) | 未完成 |
| [AcWing 107. 超快速排序](../problems/sorting/1794.md) | 未完成 |

## 提交来源

- [AcWing 105. 七夕祭](https://www.acwing.com/activity/content/code/content/205163/) · yxc 相关代码
