---
title: "同余"
description: "算法分类：数学"
tags:
  - 算法模板
  - "数学"
---

# 同余

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

typedef long long LL;

int exgcd(int a, int b, int &x, int &y)
{
    if (!b)
    {
        x = 1, y = 0;
        return a;
    }

    int d = exgcd(b, a % b, y, x);
    y -= a / b * x;

    return d;
}

int main()
{
    int a, b;
    cin >> a >> b;

    int x, y;
    exgcd(a, b, x, y);

    cout << (x % b + (LL)b) % b << endl;  // 注意这一步的中间结果可能超出int范围，需要强制转换成long long

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 同余

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 203. 同余方程](../problems/math/1752.md) | 未完成 |
| [AcWing 222. 青蛙的约会](../problems/math/1753.md) | 未完成 |
| [AcWing 202. 最幸运的数字](../problems/math/1754.md) | 未完成 |
| [AcWing 1298. 曹冲养猪](../problems/math/1755.md) | 未完成 |

## 提交来源

- [AcWing 203. 同余方程](https://www.acwing.com/activity/content/code/content/174843/) · yxc 相关代码
