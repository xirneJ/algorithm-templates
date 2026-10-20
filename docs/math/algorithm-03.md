---
title: "中国剩余定理"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 中国剩余定理

## 模板

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

typedef long long LL;

LL exgcd(LL a, LL b, LL &x, LL &y)
{
    if (!b)
    {
        x = 1, y = 0;
        return a;
    }

    LL d = exgcd(b, a % b, y, x);
    y -= a / b * x;
    return d;
}

int main()
{
    int n;
    cin >> n;

    LL x = 0, m1, a1;
    cin >> m1 >> a1;
    for (int i = 0; i < n - 1; i ++ )
    {
        LL m2, a2;
        cin >> m2 >> a2;
        LL k1, k2;
        LL d = exgcd(m1, m2, k1, k2);
        if ((a2 - a1) % d)
        {
            x = -1;
            break;
        }

        k1 *= (a2 - a1) / d;
        k1 = (k1 % (m2/d) + m2/d) % (m2/d);

        x = k1 * m1 + a1;

        LL m = abs(m1 / d * m2);
        a1 = k1 * m1 + a1;
        m1 = m;
    }

    if (x != -1) x = (a1 % m1 + m1) % m1;

    cout << x << endl;

    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 中国剩余定理

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 204. 表达整数的奇怪方式](../problems/math/948.md) | 未完成 |

## 提交来源

- [AcWing 204. 表达整数的奇怪方式](https://www.acwing.com/activity/content/code/content/53307/) · yxc 相关代码
