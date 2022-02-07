---
emoji: 🥸
title: Lv1 - 자연수 뒤집어 배열로 만들기 🍳
date: '2021-11-11 22:52:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
자연수 뒤집어 배열로 만들기 🍳

## **문제 설명 🎙**

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 

예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

## **제한 조건 🔓**

- n은 10,000,000,000이하인 자연수입니다.

## 예시 👀

```
n
12345
```

```
return
[5,4,3,2,1]
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12932](https://programmers.co.kr/learn/courses/30/lessons/12932)

## 문제 풀이 🤔

```jsx
function solution(n) {
  let arr = n.toString().split("").map((str) => Number(str)).reverse()
  return arr
}
```

## 문제 해석 🥸

```
arr라는 변수에 파라미터로 받은 데이터 값을 문자열로 변환하고 나눈 뒤
map 메서드를 사용하여 문자열을 숫자로 변환한 뒤 reverse로 배열의 순서를 반전시켜 원하는 결과를 출력함
```

<br />
<br />