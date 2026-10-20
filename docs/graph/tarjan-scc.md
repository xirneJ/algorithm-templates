---
title: "Tarjan 强连通分量"
description: "一次 DFS 求有向图所有强连通分量，缩点后可以转化成 DAG 继续处理。"
tags:
  - "Tarjan"
  - "强连通分量"
  - "SCC"
  - "缩点"
---

# Tarjan 强连通分量

一次 DFS 求有向图所有强连通分量，缩点后可以转化成 DAG 继续处理。

## 思路

该模板覆盖「Tarjan、强连通分量、SCC、缩点」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** Tarjan、强连通分量、SCC、缩点


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(n + m)` | `O(n + m)` |

## 易错点

- dfn 是访问时间戳，low 是能回溯到的最小时间戳。
- 用栈维护当前搜索路径上的点，low == dfn 时弹栈得到一个强连通分量。
- 注意区分「在栈中」和「已经访问过」。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** 有向图的强连通分量

| 题目 | 状态 |
| --- | --- |
| [AcWing 1174. 受欢迎的牛](https://www.acwing.com/activity/content/problem/content/1541/) | 未完成 |
| [AcWing 367. 学校网络](https://www.acwing.com/activity/content/problem/content/1542/) | 未完成 |
| [AcWing 1175. 最大半连通子图](https://www.acwing.com/activity/content/problem/content/1543/) | 未完成 |
| [AcWing 368. 银河](https://www.acwing.com/activity/content/problem/content/1544/) | 未完成 |

提交记录中暂未找到该算法的代码，模板暂空。
<!-- ALGORITHM_SUBMISSION_END -->
