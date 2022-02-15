---
emoji: 💫
title: TypeScript - 0215
date: '2022-02-15 21:47:00'
author: 전용태
tags: TypeScript
categories: TypeScript
---

## 🤔 왜 타입스크립트를 써야할까요?

**에러의 사전 방지**
타입스크립트는 에러를 사전에 미리 예방할수있습니다. 아래 2개의 코드를 비교하여 어떻게 에러를 사전에 방지할 수 있는지 살펴보겠습니다.
```jsx
// math.js

function sum(a, b) {
  return a + b;
}
```
```jsx
// math.ts

function sum(a: number, b: number) {
  return a + b;
}
```



<br />
<br />