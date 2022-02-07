---
emoji: 🥸
title: Lv1 - 평균 구하기 ➗
date: '2021-11-09 22:15:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
평균 구하기 ➗

## **문제 설명 🎙**

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

## **제한 조건 ⚠️**

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

## 예시 👀

```
입력
[1,2,3,4]
[5,5]
```

```
출력
2.5
5
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12944](https://programmers.co.kr/learn/courses/30/lessons/12944)

## 문제 풀이 🤔

```jsx
function solution(arr) {
  let answer = 0;
  for(let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}
```

## 문제 해석 🥸

```
배열을 돌면서 그 값들을 저장하고 배열의 길이로 나누어준다.
```

## 다른 문제 풀이 😱

```jsx
function solution(arr) {
  return arr.reduce((a, b) => (a + b)) / arr.length;
}
```

## 다른 문제 해석

```
reduce메서드를 사용하여 좀 더 간결하게 작성 가능하다.
```

<br />
<br />