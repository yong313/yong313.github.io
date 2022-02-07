---
emoji: 🥸
title: Lv1 - 내적 🥷
date: '2021-11-10 23:30:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
내적 🥷

## **문제 설명 🎙**

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 [내적](https://en.wikipedia.org/wiki/Dot_product)을 return 하도록 solution 함수를 완성해주세요.
이때, a와 b의 내적은 `a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]` 입니다. (n은 a, b의 길이)

## **제한 조건 ⚠️**

- a, b의 길이는 1 이상 1,000 이하입니다.
- a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

## 예시 👀

```
arr
[1,2,3,4]
[-1,0,1]
```

```
divisor
[-3,-1,0,2]
[1,0,-1]
```

```
result
3
-2
```

```
입출력 예 설명

입출력 예 #1

a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
입출력 예 #2

a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/70128](https://programmers.co.kr/learn/courses/30/lessons/70128)

## 문제 풀이 🤔

```jsx
function solution(a, b) {
    let result = 0;
    for (let i in a) {
        result += a[i] * b[i]
    }
    return result
}
```

## 문제 해석 🥸

```
반복문을 이용하여 두 배열을 모두 순회합니다.
각 배열의 0번 째부터 마지막번 째까지 a배열의 값과 b배열의 값을 곱한 후 더합니다.
반복문이 마치면 2번 과정을 거친 값을 리턴합니다.
```

<br />
<br />