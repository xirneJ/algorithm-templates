---
title: "单链表"
description: "算法分类：数据结构"
tags:
  - 算法模板
  - "数据结构"
---

# 单链表

## 模板

```cpp
#include <iostream>

using namespace std;

const int N = 100010;

// head 表示头结点的下标
// e[i] 表示节点i的值
// ne[i] 表示节点i的next指针是多少
// idx 存储当前已经用到了哪个点
int head, e[N], ne[N], idx;

// 初始化
void init()
{
    head = -1;
    idx = 0;
}

// 将x插到头结点
void add_to_head(int x)
{
    e[idx] = x, ne[idx] = head, head = idx ++ ;
}

// 将x插到下标是k的点后面
void add(int k, int x)
{
    e[idx] = x, ne[idx] = ne[k], ne[k] = idx ++ ;
}

// 将下标是k的点后面的点删掉
void remove(int k)
{
    ne[k] = ne[ne[k]];
}

int main()
{
    int m;
    cin >> m;

    init();

    while (m -- )
    {
        int k, x;
        char op;

        cin >> op;
        if (op == 'H')
        {
            cin >> x;
            add_to_head(x);
        }
        else if (op == 'D')
        {
            cin >> k;
            if (!k) head = ne[head];
            else remove(k - 1);
        }
        else
        {
            cin >> k >> x;
            add(k - 1, x);
        }
    }

    for (int i = head; i != -1; i = ne[i]) cout << e[i] << ' ';
    cout << endl;

    return 0;
}
```

本页按算法归档，收录 1 道相关题目。

**算法分组：** 单链表

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 826. 单链表](../problems/ds/863.md) | 未完成 |

## 提交来源

- [AcWing 826. 单链表](https://www.acwing.com/activity/content/code/content/42977/) · yxc 相关代码
