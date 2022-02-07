---
emoji: 🥸
title: Lv.1 - 직사각형 별찍기 🌟
date: '2021-11-08 22:15:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 -
직사각형 별찍기 🌟


## **문제 설명 🎙**

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.


## **제한 조건 🔓**

- n과 m은 각각 1000 이하인 자연수입니다.


## 예시 👀

```
입력
5 3
```

```
출력
*****
*****
*****
```


## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript)



## 문제 풀이 🤔

```jsx
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { // 입력받은 숫자를 'data에 받는다'
    const n = data.split(" "); // data(입력받은 숫자)를 배열로 변경
    const a = Number(n[0]), // a는 줄에대한 별의 갯수,
					b = Number(n[1]); // b는 몇줄 출력
    const row = "*".repeat(a)
    for(let i = 0; i < b; i++) {
      console.log(row);
    }
});
```


## 문제 해석 🥸

```
row라는 변수를 만들고, repeat() 함수로 a만큼 *반복, 그리고 그 과정을 b번 만큼 반복
```

<br />
<br />