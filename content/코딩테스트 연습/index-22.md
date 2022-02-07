---
emoji: 🥸
title: Lv1 - 자릿수 더하기 ➕
date: '2021-11-11 22:38:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
자릿수 더하기 ➕

## **문제 설명 🎙**

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

## **제한 조건 🔓**

- n은 범위 :  100,000,000 이하인 자연수

## 문제링크

[https://programmers.co.kr/learn/courses/30/lessons/12931](https://programmers.co.kr/learn/courses/30/lessons/12931)

## 문제 풀이 🤔

```jsx
function solution(n) {
  let answer = 0;
  let letters = n.toString();
  
  for(let i = 0; i < letters.length; i++) {
    answer += Number(letters[i]);
  }
  return answer;
}
```

## 문제 해석 🥸

변수 answer의 초깃값을 0으로 만들어준다
n을 문자열로 반환하여 변수 letters에 담아준다
for 문을 활용하여 변수 letters에 담긴 문자열의 길이 보다
적게 반복되며 증가한다 answer에 letters[i] 값을 더하여 할당한다

## 다른 문제 풀이 😱

```jsx
function solution(n) { 
  let answer = String(n).split("").reduce((acc,cur) => Number(acc) + Number(cur),0);
  return answer;
}
```

## 다른 문제 해석 😰

```jsx
String(n)

.split("")

.reduce(acc,cur)

=>

Number
```

String : 문자열 반환 / .split("") : 문자열 자르기

.reduce(acc, cur) : reduce 배열의 합 구하기 acc 누적값, cur 현재 값

⇒ : 함수 표현의 간편한 대안

Number : 숫자로 반환

✅  문자열로 변환 후 한 개식 자르고 숫자로 반환된 누적값과 현재 값을 reduce로 각 자리수 덧셈

<br />
<br />