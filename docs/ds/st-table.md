---
title: "ST 表（RMQ）"
description: "静态区间最值查询：预处理倍增表，查询时用两段重叠区间拼出答案。"
tags:
  - "ST表"
  - "稀疏表"
  - "RMQ"
  - "区间最值"
---

# ST 表（RMQ）

静态区间最值查询：预处理倍增表，查询时用两段重叠区间拼出答案。

## 思路

该模板覆盖「ST表、稀疏表、RMQ、区间最值」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** ST表、稀疏表、RMQ、区间最值


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n log n) 预处理，O(1) 查询` | `O(n log n)` |

## 易错点

- 只适用于数组不修改的静态问题。
- max、min、gcd 这类「可重复贡献」的运算才能用两段覆盖。
- LOG 取 ceil(log2(n))，1e5 的数据取 17 就够。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** RMQ

| 题目 | 状态 |
| --- | --- |
| [AcWing 1273. 天才的记忆](https://www.acwing.com/activity/content/problem/content/1795/) | 未完成 |

提交记录中暂未找到该算法的代码，模板暂空。
<!-- ALGORITHM_SUBMISSION_END -->
