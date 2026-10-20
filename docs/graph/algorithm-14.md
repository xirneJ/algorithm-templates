---
title: "欧拉回路和欧拉路径"
description: "算法分类：图论"
tags:
  - 算法模板
  - "图论"
---

# 欧拉回路和欧拉路径

## 模板

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>
#include <cmath>

using namespace std;

int main()
{
    double x1, y1, x2, y2;
    cin >> x1 >> y1;

    double sum = 0;
    while (cin >> x1 >> y1 >> x2 >> y2)
    {
        double dx = x1 - x2;
        double dy = y1 - y2;
        sum += sqrt(dx * dx + dy * dy) * 2;
    }

    int minutes = round(sum / 1000 / 20 * 60);
    int hours = minutes / 60;
    minutes %= 60;

    printf("%d:%02d\n", hours, minutes);

    return 0;
}
```

本页按算法归档，收录 4 道相关题目。

**算法分组：** 欧拉回路和欧拉路径

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 1123. 铲雪车](../problems/graph/1562.md) | 未完成 |
| [AcWing 1184. 欧拉回路](../problems/graph/1563.md) | 未完成 |
| [AcWing 1124. 骑马修栅栏](../problems/graph/1564.md) | 未完成 |
| [AcWing 1185. 单词游戏](../problems/graph/1565.md) | 未完成 |

## 提交来源

- [AcWing 1123. 铲雪车](https://www.acwing.com/activity/content/code/content/159766/) · yxc 相关代码
