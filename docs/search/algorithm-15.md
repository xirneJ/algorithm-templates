---
title: "迭代加深"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# 迭代加深

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 110;

int n;
int path[N];

bool dfs(int u, int k)
{
    if (u == k) return path[u - 1] == n;

    bool st[N] = {0};
    for (int i = u - 1; i >= 0; i -- )
        for (int j = i; j >= 0; j -- )
        {
            int s = path[i] + path[j];
            if (s > n || s <= path[u - 1] || st[s]) continue;
            st[s] = true;
            path[u] = s;
            if (dfs(u + 1, k)) return true;
        }

    return false;
}

int main()
{
    path[0] = 1;
    while (cin >> n, n)
    {
        int k = 1;
        while (!dfs(1, k)) k ++ ;

        for (int i = 0; i < k; i ++ ) cout << path[i] << ' ';
        cout << endl;
    }

    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 迭代加深

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 170. 加成序列](../problems/search/1489.md) | 未完成 |

## 提交来源

- [AcWing 170. 加成序列](https://www.acwing.com/activity/content/code/content/136954/) · yxc 相关代码
