---
emoji: ๐ฅค
title: Tab ๋ง๋ค๊ธฐ
date: '2022-02-08 09:35:00'
author: ์ ์ฉํ
tags: ๋ชจ๋ฌ๋ง๋ค๊ธฐ, Tab, ReactTab
categories: ๋๋ฑ๋ง๋ค๊ธฐ
---

![tab.gif](tab.gif)

## Tab ๋ง๋ค๊ธฐ ๐ 

์น์๋น์ค๋ฅผ ๋ง๋ค๋ ์์ฃผ ์ฌ์ฉํ๊ฒ ๋๋ Tab(๋ค๋น๊ฒ์ด์?)์ ๋ง๋ค์ด ๋ณด์!! ํ๋ก์ ํธ ๊ตฌ์กฐ๋ ๋ค์๊ณผ ๊ฐ์ต๋๋ค. Tab ์ปดํฌ๋ํธ๋ฅผ App.js์ ๋ถ๋ฌ์์ ์ฌ์ฉ

<br />

![tree.png](tree.png)

<br />

### 1. Component ๊ตฌ์กฐ์ก๊ธฐ .

```jsx
Tab.js

const menuArr = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

<TabBox>
  <TabMenu>
    {menuArr.map((el, index) => {
     return (
        <li
        key={index}
          className={`${
            index === currentTab ? "submenu focused" : "submenu"
          }`}
          onClick={() => selectMenuHandler(index)}
        >
          {el.name}
        </li>
      );
    })}
  </TabMenu>
  <Desc>
     <p>{menuArr[currentTab].content}</p>
  </Desc>
</TabBox>

```

### 2. Component ์คํ์ผ๋ง .

```css
Tab.js

const TabBox = styled.div`
  width: 100%;
  height: auto;
  padding: 0 50px;
`;

const TabMenu = styled.ul`
  background-color: #efefef;
  color: #ccc;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  height: 35px;
  border-radius: 15px;
  overflow: hidden;
  padding: 0;
  margin-bottom: 50px;

  .submenu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    cursor: pointer;
  }

  .focused {
    background-color: #1da1f2;
    color: white;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    transition: 0.25s;
  }
`;

const Desc = styled.div`
  text-align: center;
  color: #ccc;
  font-weight: bold;
`;
```

<br />


### ๊ตฌํ ๋ฐฉ๋ฒ .

> li ์๋ฆฌ๋จผํธ๋ฅผ map ํจ์๋ก menu์ ์ซ์๋งํผ ๋ง๋ค์ด ์ค ๋ค, ์ธ๋ฑ์ค๋ฅผ ๋ ๋ฒ์งธ ์ธ์๋ก ๋ฃ์ด์ onClick ํธ๋ค๋ฌ ํจ์์ index๋ฅผ ์ ๋ฌํ์ต๋๋ค. ๊ทธ๋ฆฌ๊ณ  ์ธ๋ฑ์ค๋ฅผ ์ ๋ฌ๋ฐ์ ํจ์๋ฅผ ํตํด์ currentTab ์ํ๋ฅผ ํด๋น ์ธ๋ฑ์ค๋ก ๋ฐ๊ฟ์ฃผ๋ฉฐํด๋ฆญ ๋ Tab์ className์ ๋ณ๊ฒฝํ๊ณ  ํด๋ฆญ ๋ ๋ฉ๋ด์ CSS ๊ฐ์ ๋ณ๊ฒฝ, ์ ํ๋ li์ด ์๋ฆฌ๋จผํธ๋ฅผ ์๊ฐํ ์์ผ์ค ์ ์๊ฒ ๋ฉ๋๋ค.

<br />

### ์ด๋ ค์ ๋ ์  ํด๊ฒฐ ๋ฐฉ๋ฒ .

> ์ฒ์ ๊ตฌํํ  ์ menu๋ฅผ map ํจ์๋ก ์์ฑํ ๊ฒ์ด ์๋๋ผ li๋ฅผ ์ํ๋ menu ๊ฐ์๋งํผ ๋ง๋ค์ด ๊ตฌํํ์์ต๋๋ค. ์ฝ๋์ ๊ธธ์ด๊ฐ ๊ธธ์ด์ง๊ณ  ํจ์จ์ฑ์ด ๋จ์ด์ง๋ค ํ๋จํ์ฌ map ํจ์๋ฅผ ์ฌ์ฉํ์ฌ menu๋ฅผ ์ํ๋ ๊ฐ์๋งํผ ์์ฑํ์๊ณ  ์ธ๋ฑ์ค๋ฅผ ๋ ๋ฒ์งธ ์ธ์๋ก ๋ฃ์ด์ onClick ํธ๋ค๋ฌ ํจ์์ index๋ฅผ ์ ๋ฌํด์ ํด๊ฒฐํ์์ต๋๋ค.

```jsx
<TabMenu>
  {menuArr.map((el, index) => {
    return (
      <li
        key={index}
        className={`${
          index === currentTab ? "submenu focused" : "submenu"
        }`}
        onClick={() => selectMenuHandler(index)}
      >
        {el.name}
      </li>
    );
  })}
</TabMenu>
```

<br />

### ์์ธํ ์คํ ๋ฐฉ๋ฒ .

> 1. li ์๋ฆฌ๋จผํธ๋ฅผ map ํจ์๋ก menu์ ๊ฐ์๋งํผ ๋ง๋ค์์ต๋๋ค.<br />
> 2. ์ธ๋ฑ์ค๋ฅผ ๋ ๋ฒ์งธ ์ธ์๋ก ๋ฃ์ด์ onClick ํธ๋ค๋ฌ ํจ์์ index๋ฅผ ์ ๋ฌํฉ๋๋ค.<br />
> 3. ์ธ๋ฑ์ค๋ฅผ ์ ๋ฌ๋ฐ์ ํจ์๋ฅผ ํตํด์ currentTab ์ํ๋ฅผ ํด๋น ์ธ๋ฑ์ค๋ก ๋ฐ๊ฟ์ฃผ๋ฉด์ ํด๋ฆญ๋ Tab์ className์ ๋ฐ๊ฟ์ฃผ๋ฏ๋ก ์ธํด์ ํด๋ฆญ ๋ ๋ฉ๋ด์ CSS ์์ฑ๋ง ๋ฐ๊ฟ ์ ํ๋์์์ ์๊ฐํ ์์ผ์ค ์ ์๊ฒ ํ์์ต๋๋ค.

<br />
<br />