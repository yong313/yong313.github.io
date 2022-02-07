---
emoji: 🥸
title: Lv1 - 핸드폰 번호 가리기 📱
date: '2021-11-09 22:25:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
핸드폰 번호 가리기 📱

## **문제 설명 🎙**

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다. 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

## **제한 조건 ⚠️**

- s는 길이 4 이상, 20이하인 문자열입니다.

## 예시 👀

```
phone_number
"01033334444"
"027778888"
```

```
return
"*******4444"
"*****8888"
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12948](https://programmers.co.kr/learn/courses/30/lessons/12948)

## 문제 풀이 🤔

```jsx
function solution(num) {
  let answer = ""
  let numArr = num.split('')
  
  for(let i = 0; i < num.length - 4; i++) {
    numArr[i] = "*"
  }
  return answer = numArr.join('')
}
```

## 문제 해석 🥸

```
numArr라는 변수에 input 값을 split으로 배열을 만들어 담아준다.
for문으로 input값의 -4한 길이만큼 "*" 대입한다.
answer에 담긴 값을 join으로 묶어 리턴함.
```

<br />
<br />