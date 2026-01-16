# Day 1：React 项目结构 & JSX 入门

## 今天的目标

- 看懂 Vite + React 项目的基本结构。
- 知道 `main.tsx` 和 `App.tsx` 的角色（你的项目是 TS）。
- 掌握 JSX/TSX 的基本写法，能写一个简单页面。

---

## 1. 项目结构快速认识

你的 Vite + React + TS 项目（learan-react）大致结构：

- `index.html`：单页应用入口 HTML。
- `src/main.tsx`：React 应用入口，把根组件挂到页面上。
- `src/App.tsx`：根组件（你主要写页面逻辑的地方）。
- `src/index.css` / `src/App.css`：样式文件。

典型的 `main.tsx`（仅理解即可，不必一模一样）：

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

简单理解：

- `ReactDOM.createRoot(...).render(...)`：把 `<App />` 这个组件渲染到 `index.html` 中 id 为 `root` 的 div。
- `<App />` 就是你的页面根组件。

---

## 2. JSX/TSX 是什么？

JSX = JavaScript + XML/HTML 的语法糖。TSX = TypeScript + JSX。

你可以在 TS 中写类似 HTML 的结构。

对比 Vue：

- Vue：在 `<template>` 中写 HTML。
- React：在函数的 `return` 里写 JSX/TSX。

一个最简单的组件（App.tsx）：

```tsx
function App() {
  const name = 'XGLab'

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>欢迎来到 React 世界</p>
    </div>
  )
}

export default App
```

要点：

- JSX 中使用 JS/TS 变量：用 `{}` 包起来，例如 `{name}`。
- JSX 最外层只能有一个根元素（这里是最外层的 `<div>`）。
- React 中用 `className` 替代 `class`，例如：`<div className="container">...</div>`。

---

## 3. 第一个小页面：自我介绍页

现在在你的 `App.tsx` 中尝试写一个「自我介绍」页面。

示例结构（你可以自由发挥）：

```tsx
function App() {
  const name = '你的名字'
  const skills = ['HTML', 'CSS', 'JavaScript', 'Vue']

  return (
    <div>
      <h1>你好，我是 {name}</h1>
      <p>这是我在 XGLab 的 React 学习之旅。</p>

      <h2>我目前会的技能：</h2>
      <ul>
        <li>{skills[0]}</li>
        <li>{skills[1]}</li>
        <li>{skills[2]}</li>
        <li>{skills[3]}</li>
      </ul>
    </div>
  )
}

export default App
```

你可以先这样写，确认页面能正确显示。

---

## 4. JSX/TSX 中的一些规则

1. **只能返回一个根元素**

   - ✅ 正确：
     ```tsx
     return (
       <div>
         <h1>标题</h1>
         <p>内容</p>
       </div>
     )
     ```
   - ❌ 错误（两兄弟没有包起来）：
     ```tsx
     return (
       <h1>标题</h1>
       <p>内容</p>
     )
     ```

2. **使用 `className` 而不是 `class`**

   - HTML 中是 `class`，JSX/TSX 中要写 `className`：
     ```tsx
     <div className="container">内容</div>
     ```

3. **表达式用 `{}` 包起来**

   - 可以写变量、函数调用、简单运算等：
     ```tsx
     <p>明年是 {2024 + 1} 年</p>
     ```

---

## 5. 今日实战练习

在 `App.tsx` 中完成以下内容：

1. 写一个标题，显示「XGLab React 学习首页」。
2. 用一个变量保存你的昵称，并在页面中显示。
3. 定义一个数组 `courses`，里面有几门你想学的技术，如 `['React', 'TypeScript', 'Tailwind', 'Tauri']`。
4. 先不用循环，直接用多个 `<li>` 展示这个数组中的每一项（像上面的 skills 那样直接写索引）。
5. 给最外层的 `div` 加一个 `className`，比如 `"app-container"`，并在 `src/App.css` 或 `src/index.css` 里简单写点样式（比如居中、背景色）。

---

## 6. 今日作业

- 把你写好的 `App.tsx` 代码整理好。
- 确保开发服务器已启动（`pnpm dev`），能在浏览器里看到你的自我介绍页。
- 作业提交方式（给我看）：
  - 把 `App.tsx` 的代码复制粘贴发给我；
  - 或者简单描述：你页面里有哪些内容，我可以帮你一起看看还能怎么改得更好。

