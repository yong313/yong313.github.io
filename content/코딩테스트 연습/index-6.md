---
emoji: 🥸
title: Lv1 - 없는 숫자 더하기 🧐
date: '2021-11-08 23:00:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

![img_a.png](img_a.png)

# Lv.1 - 
없는 숫자 더하기 🧐

## **문제 설명 🎙**

0부터 9까지의 숫자 중 일부가 들어있는 배열 `numbers`가 매개변수로 주어집니다. `numbers`에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

## **제한 조건 🔓**

- 1 ≤ `numbers`의 길이 ≤ 9
- 0 ≤ `numbers`의 모든 수 ≤ 9
- `numbers`의 모든 수는 서로 다릅니다.

## 예시 👀

```
numbers
[1,2,3,4,6,7,8,0]
[5,8,4,0,6,7,9]
```

```
result
14
6
```

```
입출력 예 설명

입출력 예 #1
5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

입출력 예 #2
1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/86051](https://programmers.co.kr/learn/courses/30/lessons/86051)

## 문제 풀이 🤔

```jsx
function solution(numbers) {
    let answer = 0;
    for(let i = 0; i < 10; i++) {
        answer += i;
    }
    for(const number of numbers) {
        answer -= number;
    }
    return answer;
}
```

## 문제 해석 🥸

```
첫번째 for문으로 0부터 9까지의 합을 answer에 담는다.
두번째 for문에서 number라는 변수에 numbers 파라미터에 담긴 값을 담은 후
answer에 담긴 0부터 9까지의 합에서 변수 number에 담긴 값을 빼준다.
```

<br />
<br />