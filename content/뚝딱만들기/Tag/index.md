---
emoji: ๐
title: Tag ๋ง๋ค๊ธฐ
date: '2022-02-08 09:45:00'
author: ์ ์ฉํ
tags: ๋ชจ๋ฌ๋ง๋ค๊ธฐ, Tag, ReactTag
categories: ๋๋ฑ๋ง๋ค๊ธฐ
---

![tag.gif](tag.gif)

## Tag ๋ง๋ค๊ธฐ ๐ 

์น์๋น์ค๋ฅผ ๋ง๋ค๋ ์์ฃผ ์ฌ์ฉํ๊ฒ ๋๋ Tag๋ฅผ ๋ง๋ค์ด ๋ณด์!! ํ๋ก์ ํธ ๊ตฌ์กฐ๋ ๋ค์๊ณผ ๊ฐ์ต๋๋ค. Tag ์ปดํฌ๋ํธ๋ฅผ App.js์ ๋ถ๋ฌ์์ ์ฌ์ฉ

<br />

![tree.png](tree.png)

<br />

### 1. Component ๊ตฌ์กฐ์ก๊ธฐ .

```jsx
Tag.js

const initialTags = ["CodeStates", "yong313"];

  const [tags, setTags] = useState(initialTags);

  const removeTags = (indexToRemove) => {
    // ์ญ์ ๊ธฐ๋ฅ ๊ตฌํ
    // mapํจ์์ index๋ฅผ ์ ๋ฌ๋ฐ์ ํด๋ฆญ๋ ์ธ๋ฑ์ค ์ ๋ณด๋ฅผ ํ์ฉํด์ ์ญ์ ๋ฅผ ์ํด
    setTags(
      tags.filter((tag) => {
        return tag !== tags[indexToRemove];
      })
    );
  };

  const addTags = (event) => {
    //tag์ถ๊ฐ ๊ธฐ๋ฅ ๊ตฌํ
    let value = event.target.value.trim();
    // ์ด๋ฏธ ์๋ ฅ๋์ด ์๋ ํ๊ทธ์ธ์ง ๊ฒ์ฌํ์ฌ ์ด๋ฏธ ์๋ ํ๊ทธ๋ผ๋ฉด ์ถ๊ฐํ์ง ๋ง๊ธฐ
    // ์๋ฌด๊ฒ๋ ์๋ ฅํ์ง ์์ ์ฑ Enter ํค ์๋ ฅ์ ๋ฉ์๋ ์คํํ์ง ๋ง๊ธฐ
    if (event.key === "Enter" && !tags.includes(value) && value) {
      setTags([...tags, value]);
      // ํ๊ทธ๊ฐ ์ถ๊ฐ๋๋ฉด input ์ฐฝ ๋น์ฐ๊ธฐ
      event.target.value = "";
    } else if (event.key === "Enter" && !value) {
      event.target.value = "";
    }
  };

<TagsInput>
  <ul id="tags">
    {tags.map((tag, index) => (
      <li key={index} className="tag">
        <span className="tag_title">{tag}</span>
        <span
          className="tag_closeicon"
              onClick={() => removeTags(index)}
        >
          &times;
        </span>
      </li>
    ))}
  </ul>
  <input
     className="tag_input"
      type="text"
      onKeyUp={(event) => {
        addTags(event);
      }}
      placeholder="Press enter to add tags"
  />
</TagsInput>

```

### 2. Component ์คํ์ผ๋ง .

```css
Tag.js

const TagsInput = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid #efefef;
  border-radius: 15px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: bold;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 8px;
      margin: 0 8px 8px 0;
      background-color: #1da1f2;

      > .tag_closeicon {
        display: block;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 14px;
        font-size: 13px;
        margin-left: 8px;
        color: #1da1f2;
        border-radius: 50%;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }

  > .tag_input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
    ::placeholder {
      color: #ccc;
    }
  }

  &:focus-within {
    border: 1px solid #1da1f2;
  }
`;
```

<br />


### ๊ตฌํ ๋ฐฉ๋ฒ .

> useState ํ์ ์ด์ฉํ์ฌ tags์ ์ํ๋ฅผ ๊ด๋ฆฌํ๊ณ , initialTags ํจ์๋ก ๊ธฐ๋ณธ tag ๊ฐ์ ์ธํํ์์ต๋๋ค. ๊ณต๋ฐฑ์ด ์๋ ฅ์ด ๋์ง ์๊ฒ ํด์ฃผ๊ธฐ ์ํด trim() ํจ์ ์ฌ์ฉํ์๊ณ , ์ด๋ฏธ ์๋ ฅ๋์ด ์๋ ํ๊ทธ์ธ์ง ๊ฒ์ฌํ์ฌ ์ด๋ฏธ ์๋ ํ๊ทธ๋ผ๋ฉด ์ถ๊ฐํ์ง ์๊ธฐ ์ํด includes() ํจ์ ์ฌ์ฉํ์ฌ ํ์ธํ์์ต๋๋ค. Enter ํค๋ฅผ ํ์ฉํ์ฌ, ํ๊ทธ๋ฅผ์ถ๊ฐํ  ์ ์๋๋ก ๊ตฌํํ์์ผ๋ฉฐ, map ํจ์์ index๋ฅผ ์ ๋ฌ๋ฐ์ ํด๋ฆญ๋ ์ธ๋ฑ์ค ์ ๋ณด๋ฅผ ํ์ฉํด์ ์ญ์ ํ์์ต๋๋ค.

<br />

### ์ด๋ ค์ ๋ ์  ํด๊ฒฐ ๋ฐฉ๋ฒ .

> ๋ฐฐ์ด์ ์ฒซ ๋ฒ์งธ ์์์ ๋ํ ์ธ๋ฑ์ค๋ฅผ ๋ฐํํ๋ findIndex ํจ์๋ฅผ ์ฌ์ฉํ์ฌ index๋ฅผ ์ฐพ์ ์ญ์ ํด ์ฃผ๋ ๋ฐฉ์์ ์ฌ์ฉํ์์ง๋ง, ๋นํจ์จ์ ์ด๋ผ ํ๋จํ์ฌ ์ฃผ์ด์ง ํจ์์ ํ์คํธ๋ฅผ ํต๊ณผํ๋ ๋ชจ๋  ์์๋ฅผ ๋ชจ์ ์๋ก์ด ๋ฐฐ์ด๋ก ๋ฐํํ๋ filter ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ํจ์จ์ ์ ๋ก์ง์ ๊ตฌํํ์์ต๋๋ค.

```jsx
const removeTags = (indexToRemove) => {
  setTags(
    tags.filter((tag) => {
      return tag !== tags[indexToRemove];
    })
  );
};
```

<br />

### ์์ธํ ์คํ ๋ฐฉ๋ฒ .

> 1. map ํจ์๋ฅผ ์ฌ์ฉํ์ฌ tag๋ฅผ ์์ฑํ์์ต๋๋ค.<br />
> 2. Enter ํค๋ฅผ ์ฌ์ฉํ์ฌ tag๋ฅผ ์ถ๊ฐํ  ์ ์๋๋ก onKeyUp ํจ์๋ฅผ ์ฌ์ฉํ์์ต๋๋ค.<br />
> 3. ๊ณต๋ฐฑ ์๋ ฅ์ ๋ฐฉ์งํ๊ธฐ ์ํด trim ํจ์๋ฅผ ์ฌ์ฉํ์์ต๋๋ค.<br />
> 4. ์ค๋ณต๋ tag๋ฅผ ๊ฒ์ฌํ์ฌ ์ถ๊ฐ๋ฅผ ๋ง๊ธฐ ์ํด includes ํจ์๋ฅผ ์ฌ์ฉํ์์ต๋๋ค.<br />
> 5. true ๊ฐ๋ง ๋ฐํํ๋ ์๋ก์ด ๋ฐฐ์ด์ setTags์ ๋ฃ๊ณ  filter() ํจ์๋ฅผ ์ฌ์ฉํ์ฌ tag ์ญ์  ๊ธฐ๋ฅ์ ๊ตฌํํ์์ต๋๋ค.

<br />
<br />