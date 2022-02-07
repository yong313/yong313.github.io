---
emoji: 🥸
title: Lv1 - 서울에서 김서방 찾기 🕵️‍♂️
date: '2021-11-10 23:55:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
서울에서 김서방 찾기 🕵️‍♂️

## **문제 설명 🎙**

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

## **제한 조건 🔓**

- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- "Kim"은 반드시 seoul 안에 포함되어 있습니다.

## 예시 👀

```
seoul
["Jane", "Kim"]
```

```
return
"김서방은 1에 있다"
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12919](https://programmers.co.kr/learn/courses/30/lessons/12919)

## 문제 풀이 🤔

```jsx
function solution(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}
```

## 문제 해석 🥸

```
indexOF 메서드를 사용하여 seoul의 값에 있는 'kim'을 찾아내서 idx 변수에 담는다.
```

<br />
<br />