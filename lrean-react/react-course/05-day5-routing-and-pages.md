# Day 5：React Router 入门 & 多页面学习记录

## 今天的目标

- 知道 React Router 是干什么用的。
- 安装并在项目中接入 `react-router-dom`。
- 配置几个简单的路由，比如 `/day1`、`/day2`、`/day3`。
- 在页面顶部做一个简单的导航，让你可以随时回看每一天的作业。

> 说明：今天内容稍微多一点，但每一步都拆得很细，你可以慢慢来，不必一次做完。

---

## 1. React Router 是什么？

在浏览器中，不同的 URL 通常代表不同的页面，比如：

- `/`：首页
- `/about`：关于页
- `/login`：登录页

在单页应用（SPA）中，我们实际上只有一个 `index.html`，React 通过「前端路由」来决定：当前 URL 对应渲染哪个「页面组件」。

React Router 就是：

- 帮你把 URL（如 `/day2`）和页面组件（如 `Day2StateAndEvents`）关联起来的库；
- 提供 `<Link>`、`<Routes>`、`<Route>` 等组件，用来配置和跳转页面。

---

## 2. 安装 react-router-dom

在项目根目录 `C:\XGCode\XGLab\lrean-react` 下，运行：

```bash
pnpm add react-router-dom
```

安装完成后，我们就可以在项目中导入它提供的组件了。

---

## 3. 在 main.tsx 中接入 BrowserRouter

打开 `src/main.tsx`，大致内容类似：

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

现在我们需要：

- 从 `react-router-dom` 中导入 `BrowserRouter`；
- 用 `<BrowserRouter>` 把 `<App />` 包起来。

修改为：

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

这样，App 以及它下面的所有组件就都处在「路由环境」中了。

---

## 4. 在 App.tsx 中配置基础路由

我们希望：

- `/` 路径展示一个简单的 Home 页面（比如课程目录和说明）；
- `/day2` 展示 `Day2StateAndEvents` 页面；
- `/day3` 展示 `Day3ListsAndConditional` 页面；
- 后面有了 Day1Intro、Day4 等页面再逐步加上。

### 步骤 1：创建一个简单的 Home 页面组件

在 `src/pages` 下新建文件：`Home.tsx`，内容示例：

```tsx
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>XGLab React 学习主页</h1>
      <p>欢迎来到我的 React 学习记录。</p>

      <nav>
        <ul>
          <li>
            <Link to="/day2">Day2：组件状态 & 事件处理</Link>
          </li>
          <li>
            <Link to="/day3">Day3：列表渲染 & 条件渲染</Link>
          </li>
          {/* 将来这里还会加 Day1Intro、Day4 等链接 */}
        </ul>
      </nav>
    </div>
  )
}

export default Home
```

> 暂时我们先把 Day2 和 Day3 挂上去，等你把 Day1 抽成页面后，可以再加 `/day1`。

### 步骤 2：在 App.tsx 中配置 Routes

打开 `src/App.tsx`，用路由来决定要显示哪个页面组件。

示例（你可以按需要微调）：

```tsx
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Day2StateAndEvents from './pages/Day2StateAndEvents'
import Day3ListsAndConditional from './pages/Day3ListsAndConditional'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>XGLab React 学习记录</h1>
        <nav>
          <Link to="/">首页</Link> | <Link to="/day2">Day2</Link> |{' '}
          <Link to="/day3">Day3</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day2" element={<Day2StateAndEvents />} />
          <Route path="/day3" element={<Day3ListsAndConditional />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
```

要点说明：

- `<Routes>`：包裹所有 `<Route>`，代表「这里根据路径来切换页面」。
- `<Route path="/day2" element={<Day2StateAndEvents />} />`：
  - 当 URL 是 `/day2` 时，渲染 `Day2StateAndEvents`。
- `<Link to="/day2">Day2</Link>`：
  - 点击后会把地址栏改为 `/day2`，并触发路由切换，但不会整页刷新。

---

## 5. 把 Day1 也做成页面（进阶，可分步完成）

这一步不必一次做完，可以在你有时间的时候慢慢来。

目标：把 Day1 的内容也变成一个页面，比如 `Day1Intro`，并挂到 `/day1` 路由上。

建议步骤：

1. 新建 `src/pages/Day1Intro.tsx`：
   - 把你之前在 `App.tsx` 中写的 Day1 内容复制过来；
   - 稍微根据现在的结构做一点调整（比如去掉 `<title>`，只保留页面主体）。
2. 在 `Home.tsx` 和 `App.tsx` 中：
   - 为 Day1 添加一个链接和一个路由：
     - Home 中加：`<Link to="/day1">Day1：自我介绍页</Link>`
     - App 中的 `<Routes>` 里加一条对应的 `<Route>`。

当你完成这一步时，你的学习记录就真正变成「多页面应用」了，每一天都有一个专属页面，可以随时回看。

---

## 6. 今日实战练习

1. 安装并接入 React Router：
   - `pnpm add react-router-dom`
   - 在 `main.tsx` 中用 `<BrowserRouter>` 包裹 `<App />`。
2. 新建 `Home.tsx` 页面，包含到 Day2 / Day3 的链接。
3. 修改 `App.tsx`，添加：
   - `/`、`/day2`、`/day3` 三个基础路由；
   - 页面顶部导航。
4. 启动项目后，手动在浏览器中：
   - 点击顶部导航；
   - 或直接在地址栏输入 `/day2`、`/day3`，确认页面能够正确切换。

---

## 7. 今日作业

1. 完成「进阶」部分：把 Day1 内容抽成 `Day1Intro` 页面并挂到 `/day1`。
2. 给导航加一点样式（可以简单使用 `App.css`）：
   - 当前激活的链接突出显示（可以先不用实现复杂的 active 效果，简单加粗即可）。
3. 完成后，你可以把：
   - `main.tsx`
   - `App.tsx`
   - `pages/Home.tsx`
   - `pages/Day1Intro.tsx`（如果已经创建）
   一起贴给我，我会在 `scores.md` 中为 Day5 打分并帮你检查路由结构是否合理。 

