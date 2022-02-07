---
emoji: 🥸
title: Lv1 - 정수 내림차순으로 배치하기 📉
date: '2021-11-11 23:12:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
정수 내림차순으로 배치하기 📉

## **문제 설명 🎙**

함수 solution은 정수 n을 매개변수로 입력받습니다. 

n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.

## **제한 조건 🔓**

- `n`은 1이상 8000000000 이하인 자연수입니다.

## 입출력 예

```
n
118372
```

```
return
873211
```

## 문제링크

[https://programmers.co.kr/learn/courses/30/lessons/12933](https://programmers.co.kr/learn/courses/30/lessons/12933)

## 문제 풀이 🤔

```jsx
function solution(n) {
  let answer = ''
  let arr = n.toString().split("")
  arr.sort(function(a, b) { return b - a; })
  answer = arr.join('')
  return parseInt(answer)
}
```

## 문제 해석 🥸

```jsx
변수 answer에 답이 담길 예정..
arr라는 변수에 solution에 입력된 값을 문자열로 변경해서 나눈다.
sort 메 서드를 사용하여 내림차순으로 정렬한 뒤 join으로 합쳐준다.
return 시 parseInt를 사용하여 answer에 담긴 문자열을 숫자로 변경한다.
```

<br />
<br />