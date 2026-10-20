---
title: "倍增求 LCA"
description: "预处理每个点向上 2^k 级祖先，快速求树上两点的最近公共祖先。"
tags:
  - "LCA"
  - "最近公共祖先"
  - "倍增"
  - "树"
---

# 倍增求 LCA

预处理每个点向上 2^k 级祖先，快速求树上两点的最近公共祖先。

## 思路

该模板覆盖「LCA、最近公共祖先、倍增、树」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** LCA、最近公共祖先、倍增、树


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n log n) 预处理，O(log n) 查询` | `O(n log n)` |

## 易错点

- 先 DFS 求出深度和 up[u][0]，再递推 up[u][j] = up[up[u][j-1]][j-1]。
- 查询时先把较深的点跳到与另一点同深度，再一起往上跳。
- 根节点的祖先记为 0，up 数组全局清零即可。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 最近公共祖先

| 题目 | 状态 |
| --- | --- |
| [AcWing 1172. 祖孙询问](https://www.acwing.com/activity/content/problem/content/1537/) | 未完成 |
| [AcWing 1171. 距离](https://www.acwing.com/activity/content/problem/content/1538/) | 未完成 |
| [AcWing 356. 次小生成树](https://www.acwing.com/activity/content/problem/content/1539/) | 未完成 |
| [AcWing 352. 闇の連鎖](https://www.acwing.com/activity/content/problem/content/1540/) | 未完成 |

提交记录中暂未找到该算法的代码，模板暂空。
<!-- ALGORITHM_SUBMISSION_END -->
