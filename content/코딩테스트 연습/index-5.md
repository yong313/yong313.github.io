---
emoji: 🥸
title: Lv1 - 문자열을 정수로 바꾸기 🤹‍♂️
date: '2021-11-08 22:50:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
문자열을 정수로 바꾸기 🤹‍♂️

## **문제 설명 🎙**

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

## **제한 조건 ⚠️**

- s의 길이는 1 이상 5 이하입니다.
- s의 맨앞에는 부호 (+,-)가 올 수 있습니다.
- s는 부호와 숫자로만 이루어져있습니다.
- s는 "0"으로 시작하지 않습니다.

## 예시 👀

```
입출력 예
예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12925](https://programmers.co.kr/learn/courses/30/lessons/12925)

## 문제 풀이 🤔

```jsx
function solution(s) {
    return Number(s);
}
```

## 문제 해석 🥸

```
s를 Number라는 메소드로 정수로 변환
```

## 다른 방법의 문제 풀이 😱

```jsx
function solution(s){
  return s/1
}

function solution(s){
  return  +s;
}
```

## 다른 방법의 문제 해석 😰

```jsx
Javascript의 특징, 문자열을 숫자 연산자와 함께 사용하게 되면 계산을 위해 자동으로 문자열을 숫자로 바꿔준다.
```

## 다른 방법의 문제 풀이 😱

```jsx
function solution(s){
  return s/1
}

function solution(s){
  return  +s;
}
```

## 다른 방법의 문제 해석 😰

```jsx
Javascript의 특징, 문자열을 숫자 연산자와 함께 사용하게 되면 계산을 위해 자동으로 문자열을 숫자로 바꿔준다.
```

<br />
<br />