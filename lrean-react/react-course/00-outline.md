# React 全栈路线 10 天学习计划（纲要）

> 前提：你已安装好一个 React + Vite 项目，并能在浏览器中访问。

## 使用说明

- 每天学习时长：建议 1–2 小时。
- 每天包括：
  - 学习目标（今天要搞懂什么）
  - 知识点（简明讲解）
  - 实战练习（跟着敲）
  - 今日作业（自己独立完成的小任务）
- 推荐顺序：先看当日课程（比如 `01-day1-*.md`），边看边在现有 React 项目里写代码。

## 总体路线（10 天）

### Day 1：React 项目结构 & JSX 入门

- 认识 Vite + React 项目结构
- 理解 `main.jsx`/`main.tsx` 和 `App.jsx`/`App.tsx` 的作用
- JSX 基本语法：插值、标签、style、className
- 写一个简单的「页面组件」

### Day 2：组件状态 & 事件处理

- `useState`：在函数组件中管理状态
- 事件绑定：`onClick`、`onChange` 等
- 用 state 驱动 UI（计数器、输入框）
- 从 Day2 开始，把每天的练习放在独立的「页面组件」里，为后续多页面路由做准备

### Day 3：列表渲染 & 条件渲染 & 简单表单

- 使用 `map` 渲染列表
- 为列表元素添加 `key`
- 条件渲染：`&&`、三元运算符
- 简单表单：受控组件（输入框）

### Day 4：组件拆分 & 父子组件通信

- 拆分页面成多个组件
- props 传递数据
- 用回调函数实现「子组件通知父组件」

### Day 5：React Router & 数据请求

- 使用 `react-router-dom` 配置多页面
- 路由跳转（Link、useNavigate），把 Day1/Day2/Day3 等页面挂到不同路由上
- 使用 `fetch` 或 `axios` 请求数据
- 在 `useEffect` 中发请求，处理加载中和错误

### Day 6：TypeScript 基础

- 基本类型（string、number、boolean、array、object）
- interface / type
- 函数的参数和返回值类型
- 联合类型、可选属性

### Day 7：React + TypeScript 实战

- 在 React 中添加 TS 支持（或创建 TS 模板项目）
- 为组件 props 声明类型
- 为 state 和事件处理函数声明类型
- 用 TS 改写一个小组件

### Day 8：Tailwind CSS 入门

- 安装与配置 Tailwind
- 基本原子类（布局、颜色、间距、排版）
- 在 React 组件中使用 Tailwind 美化页面

### Day 9：shadcn/ui 组件库

- 安装 shadcn/ui
- 使用基础组件：Button、Input、Dialog 等
- 组合组件打造一个简单表单页面

### Day 10：Tauri 概览与桌面应用思路

- Tauri 是什么，与 Electron 的区别
- 用现有 React 项目作为前端
- 了解 Tauri 项目结构
- 将 React 构建结果接入 Tauri（概念层面 + 参考命令）

---

> 建议：从 `01-day1-react-and-jsx.md` 开始，按顺序往下学。每学完一天的作业，可以把你的代码贴给我，一起检查和改进。

