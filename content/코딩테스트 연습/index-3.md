---
emoji: 🥸
title: Lv1 - 가운데 글자 가져오기 🖕
date: '2021-11-08 22:30:00'
author: 전용태
tags: 프로그래머스, programmers, 알고리즘, 알고리즘연습
categories: 알고리즘연습
---

# Lv.1 - 
가운데 글자 가져오기 🖕

## **문제 설명 🎙**

단어 s의 가운데 글자를 반환하는 함수,
solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

## **제한 조건 🔓**

- s는 길이가 1 이상, 100이하인 스트링입니다.

## 예시 👀

```
입력
s         return
```

```
출력
"abcde"    "c"
"qwer"     "we"
```

## 문제 링크 📎

[https://programmers.co.kr/learn/courses/30/lessons/12903](https://programmers.co.kr/learn/courses/30/lessons/12903)

## 문제 풀이 🤔

```jsx
function solution(s) {
  let answer = ""
  if (s.length % 2 === 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2]
  } else {
    answer = s[s.length / 2 - 0.5]
  }
  return answer
}
```

## 문제 해석 🥸

```
조건문을 사용한다. s에 담긴 문자열의 길이를 length로 확인해 2로 나누고 남은 값이 0과 같은지 확인하여 같을 경우 s의 길이를 2로 나누고 1을 뺀 값과 s의 길이 나누기 2한 값을 answer에 반환한다. 0과 같지 않을 경우 s의 길이를 2로 나누고 0.5를 빼준 값이 answer에 담겨 리턴된다.

(💡 짝수일 경우 - 예를 들어 s에 "abcd"가 입력되면 s의 길이는 4이다. 4를 2로 나누고 1을 빼면 1이다. "abcd"에서 1번째 문자열은 "b"가 된다. "문자열은 0부터 시작" 
다음 4를 2로 나누면 2인데 "abcd"에서 2번째 문자열은 "c"이다.)

(💡 홀수일 경우 - 예를 들어 s에 "efd"가 입력되면 s의 길이는 3이다. 3을 2로 나누면 1.5이기 때문에 0.5를 빼서 1번째 문자열인 "f"가 answer에 반환된다.)
```

<br />
<br />