---
emoji: ๐
title: Toggle ๋ง๋ค๊ธฐ
date: '2022-02-08 09:23:00'
author: ์ ์ฉํ
tags: ๋ชจ๋ฌ๋ง๋ค๊ธฐ, Toggle, ReactToggle
categories: ๋๋ฑ๋ง๋ค๊ธฐ
---

![toggle.gif](toggle.gif)

## Toggle ๋ง๋ค๊ธฐ ๐ 

์น์๋น์ค๋ฅผ ๋ง๋ค๋ ์์ฃผ ์ฌ์ฉํ๊ฒ ๋๋ ํ ๊ธ(์ค์์น)์ ๋ง๋ค์ด ๋ณด์!! ํ๋ก์ ํธ ๊ตฌ์กฐ๋ ๋ค์๊ณผ ๊ฐ์ต๋๋ค. Toggle ์ปดํฌ๋ํธ๋ฅผ App.js์ ๋ถ๋ฌ์์ ์ฌ์ฉ

<br />

![tree.png](tree.png)

<br />

### 1. Component ๊ตฌ์กฐ์ก๊ธฐ .

```jsx
Toggle.js

// ํ ๊ธ ์ํ ๊ด๋ฆฌ
const [isToggleOn, setIsToggleOn] = useState(false);
const toggleHandler = () => {
  setIsToggleOn(!isToggleOn);
};

<ToggleBox onClick={toggleHandler}>
  <div
    className={`toggle_bg ${isToggleOn ? "toggle_check" : ""}`}
  />
  <div className={`toggle_ball ${isToggleOn ? "toggle_check" : ""}`} />
</ToggleBox>
<ToggleState>
  <div>{isToggleOn ? "Toggle Switch ON" : "Toggle Switch OFF"}</div>
</ToggleState>

```

### 2. Component ์คํ์ผ๋ง .

```css
Toggle.js

const ToggleBox = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  > .toggle_bg {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-position: right;
    background: linear-gradient(to left, #ccc 50%, #1da1f2 50%) right;
    background-size: 200%;
    transition: 0.45s;

    &.toggle_check {
      background-position: left;
      background: linear-gradient(to right, #1da1f2 50%, #ccc 50%) left;
      background-size: 200%;
      transition: 0.45s;
    }
  }

  > .toggle_ball {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.35s;

    &.toggle_check {
      left: 27px;
      transition: 0.35s;
    }
  }
`;

const ToggleState = styled.div`
  display: flex;
  color: #ccc;
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  position: absolute;
  top: 45%;
`;
```

<br />


### ๊ตฌํ ๋ฐฉ๋ฒ .

> useState ํ์ ์ด์ฉํ์ฌ boolean ์ํ ๊ฐ์ ํธ๋ค๋งํ๋ ToggleHandler ํจ์๋ฅผ ๋ง๋ค์ด ํ ๊ธ์ ์ค์์น๋ฅผ ์ผ๊ฑฐ๋ ๋๋๋ก ํ์์ต๋๋ค. ์ํ ๊ฐ์ ๋ณ์๋ก ์ฌ์ฉํ๋ฉด ํ ๊ธ์ ์ค์์น๊ฐ ์ผ์ง๋ ์๋์ผ๋ก Dom์ด ์ฌ ๋ ๋๋ง ๋๋ ๊ฒ์ ๋ฐฉ์งํ๊ธฐ ์ํด useState๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํํ์์ต๋๋ค.

<br />

### ์ด๋ ค์ ๋ ์  ํด๊ฒฐ ๋ฐฉ๋ฒ .

> ํ ๊ธ์ค์์น๊ฐ ์ผ์ง ๋ ๋ท๋ฐฐ๊ฒฝ๊ณผ ํ ๊ธ ๋ฒํผ์ด ์ข์ธก์์ ์ฐ์ธก์ผ๋ก ์ด๋๋๋ ์์ง์์ ๋ง๋๋ ๊ฒ ์ด๋ ค์ ์ต๋๋ค. linear-gradient๋ฅผ ์ฌ์ฉํ์ฌ ๋ฐฐ๊ฒฝ์ด ํ์ชฝ์์ ๋ถํฐ ์ ์  ์ฑ์์ง๋ ๋๋์ผ๋ก ๊ตฌํํ  ์ ์์๊ณ , ํ ๊ธ UI์์๋ isToggleOn ์ํ๋ฅผ ํ์ฉํด์ className์ ๋ณ๊ฒฝํด ์ฃผ๋ ๋ฐฉ์์ผ๋ก css๋ฅผ ์ ์ฉํ์ฌ ํ ๊ธ์ค์์น๊ฐ ์์ง์ด๋ ๊ฒ์ ๊ตฌํํ  ์ ์์์ต๋๋ค.

```jsx
<ToggleBox onClick={toggleHandler}>
  <div className={`toggle_bg ${isToggleOn ? "toggle_check" : ""}`} />
  <div className={`toggle_ball ${isToggleOn ? "toggle_check" : ""}`} />
</ToggleBox>
```

```css
.toggle_bg {
    background-position: right;
    background: linear-gradient(to left, #ccc 50%, #1da1f2 50%) right;
    background-size: 200%;
    transition: 0.45s;

    &.toggle_check {
      background-position: left;
      background: linear-gradient(to right, #1da1f2 50%, #ccc 50%) left;
      background-size: 200%;
      transition: 0.45s;
    }
  }
```
<br />

### ์์ธํ ์คํ ๋ฐฉ๋ฒ .

> 1. useState ํ์ ์ด์ฉํ์ฌ boolean ์ํ ๊ฐ์ ํธ๋ค๋งํ๋ ToggleHandler ํจ์๋ฅผ ๋ง๋ค์ด ํ ๊ธ์ ์ค์์น๋ฅผ ์ผ๊ฑฐ๋ ๋๋๋ก ํ์์ต๋๋ค. <br />
> 2. ํ ๊ธ UI์์๋ isToggleOn ์ํ๋ฅผ ํ์ฉํด์ className์ ๋ณ๊ฒฝํด ์ฃผ๋ ๋ฐฉ์์ผ๋ก css๋ฅผ ์ ์ฉํ์ฌ ํ ๊ธ์ค์์น๊ฐ ์์ง์ด๋ ๊ฒ์ ๊ตฌํํ  ์ ์์์ต๋๋ค. <br />
> 3. ํ ๊ธ์ค์์น ํ๋จ์ ํ์คํธ ๋ํ isToggleOn ์ํ๋ฅผ ํ์ฉํด์ ์ํ์ ๋ง๊ฒ "Toggle Switch ON", "Toggle Switch OFF"์ถ๋ ฅ ๋๋๋ก ํ์์ต๋๋ค.

<br />
<br />