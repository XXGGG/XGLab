# Lrean-React

一个用于系统学习 **React + TypeScript** 的练习项目，由 Vite 搭建。  
配合 `react-course` 目录下的课程 Markdown 文件，一边写代码一边记录学习过程。

## 技术栈

- React 19
- TypeScript
- Vite（Rolldown 版本）
- React Router

## 目录结构

大致结构如下：

- `react-course/`：课程内容与学习记录  
  - `00-outline.md`：整体学习大纲  
  - `01-day1-react-and-jsx.md`：Day1 – React 项目结构 & JSX  
  - `02-day2-state-and-events.md`：Day2 – 组件状态 & 事件处理  
  - `03-day3-lists-and-conditional.md`：Day3 – 列表渲染 & 条件渲染  
  - `04-day4-components-and-props.md`：Day4 – 组件拆分 & props  
  - `05-day5-routing-and-pages.md`：Day5 – 路由与多页面  
  - `06-day6-props-and-data-flow.md`：Day6 – 组件通信与数据流  
  - `scores.md`：每天课程的评分与评价  
- `src/`：实际代码
  - `pages/`：按天拆分的页面组件（Day1 / Day2 / Day3 / Home 等）
  - `components/`：可复用组件（Counter、TextMirror、LessonCard、SectionTitle 等）
  - `App.tsx`：应用路由与导航栏
  - `main.tsx`：应用入口，挂载 React 并配置 `BrowserRouter`

## 本地运行

在项目根目录（`lrean-react`）下：

```bash
pnpm install
pnpm dev
```

然后在浏览器访问控制台输出的本地地址（通常是 `http://localhost:5173`）。

## 学习方式

1. 按照 `react-course` 中的 Day1、Day2、Day3... 顺序学习。
2. 每天的课程都有对应的页面组件保存在 `src/pages` 下，不会覆盖之前作业。
3. 完成一天的作业后，会在 `react-course/scores.md` 中记录评分与文字评价。

这个项目主要用于打基础：熟悉 React 组件、状态、props、列表渲染、路由以及简单的 TypeScript 类型使用，为后续 Next.js、Tailwind CSS、shadcn/ui、Tauri 等学习做铺垫。
