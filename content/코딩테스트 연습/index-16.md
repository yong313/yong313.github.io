---
emoji: 🥸
title: Lv1 - 문자열 내 p와 y의 개수 🐽
date: '2021-11-10 23:40:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
문자열 내 p와 y의 개수 🐽

## **문제 설명 🎙**

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

## **제한 조건 🔓**

- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

## 예시 👀

```
s
"pPoooyY"
"Pyy"
```

```
answer
true
false
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12916](https://programmers.co.kr/learn/courses/30/lessons/12916)

## 문제 풀이 🤔

```jsx
function solution(s){
    let strArr = s.toUpperCase().split('');
    if(!strArr.includes('P') && !strArr.includes('Y')){
        return true;
    }
    let count1 =0;
    let count2 =0;
    for(let i=0; i<strArr.length; i++){
        if(strArr[i] === 'P'){
            count1++;
        }else if(strArr[i]==='Y'){
            count2++;
        }
    }
    if(count1 === count2){
        return true;
    }else{
        return false;
    }
}
```

## 문제 해석 🥸

```
반복문을 이용하여 두 배열을 모두 순회합니다.
각 배열의 0번 째부터 마지막번 째까지 a배열의 값과 b배열의 값을 곱한 후 더합니다.
반복문이 마치면 2번 과정을 거친 값을 리턴합니다.
```

<br />
<br />