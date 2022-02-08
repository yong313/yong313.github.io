---
emoji: 🥸
title: Lv1 - 2016년 📅
date: '2021-11-10 23:10:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

![img_a.png](img_a.png)

# Lv.1 - 
2016년 📅

## **문제 설명 🎙**

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT` 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

## **제한 조건 🔓**

- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

## 예시 👀

```
a
5
```

```
b
24
```

```
result
"TUE"
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12901](https://programmers.co.kr/learn/courses/30/lessons/12901)

## 문제 풀이 🤔

```jsx
function solution(a, b) {
    var month = [31,29,31,30,31,30,31,31,30,31,30,31];
    var day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var sum = b+4;
    for (var i=0; i<a-1; i++){
        sum += month[i];
    }
    var answer = day[(sum%7)];
    return answer;
}
```

## 문제 해석 🥸

```
month와 day 배열을 선언
그 뒤 input으로 a,b(월,일)을 받아오면 month를 이용하여 총 날짜수(sum)를 세준다
예)
1월1일이면 sum = 1
1월 31일이면 sum =31
2월 10일이면 sum =41

그런데, 2016년의 1월1일은 금요일이므로, sum에 4일을 더해서 계산
그뒤 7로 나눈 나머지로 day에서 요일을 찾음
```

<br />
<br />