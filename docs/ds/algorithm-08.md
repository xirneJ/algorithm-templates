---
title: "可持久化数据结构"
description: "算法分类：数据结构"
tags:
  - 算法模板
  - "数据结构"
---

# 可持久化数据结构

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 600010, M = N * 25;

int n, m;
int s[N];
int tr[M][2], max_id[M];
int root[N], idx;

void insert(int i, int k, int p, int q)
{
    if (k < 0)
    {
        max_id[q] = i;
        return;
    }
    int v = s[i] >> k & 1;
    if (p) tr[q][v ^ 1] = tr[p][v ^ 1];
    tr[q][v] = ++ idx;
    insert(i, k - 1, tr[p][v], tr[q][v]);
    max_id[q] = max(max_id[tr[q][0]], max_id[tr[q][1]]);
}

int query(int root, int C, int L)
{
    int p = root;
    for (int i = 23; i >= 0; i -- )
    {
        int v = C >> i & 1;
        if (max_id[tr[p][v ^ 1]] >= L) p = tr[p][v ^ 1];
        else p = tr[p][v];
    }

    return C ^ s[max_id[p]];
}

int main()
{
    scanf("%d%d", &n, &m);

    max_id[0] = -1;
    root[0] = ++ idx;
    insert(0, 23, 0, root[0]);

    for (int i = 1; i <= n; i ++ )
    {
        int x;
        scanf("%d", &x);
        s[i] = s[i - 1] ^ x;
        root[i] = ++ idx;
        insert(i, 23, root[i - 1], root[i]);
    }

    char op[2];
    int l, r, x;
    while (m -- )
    {
        scanf("%s", op);
        if (*op == 'A')
        {
            scanf("%d", &x);
            n ++ ;
            s[n] = s[n - 1] ^ x;
            root[n] = ++ idx;
            insert(n, 23, root[n - 1], root[n]);
        }
        else
        {
            scanf("%d%d%d", &l, &r, &x);
            printf("%d\n", query(root[r - 1], s[n] ^ x, l - 1));
        }
    }

    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** 可持久化数据结构

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 256. 最大异或和](../problems/ds/1717.md) | 未完成 |
| [AcWing 255. 第K小数](../problems/ds/1718.md) | 未完成 |

## 提交来源

- [AcWing 256. 最大异或和](https://www.acwing.com/activity/content/code/content/168518/) · yxc 相关代码
