---
title: "差分约束"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 差分约束

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

typedef long long LL;

const int N = 100010, M = 300010;

int n, m;
int h[N], e[M], w[M], ne[M], idx;
LL dist[N];
int q[N], cnt[N];
bool st[N];

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++;
}

bool spfa()
{
    int hh = 0, tt = 1;
    memset(dist, -0x3f, sizeof dist);
    dist[0] = 0;
    q[0] = 0;
    st[0] = true;

    while (hh != tt)
    {
        int t = q[ -- tt];
        st[t] = false;

        for (int i = h[t]; ~i; i = ne[i])
        {
            int j = e[i];
            if (dist[j] < dist[t] + w[i])
            {
                dist[j] = dist[t] + w[i];
                cnt[j] = cnt[t] + 1;
                if (cnt[j] >= n + 1) return false;
                if (!st[j])
                {
                    q[tt ++ ] = j;
                    st[j] = true;
                }
            }
        }
    }

    return true;
}

int main()
{
    scanf("%d%d", &n, &m);
    memset(h, -1, sizeof h);
    while (m -- )
    {
        int x, a, b;
        scanf("%d%d%d", &x, &a, &b);
        if (x == 1) add(b, a, 0), add(a, b, 0);
        else if (x == 2) add(a, b, 1);
        else if (x == 3) add(b, a, 0);
        else if (x == 4) add(b, a, 1);
        else add(a, b, 0);
    }

    for (int i = 1; i <= n; i ++ ) add(0, i, 1);

    if (!spfa()) puts("-1");
    else
    {
        LL res = 0;
        for (int i = 1; i <= n; i ++ ) res += dist[i];
        printf("%lld\n", res);
    }

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 差分约束

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1169. 糖果](../problems/graph/1533.md) | 未完成 |
| [AcWing 362. 区间](../problems/graph/1534.md) | 未完成 |
| [AcWing 1170. 排队布局](../problems/graph/1535.md) | 未完成 |
| [AcWing 393. 雇佣收银员](../problems/graph/1536.md) | 未完成 |

## 提交来源

- [AcWing 1169. 糖果](https://www.acwing.com/activity/content/code/content/153383/) · yxc 相关代码
