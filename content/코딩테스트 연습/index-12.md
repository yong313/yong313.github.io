---
emoji: 🥸
title: Lv1 - 부족한 금액 계산하기 👨‍🏫
date: '2021-11-09 22:50:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
부족한 금액 계산하기 👨‍🏫

## **문제 설명 🎙**

새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 
이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

## **제한 조건 🔓**

- 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
- 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
- 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

## 예시 👀

```
price
3
```

```
money
20
```

```
count
4
```

```
result
10
```

```
입출력 예 설명

입출력 예 #1
이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/82612](https://programmers.co.kr/learn/courses/30/lessons/82612)

## 문제 풀이 🤔

```jsx
function solution(price, money, count) {
    let answer = 0
    let total = 0

    for(let i = 1; i <= count; i++){
        total = total + price * i 
    }
    answer = (total - money)
    return answer > 0 ? answer : 0
}
```

## 문제 해석 🥸

```
for 문으로 totla 값을 먼저 구한다.
i의 값은 1이고 i는 count의 수만큼 반복되며 증가하여 totla 값을 구하고
total에서 money 값을 빼서 부족한 금액을 리턴한다.

아래 삼 항 연산자를 통해 금액이 부족하지 않을 경우 0을 리턴하게 한다.
```

<br />
<br />