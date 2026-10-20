---
title: "负环"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 负环

## 模板

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 510, M = 5210;

int n, m1, m2;
int h[N], e[M], w[M], ne[M], idx;
int dist[N];
int q[N], cnt[N];
bool st[N];

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

bool spfa()
{
    memset(dist, 0, sizeof dist);
    memset(cnt, 0, sizeof cnt);
    memset(st, 0, sizeof st);

    int hh = 0, tt = 0;
    for (int i = 1; i <= n; i ++ )
    {
        q[tt ++ ] = i;
        st[i] = true;
    }

    while (hh != tt)
    {
        int t = q[hh ++ ];
        if (hh == N) hh = 0;
        st[t] = false;

        for (int i = h[t]; ~i; i = ne[i])
        {
            int j = e[i];
            if (dist[j] > dist[t] + w[i])
            {
                dist[j] = dist[t] + w[i];
                cnt[j] = cnt[t] + 1;
                if (cnt[j] >= n) return true;
                if (!st[j])
                {
                    q[tt ++ ] = j;
                    if (tt == N) tt = 0;
                    st[j] = true;
                }
            }
        }
    }

    return false;
}

int main()
{
    int T;
    scanf("%d", &T);
    while (T -- )
    {
        scanf("%d%d%d", &n, &m1, &m2);
        memset(h, -1, sizeof h);
        idx = 0;
        for (int i = 0; i < m1; i ++ )
        {
            int a, b, c;
            scanf("%d%d%d", &a, &b, &c);
            add(a, b, c), add(b, a, c);
        }
        for (int i = 0; i < m2; i ++ )
        {
            int a, b, c;
            scanf("%d%d%d", &a, &b, &c);
            add(a, b, -c);
        }

        if (spfa()) puts("YES");
        else puts("NO");
    }

    return 0;
}
```

本页按算法归档，收录 3 道相关题目。

**算法分组：** 负环

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 904. 虫洞](../problems/graph/1530.md) | 未完成 |
| [AcWing 361. 观光奶牛](../problems/graph/1531.md) | 未完成 |
| [AcWing 1165. 单词环](../problems/graph/1532.md) | 未完成 |

## 提交来源

- [AcWing 904. 虫洞](https://www.acwing.com/activity/content/code/content/152739/) · yxc 相关代码
