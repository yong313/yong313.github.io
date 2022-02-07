---
emoji: 🥸
title: Lv1 - 이상한 문자 만들기 👽
date: '2021-11-11 22:25:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
이상한 문자 만들기 👽

## **문제 설명 🎙**

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 

각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 
문자열을 리턴하는 함수, solution을 완성하세요.

## **제한 조건 ⚠️**

- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 
짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

## 예시 👀

```
s
"try hello world"
```

```
return
"TrY HeLlO WoRlD"
```

```
입출력 예 설명

"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/42576](https://programmers.co.kr/learn/courses/30/lessons/12930)

## 문제 풀이 🤔

```jsx
function solution(s) {
    let strArr = s.split(" ");
    // el = 엘리먼트
		return strArr.map(el => {
        let str = "";
        for (let i = 0; i < el.length; i++) {
          if (i % 2 === 0) {
              str += el[i].toUpperCase(); 
          } else {
              str += el[i].toLowerCase(); 
          }
        }
        return str;
    }).join(" ");
}
```

## 문제 해석 🥸

```
s에 담긴 try hello world를 split으로 문자열을 나눈다,
(" ") < 공백을 기준으로 나눔 = "try", "hello", "world"
strArr라는 변수에 담아줌, 다음 return에서 strArr를 map이라는 메서드를 사용해 재정의하고 엘리먼트들에 for문과 if문을 적용시킨 값을 담을 예정, 엘리먼트의 길이만큼 증가하며 반복한하고 만약 i 가 2로 나누어 남은 값이 0과 같으면 el의 i 값에 담긴 문자열을 대문자로 바꾼 뒤 str에 더해서 할당하고 아닐 경우 el의 i 값에 담긴 문자열을 소문자로 더해서 할당한다. 그렇게 담긴 str 변수를 join이라는 메서드로 배열의 모든 요소를 연결해 하나의 문자열로 만들어 출력한다.
출력결과는 "TrY HeLlO WoRlD"
```

<br />
<br />