---
emoji: 🥸
title: Lv1 - 행렬의 덧셈  🎉
date: '2021-11-09 22:35:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

![img_a.png](img_a.png)

# Lv.1 - 
행렬의 덧셈  🎉

## **문제 설명 🎙**

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

## **제한 조건 🔓**

- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

## 예시 👀

```
arr1
[[1,2],[2,3]]
[[1],[2]]
```

```
arr2
[[3,4],[5,6]]
[[3],[4]]
```

```
return
[[4,6],[7,9]]
[[4],[6]]
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12950](https://programmers.co.kr/learn/courses/30/lessons/12950)

## 문제 풀이 🤔

```jsx
function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++) {
        let sum = [];
        for(let j = 0; j < arr1[i].length; j++) {
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
    }
    return answer;
}
```

## 문제 해석 🥸

```
2차원 배열을 for문을 돌려 2개의 배열을 같은 인덱스끼리 덧셈
```

<br />
<br />