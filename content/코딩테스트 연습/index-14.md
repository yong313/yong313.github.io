---
emoji: 🥸
title: Lv1 - 나누어 떨어지는 숫자 배열 🤕
date: '2021-11-10 23:20:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
나누어 떨어지는 숫자 배열 🤕

## **문제 설명 🎙**

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, 
solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

## **제한 조건 ⚠️**

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

## 예시 👀

```
arr
[5, 9, 7, 10]
[2, 36, 1, 3]
[3,2,6]
```

```
divisor
5
1
10
```

```
result
[5, 10]
[1, 2, 3, 36]
[-1]
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12910](https://programmers.co.kr/learn/courses/30/lessons/12910)

## 문제 풀이 🤔

```jsx
function solution(arr, divisor) {
    var answer = [];
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }
    answer.sort((a, b) => a - b)
    if(answer.length === 0) {
        answer.push(-1)
    }
    return answer;
}
```

## 문제 해석 🥸

```
arr의 요소를 divisor로 나누어 떨어지면 그 요소를 answer에 넣는다.
answer을 오름차순으로 정렬 한다. sort((a,b)=>a-b)

만약 나누어 떨어지는 요소가 하나도 없다면 -1을 반환하는 조건을 추가한다.
```

<br />
<br />