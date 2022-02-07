---
emoji: 🥸
title: Lv1 - x만큼 간격이 있는 n개의 숫자 🤔
date: '2021-11-09 22:45:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
x만큼 간격이 있는 n개의 숫자 🤔

## **문제 설명 🎙**

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

## **제한 조건 ⚠️**

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

## 예시 👀

```
x
2
4
-4
```

```
n
5
3
2
```

```
answer
[2,4,6,8,10]
[4,8,12]
[-4, -8]
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12954](https://programmers.co.kr/learn/courses/30/lessons/12954)

## 문제 풀이 🤔

```jsx
function solution(x, n) {
    let answer = []
    for (let i = 1; i <= n; i++) {
        answer.push(x * i)
    }
    return answer
}
```

## 문제 해석 🥸

```
for문 부터 설명을 하자면 i을 선언후 1을 할당하여 n개만큼 출력을 할거니 n이하로 반복하라는 뜻이며 이때 한번 반복한뒤 i는 1씩 증가하라는 뜻이 담긴 for문
 
answer.push를 한 이유는 배열에 데이터값을 넣을때는 push를 이용
```

<br />
<br />