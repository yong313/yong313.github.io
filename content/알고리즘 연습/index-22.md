---
emoji: ๐ฅธ
title: Lv1 - ์๋ฆฟ์ ๋ํ๊ธฐ โ
date: '2021-11-11 22:38:00'
author: ์ ์ฉํ
tags: ํ๋ก๊ทธ๋๋จธ์ค, programmers, ์๊ณ ๋ฆฌ์ฆ, ์๊ณ ๋ฆฌ์ฆ์ฐ์ต
categories: ์๊ณ ๋ฆฌ์ฆ์ฐ์ต
---

![img_a.png](img_a.png)

# Lv.1 - 
์๋ฆฟ์ ๋ํ๊ธฐ โ

## **๋ฌธ์  ์ค๋ช ๐**

์์ฐ์ N์ด ์ฃผ์ด์ง๋ฉด, N์ ๊ฐ ์๋ฆฟ์์ ํฉ์ ๊ตฌํด์ return ํ๋ solution ํจ์๋ฅผ ๋ง๋ค์ด ์ฃผ์ธ์.
์๋ฅผ๋ค์ด N = 123์ด๋ฉด 1 + 2 + 3 = 6์ return ํ๋ฉด ๋ฉ๋๋ค.

## **์ ํ ์กฐ๊ฑด ๐**

- n์ ๋ฒ์ :  100,000,000 ์ดํ์ธ ์์ฐ์

## ๋ฌธ์ ๋งํฌ

[https://programmers.co.kr/learn/courses/30/lessons/12931](https://programmers.co.kr/learn/courses/30/lessons/12931)

## ๋ฌธ์  ํ์ด ๐ค

```jsx
function solution(n) {
  let answer = 0;
  let letters = n.toString();
  
  for(let i = 0; i < letters.length; i++) {
    answer += Number(letters[i]);
  }
  return answer;
}
```

## ๋ฌธ์  ํด์ ๐ฅธ

๋ณ์ answer์ ์ด๊น๊ฐ์ 0์ผ๋ก ๋ง๋ค์ด์ค๋ค
n์ ๋ฌธ์์ด๋ก ๋ฐํํ์ฌ ๋ณ์ letters์ ๋ด์์ค๋ค
for ๋ฌธ์ ํ์ฉํ์ฌ ๋ณ์ letters์ ๋ด๊ธด ๋ฌธ์์ด์ ๊ธธ์ด ๋ณด๋ค
์ ๊ฒ ๋ฐ๋ณต๋๋ฉฐ ์ฆ๊ฐํ๋ค answer์ letters[i] ๊ฐ์ ๋ํ์ฌ ํ ๋นํ๋ค

## ๋ค๋ฅธ ๋ฌธ์  ํ์ด ๐ฑ

```jsx
function solution(n) { 
  let answer = String(n).split("").reduce((acc,cur) => Number(acc) + Number(cur),0);
  return answer;
}
```

## ๋ค๋ฅธ ๋ฌธ์  ํด์ ๐ฐ

```jsx
String(n)

.split("")

.reduce(acc,cur)

=>

Number
```

String : ๋ฌธ์์ด ๋ฐํ / .split("") : ๋ฌธ์์ด ์๋ฅด๊ธฐ

.reduce(acc, cur) : reduce ๋ฐฐ์ด์ ํฉ ๊ตฌํ๊ธฐ acc ๋์ ๊ฐ, cur ํ์ฌ ๊ฐ

โ : ํจ์ ํํ์ ๊ฐํธํ ๋์

Number : ์ซ์๋ก ๋ฐํ

โ  ๋ฌธ์์ด๋ก ๋ณํ ํ ํ ๊ฐ์ ์๋ฅด๊ณ  ์ซ์๋ก ๋ฐํ๋ ๋์ ๊ฐ๊ณผ ํ์ฌ ๊ฐ์ reduce๋ก ๊ฐ ์๋ฆฌ์ ๋ง์

<br />
<br />