---
emoji: 🥸
title: Lv1 - 수박수박수박수박수박수? 🍉
date: '2021-11-11 22:08:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 -  
수박수박수박수박수박수? 🍉

## **문제 설명 🎙**

길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 
문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 "수박수박"을 리턴하고 
3이라면 "수박수"를 리턴하면 됩니다.

## **제한 조건 🔓**

- n은 길이 10,000이하인 자연수입니다.

## 문제 링크 👀

[https://programmers.co.kr/learn/courses/30/lessons/12922?language=java](https://programmers.co.kr/learn/courses/30/lessons/12922?language=java)

## 문제 풀이 🤔

```jsx
function solution(n) {
  let result = ""
  for (let i = 1; i <= n; i++){
    if(i % 2 === 0) {
      result += "박"
    }else{
      result += "수"
    }
  }
    return result
}
```

## 문제 해석 🥸

for 문은 n에 입력된 값만큼 "수","박"을 반복

if 문에서 n의 값을 2로 나누고 남은 값을 0과 비교 (홀, 짝으로 구분)
하여 출력한 글자를 리턴

두개의 값이 result에 담겨 n만큼 반복 된 "수", "박"을 출력

## 다른 문제 풀이 😱

```jsx
function solution(n) {
    return "수박".repeat(n).substring(0,n)
}
```

## 다른 문제 해석 😰

```jsx
.repeat(n);

substring(0, n)
```

repeat : 문자열 반복 / (n) : 반복횟수 = n의 값만큼 반복
substring : 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 
문자열의 부분 문자열을 반환 / (0,n) : 0부터 n의 값만큼

✅수박이라는 문자열을 n만큼 반복하고 0부터 n의 값만큼 반환

<br />
<br />