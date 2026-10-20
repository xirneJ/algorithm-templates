---
title: "Trie 字典树"
description: "按字符逐层建树，支持字符串插入与查询，复杂度只和字符串长度有关。"
tags:
  - "Trie"
  - "字典树"
  - "前缀"
---

# Trie 字典树

## 模板

```cpp
#include <iostream>
#include <string>
using namespace std;
#define N 100010
int son[N][26]={0};
int cnt[N]={0};
int idx=0;
void insert(string str)
{
    int p=0;
    int i;
    for(i=0;str[i];i++)
    {
        int u=str[i]-'a';
        if(!son[p][u])
        {
            son[p][u]=++idx;
        }
        p=son[p][u];
    }
    cnt[p]++;
}
int query(string str)
{
    int p=0;
    int i;
    for(i=0;str[i];i++)
    {
        int u=str[i]-'a';
        if(!son[p][u])
        {
            return 0;
        }
        p=son[p][u];
    }
    return cnt[p];
}
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        string str;
        string str1;
        cin>>str>>str1;
        if(str.compare("I")==0)
        {
            insert(str1);
        }
        else if(str.compare("Q")==0)
        {
            int res=query(str1);
            cout<<res<<endl;
        }
    }
    return 0;
}
```

按字符逐层建树，支持字符串插入与查询，复杂度只和字符串长度有关。

## 思路

该模板覆盖「Trie、字典树、前缀」相关问题。下面的代码保留竞赛中常用的实现结构；遇到具体题目时，需要根据数据范围调整数组大小、边界和取模方式。

**相关标签：** Trie、字典树、前缀


## 复杂度

| 时间 | 空间 |
| --- | --- |
| `O(L)` | `O(总字符数 × 字符集)` |

## 易错点

- 用二维数组 son[p][c] 存儿子，0 号节点是根。
- 需要统计前缀出现次数时，在插入路径上累加计数。
- 字符集很大时，可以改用 map / unordered_map 存儿子。

<!-- ALGORITHM_SUBMISSION_START -->
## 题目

**算法分组：** Trie

| 题目 | 状态 |
| --- | --- |
| [AcWing 835. Trie字符串统计](https://www.acwing.com/activity/content/problem/content/883/) | 已完成 |
| [AcWing 143. 最大异或对](https://www.acwing.com/activity/content/problem/content/884/) | 已完成 |

## 提交来源

- [AcWing 835. Trie字符串统计](https://www.acwing.com/activity/content/code/content/9864600/)
<!-- ALGORITHM_SUBMISSION_END -->
