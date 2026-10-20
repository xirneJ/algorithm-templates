---
title: "数位 DP"
description: "算法分类：动态规划"
tags:
  - 算法模板
  - "动态规划"
---

# 数位 DP

## 模板

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
//abcxdef
//当高位是0~abc-1时,有abc*(def可以枚举的所有情况)
//当高位是abc
//如果当前位就是要找的数,就有def+1种情况
//如果当前位比要找的数小,后面可以任意枚举，有0~999...种情况
//注意当前枚举0的时候要特别注意一下前导0的问题
int qmi(int a,int k)
{
    int res=1;
    while(k--)
    {
        res=res*a;
    }
    return res;
}
int get(vector<int>s,int l,int r)
{
    int res=0;
    for(int i=r;i>=l;i--)
    {
        res=res*10+s[i];
    }
    return res;
}
int count(int n,int x)
{
    if(!n)return 0;
    int i;
    int res=0;
    vector<int>s;
    while(n)
    {
        s.push_back(n%10);
        n/=10;
    }
    n=s.size();
    for(i=n-1-!x;i>=0;i--)
    {
        if(i<n-1)
        {
            res=res+get(s,i+1,n-1)*qmi(10,i);
            if(!x)res-=qmi(10,i);
        }
        if(x==s[i])res+=get(s,0,i-1)+1;//这里要加1
        else if(x<s[i])res+=qmi(10,i);
    }
    return res;
}
int main()
{
    int a,b;
    while(scanf("%d %d",&a,&b)&&(a||b))
    {
        int l=min(a,b);
        int r=max(a,b);
        int i;
        for(i=0;i<=9;i++)
        {
            cout<<count(r,i)-count(l-1,i)<<' ';
        }
        cout<<endl;
    }
    return 0;
}
```

本页按算法归档，收录 7 道相关题目。

**算法分组：** 数位统计DP、数位DP

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 338. 计数问题](https://www.acwing.com/activity/content/problem/content/1009/) | 已完成 |
| [AcWing 1081. 度的数量](https://www.acwing.com/activity/content/problem/content/1308/) | 未完成 |
| [AcWing 1082. 数字游戏](https://www.acwing.com/activity/content/problem/content/1309/) | 已完成 |
| [AcWing 1083. Windy数](https://www.acwing.com/activity/content/problem/content/1310/) | 已完成 |
| [AcWing 1084. 数字游戏 II](https://www.acwing.com/activity/content/problem/content/1311/) | 已完成 |
| [AcWing 1085. 不要62](https://www.acwing.com/activity/content/problem/content/1312/) | 已完成 |
| [AcWing 1086. 恨7不成妻](https://www.acwing.com/activity/content/problem/content/1313/) | 未完成 |

## 提交来源

- [AcWing 338. 计数问题](https://www.acwing.com/activity/content/code/content/9965101/)
- [AcWing 1082. 数字游戏](https://www.acwing.com/activity/content/code/content/9965842/)
