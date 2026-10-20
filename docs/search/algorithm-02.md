---
title: "BFS"
description: "算法分类：搜索"
tags:
  - 算法模板
  - "搜索"
---

# BFS

## 模板

```cpp
#include <iostream>
#include <queue>
#include <cstring>
#include <algorithm>
using namespace std;
int arr[110][110];
int n,m;
int dp[110][110];
typedef pair<int,int>pii;
queue<pii>s;
void bfs()
{
    s.push({1,1});
    memset(dp,0x3f3f3f3f,sizeof(dp));
    dp[1][1]=0;
    while(s.size())
    {
        int tx=s.front().first;
        int ty=s.front().second;
        int x[4]={1,-1,0,0};
        int y[4]={0,0,1,-1};
        int i;
        for(i=0;i<4;i++)
        {
            int nx=tx+x[i];
            int ny=ty+y[i];
            if(nx>=1&&nx<=n&&ny>=1&&ny<=m&&!arr[nx][ny])
            {
                if(dp[nx][ny]>dp[tx][ty]+1)
                {
                    dp[nx][ny]=dp[tx][ty]+1;
                    s.push({nx,ny});
                }
            }
        }
        s.pop();
    }
}
int main()
{
    cin>>n>>m;
    int i,j;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=m;j++)
        {
            cin>>arr[i][j];
        }
    }
    bfs();
    cout<<dp[n][m]<<endl;
    return 0;
}
```

本页按算法归档，收录 2 道相关题目。

**算法分组：** BFS

## 对应题目

| 题目 | 状态 |
| --- | --- |
| [AcWing 844. 走迷宫](https://www.acwing.com/activity/content/problem/content/907/) | 已完成 |
| [AcWing 845. 八数码](https://www.acwing.com/activity/content/problem/content/908/) | 未完成 |

## 提交来源

- [AcWing 844. 走迷宫](https://www.acwing.com/activity/content/code/content/9983736/)
