---
emoji: 🥸
title: Lv1 - 완주하지 못한 선수 🏃‍♂️
date: '2021-11-11 22:15:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
완주하지 못한 선수 🏃‍♂️

## **문제 설명 🎙**

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

## **제한 조건 🔓**

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

## 예시 👀

```
participant
["leo", "kiki", "eden"]		
["marina", "josipa", "nikola", "vinko", "filipa"]		
["mislav", "stanko", "mislav", "ana"]	
```

```
completion
["eden", "kiki"]
["josipa", "filipa", "marina", "nikola"]
["stanko", "ana", "mislav"]
```

```
return
"leo"
"vinko"
"mislav"
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/42576](https://programmers.co.kr/learn/courses/30/lessons/42576)

## 문제 풀이 🤔

```jsx
function solution(participant, completion) {
    const total = participant.length;
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    for(let i=0; i<total; i++){
        if(participant[i] !=== completion[i]){
            answer = participant[i];
            return answer;
        }
    }
}
```

## 문제 해석 🥸

```
participant의 문자열 길이를 total이라는 변수에 담는다

배열을 정리하는 sort 메서드를 사용해 participant, completion을 배열 정리한 뒤
for 문으로 참가자와 완주자를 비교한다. 비교 시 !===로 참가자와 완주자에 없는 
완주하지 못한 자를 answer에 반환하여 리턴한다.
```

<br />
<br />