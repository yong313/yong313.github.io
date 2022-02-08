---
emoji: 🥸
title: Lv1 - 정수 제곱근 판별 🕵️‍♂️
date: '2021-11-12 23:02:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

![img_a.png](img_a.png)

# Lv.1 - 
정수 제곱근 판별 🕵️‍♂️

## **문제 설명 🎙**

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.

n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

## **제한 조건 🔓**

- n은 1이상, 50000000000000 이하인 양의 정수입니다.

## 입출력 예

```
n
121
3
```

```
return
144
-1
```

```
입출력 예 설명

입출력 예#1
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

입출력 예#2
3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.
```

## 문제링크

[https://programmers.co.kr/learn/courses/30/lessons/12934](https://programmers.co.kr/learn/courses/30/lessons/12934)

## 문제 풀이 🤔

```jsx
function solution(n) {
  let num = Math.pow(Math.floor(Math.sqrt(n)), 2);
  if ( n === num ) {
    return Math.pow(Math.floor(Math.sqrt(n)) + 1, 2);
  } else {
    return -1;
  }
}
```

## 문제 해석 🥸

```jsx
Math.sqrt를 사용하여 제곱으로 나누고 Math.floor로 정수로 만들어 준다.
그다음에 Math.pow를 통해서 다시 제곱을 한다. 이렇게 만들어진 수를 num이라는 변수에 담고,
조건문으로 n과 비교하여 제곱으로 이루어진 숫자라면 1을 더한 값을 리턴하고 아니라면 -1을 리턴한다.
```

<br />
<br />