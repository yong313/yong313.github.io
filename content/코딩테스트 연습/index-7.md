---
emoji: 🥸
title: Lv1 - 음양 더하기 ➕
date: '2021-11-09 22:05:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
음양 더하기 ➕

## **문제 설명 🎙**

어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

## **제한 조건 🔓**

- absolutes의 길이는 1 이상 1,000 이하입니다.
-absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
- signs의 길이는 absolutes의 길이와 같습니다.
-`signs[i]` 가 참이면 `absolutes[i]` 의 실제 정수가 양수임을, 
  그렇지 않으면 음수임을 의미합니다.

## 예시 👀

```
입력
[4,7,12]
[1,2,3]
```

```
출력
[true,false,true]
[false,false,true]
```

```
출력
9
0
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/76501](https://programmers.co.kr/learn/courses/30/lessons/76501)

## 문제 풀이 🤔

```jsx
function solution(absolutes, signs) {
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === false) {
            absolutes[i] = -absolutes[i]            
        } else {
            absolutes[i]
        }
    } return absolutes.reduce(function(acc, cur) {
        return acc + cur
    })
}
```

## 문제 해석 🥸

```
배열 absolute의 index의 sign이 true인지 false인지에 따라 양수, 음수로 나눠지기 때문에 우선 sign[i]가 true인지 false인지 for 반복문과 if 조건문을 통해 구분해 주어 absolutes의 각 index를 변환해 준 뒤 이 정수들의 합을 구해야 되기 때문에 reduce 메소드를 사용하여 배열의 각 index의 합을 구해줬다.
```

## 다른 문제 풀이 😱

```jsx
function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0
  )
}
```

## 다른 문제 해석 😰

```jsx
화살표 함수와 삼항연산자를 이용해서 간단하게 작성하게 되면 아래와 같이 작성할 수 있다.
```

<br />
<br />