---
title: "组合计数"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 组合计数

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 100010, mod = 5000011;

int n, k;
int f[N], s[N];

int main()
{
    cin >> n >> k;

    f[0] = s[0] = 1;
    for (int i = 1; i <= n; i ++ )
    {
        f[i] = s[max(i - k - 1, 0)];
        s[i] = (s[i - 1] + f[i]) % mod;
    }

    cout << s[n] << endl;

    return 0;
}
```

本页按算法归档，收录 7 道相关题目。

**算法分组：** 组合计数

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1307. 牡牛和牝牛](../problems/math/1760.md) | 未完成 |
| [AcWing 1308. 方程的解](../problems/math/1761.md) | 未完成 |
| [AcWing 1309. 车的放置](../problems/math/1762.md) | 未完成 |
| [AcWing 1310. 数三角形](../problems/math/1771.md) | 未完成 |
| [AcWing 1312. 序列统计](../problems/math/1772.md) | 未完成 |
| [AcWing 1315. 网格](../problems/math/1773.md) | 未完成 |
| [AcWing 1316. 有趣的数列](../problems/math/1774.md) | 未完成 |

## 提交来源

- [AcWing 1307. 牡牛和牝牛](https://www.acwing.com/activity/content/code/content/188918/) · yxc 相关代码
