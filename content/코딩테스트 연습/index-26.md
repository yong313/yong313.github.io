---
emoji: 🥸
title: Lv1 - 제일 작은 수 제거하기 🔫
date: '2021-11-12 23:15:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

![img_a.png](img_a.png)

# Lv.1 - 
제일 작은 수 제거하기 🔫

## **문제 설명 🎙**

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

## **제한 조건 🔓**

- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

## 입출력 예

```
arr
[4,3,2,1]
[10]
```

```
return
[4,3,2]
[-1]
```

## 문제링크

[https://programmers.co.kr/learn/courses/30/lessons/12935](https://programmers.co.kr/learn/courses/30/lessons/12935)

## 문제 풀이 🤔

```jsx
function solution(arr) {
  if (arr.length === 1) return [-1]
  let testArr = arr.sort(function(a, b) {return b - a;}).pop();
  return arr
}
```

## 문제 해석 🥸

```
빈 배 열 일 경우 -1을 출력해야 하는 조건이 있다.
처음 조건문에서 arr의 문자열 길이가 1과 같으면 배열 [-1]을 리턴하게 설정한다.
그게 아니라면 변수 testArr에 arr를 sort 메 서드로 내림차순으로 정렬시킨 뒤 pop 메 서드로 마지막 배열을 삭제시켜준다.

그래서 input 값이 [1,2,3,4]일 경우 [4,3,2]를 출력하고
input 값이 [10]일 경우 (배열 길이가 1개일 경우) [-1]을 리턴한다.
```

## 다른 문제 풀이 😱

```jsx
function solution(n) { 
  let answer = String(n).split("").reduce((acc,cur) => Number(acc) + Number(cur),0);
  return answer;
}
```

## 다른 문제 해석 😰

```jsx
펼침 연산자로 배열을 풀어 Math.min 메소드로 최소값을 구한 뒤 해당 값의 인덱스를 알아내어 배열에서 제거한다
```

<br />
<br />