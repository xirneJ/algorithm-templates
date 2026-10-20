---
title: "KMP 字符串匹配"
description: "线性时间字符串匹配：用 next 数组记录最长相等前后缀，失配时快速跳转。"
tags:
  - "KMP"
  - "字符串匹配"
  - "next数组"
---

# KMP 字符串匹配

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
| [AcWing 831. KMP字符串](https://www.acwing.com/activity/content/problem/content/869/) | 未完成 |

提交记录中暂未找到该算法的代码，模板暂空。
<!-- ALGORITHM_SUBMISSION_END -->
