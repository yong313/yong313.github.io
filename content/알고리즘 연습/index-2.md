---
emoji: 🥸
title: Lv.1 - 짝수와 홀수 🖖
date: '2021-11-08 22:20:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

![img_a.png](img_a.png)

# Lv.1 - 
짝수와 홀수 🖖

## **문제 설명 🎙**

정수 num이 짝수일 경우 "Even"을 반환하고,
홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

## **제한 조건 🔓**

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

## 예시 👀

```
입력
num return
```

```
출력
"Odd" "Even"
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12937](https://programmers.co.kr/learn/courses/30/lessons/12937)

## 문제 풀이 🤔

```jsx
function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        return answer = "Even";
    } else {
        return answer = "Odd"
    }
}
```

## 문제 해석 🥸

```
조건문을 작성, 입력된 값을 2로 나누고 남은 값이 0과 같은지 확인한다. 
예를 들어 입력값이 4일 경우 2로 나누어 나눈 값이 0이기 때문에
우측에 0과 같음으로 answer에 Even을 입력한다 (0은 짝수를 의미한다)
다음 else는 짝수의 다른 경우의 수인 홀수이므로 Odd를 answer에 입력한다
위 과정을 거쳐 입력된 값을 홀수 짝수로 구분 지어 해당 값을 answer에 리턴한다
```

## 다른 문제 풀이 😱

```jsx
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
```

## 다른 문제 해석 😰

```
Javascript 에서 ? 기호의 의미

삼항연산자
조건부 삼항 연산자는 JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자, 
보통 if 명령문의 단축 형태로 쓰임

num을 2로 나누고 남은 값이 0이면 "Even" 아니면 "Odd"를 한줄로 짧게 표현함 ㄷㄷ
```

<br />
<br />