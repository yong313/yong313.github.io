---
emoji: 🥸
title: Lv1 - 두 정수 사이의 합 👏
date: '2021-11-08 22:40:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
두 정수 사이의 합 👏


## **문제 설명 🎙**

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, 
solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

## **제한 조건 ⚠️**

- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

## 예시 👀

```
입력
a   b   c
```

```
출력
3   5   12
3   3   3
5   3   12
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12912](https://programmers.co.kr/learn/courses/30/lessons/12912)

## 문제 풀이 🤔

```jsx
function solution(a, b) {
    let answer = 0;
    
    if(a <= b) {
      for(let i = a; i <= b; i++) {
        answer = answer + i
      }    
    }
    if(a > b) {
        for(let i = b; i <= a; i++) {
            answer = answer + i
        }
    }
    return answer;
}
```

## 문제 해석 🥸

```
파라미터는 두 개의 정수를 받는다.
두 가지 조건으로 나눈다. "a가 크거나, b가 그거가"

예를 들어 첫 번째 조건문에 파라미터에 2, 4가 입력된 값이 들어올 경우,
2부터 1씩 더해가며 반복되어 2,3,4가 i에 담긴다.
그 값을 더해서 answer에 반환함
(첫 번째 조건문에 해당하는 이유 a는 b보다 작거나 같다는 조건을 걸어줌)

반대로 a가 b보다 클 경우 두 번째 조건문이 실행하여 위와 같은 결과를 출력

a와 b가 같은 경우 반복문이 실행되지 않기 때문에 제한조건대로 아무 수나 출력
```

<br />
<br />