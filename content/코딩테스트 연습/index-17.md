---
emoji: 🥸
title: Lv1 - 문자열 다루기 기본 👨‍🔧
date: '2021-11-10 23:45:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
문자열 다루기 기본 👨‍🔧

## **문제 설명 🎙**

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

## **제한 조건 ⚠️**

- `s`는 길이 1 이상, 길이 8 이하인 문자열입니다.

## 예시 👀

```
s
"a234"
"1234"
```

```
answer
false
true
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12918](https://programmers.co.kr/learn/courses/30/lessons/12918)

## 문제 풀이 🤔

```jsx
function solution(s) {
	const len = s.length

	if(len === 4 || len === 6){
		return s.split("").every((c)=>!isNaN(c))
	}

	return false
}
```

## 문제 해석 🥸

```
s에 담긴 문자열의 길이를 len이라는 변수에 담는다

조건문에서 len의 길이가 4혹은 6인지 확인하기 위해 || or 연산자로 len의 길이를 확인하여 
6보다 크면 바로 false를 리턴한다

len의 길이기 4혹은 6이면 split 메서드를 사용해 문자열을 나누고 
every 메서드와 NaN을 이용해 숫자가 아닌 값을 가지고 있는지 판별한다
```

<br />
<br />