---
title: "KMP 字符串匹配"
description: "线性时间字符串匹配：用 next 数组记录最长相等前后缀，失配时快速跳转。"
tags:
  - "KMP"
  - "字符串匹配"
  - "next数组"
---

# KMP 字符串匹配

## 模板

```cpp
#include <iostream>

using namespace std;

const int N = 100010, M = 1000010;

int n, m;
int ne[N];
char s[M], p[N];

int main()
{
    cin >> n >> p + 1 >> m >> s + 1;

    for (int i = 2, j = 0; i <= n; i ++ )
    {
        while (j && p[i] != p[j + 1]) j = ne[j];
        if (p[i] == p[j + 1]) j ++ ;
        ne[i] = j;
    }

    for (int i = 1, j = 0; i <= m; i ++ )
    {
        while (j && s[i] != p[j + 1]) j = ne[j];
        if (s[i] == p[j + 1]) j ++ ;
        if (j == n)
        {
            printf("%d ", i - n);
            j = ne[j];
        }
    }

    return 0;
}

下标从0开始的写法（不推荐）
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 1000010;

int n, m;
char s[N], p[N];
int ne[N];

int main()
{
    cin >> m >> p >> n >> s;

    ne[0] = -1;
    for (int i = 1, j = -1; i < m; i ++ )
    {
        while (j >= 0 && p[j + 1] != p[i]) j = ne[j];
        if (p[j + 1] == p[i]) j ++ ;
        ne[i] = j;
    }

    for (int i = 0, j = -1; i < n; i ++ )
    {
        while (j != -1 && s[i] != p[j + 1]) j = ne[j];
        if (s[i] == p[j + 1]) j ++ ;
        if (j == m - 1)
        {
            cout << i - j << ' ';
            j = ne[j];
        }
    }

    return 0;
}
```

线性时间字符串匹配：用 next 数组记录最长相等前后缀，失配时快速跳转。

## 思路

该模板覆盖「KMP、字符串匹配、next数组」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** KMP、字符串匹配、next数组


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n + m)` | `O(m)` |

## 易错点

- next[i] 表示 p[0..i] 的最长相等前后缀长度。
- 失配时跳 next[j - 1]，不要每次回到 0 重来。
- 匹配成功后令 j = next[j - 1]，可以继续找重叠的出现位置。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** KMP

| 题目 | 状态 |
| --- | --- |
| [AcWing 831. KMP字符串](../problems/string/869.md) | 未完成 |

## 提交来源

- [AcWing 831. KMP字符串](https://www.acwing.com/activity/content/code/content/43108/) · yxc 相关代码
<!-- ALGORITHM_SUBMISSION_END -->
