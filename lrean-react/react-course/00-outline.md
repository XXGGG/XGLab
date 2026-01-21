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

> 前 6 天已经按照下面的路线完成，后面的安排会在不推翻前面成果的前提下，逐步引入 TypeScript、Tailwind、shadcn/ui 和 Tauri。

### Day 1：React 项目结构 & JSX 入门（已完成）

- 认识 Vite + React 项目结构  
- 理解 `main.tsx` 和 `App.tsx` 的作用  
- JSX 基本语法：插值、标签、`className`  
- 写一个简单的「自我介绍」页面组件  

### Day 2：组件状态 & 事件处理（已完成）

- 使用 `useState` 管理组件内部状态  
- 事件绑定：`onClick`、`onChange` 等  
- 用 state 驱动 UI（计数器、输入框镜像）  
- 从 Day2 开始，把每天练习放在独立的页面组件中  

### Day 3：列表渲染 & 条件渲染（已完成）

- 使用 `map` 渲染列表  
- 为列表元素添加合适的 `key`  
- 条件渲染：`&&`、三元运算符  
- 用简单的类型（如 `Course`、`Todo`）描述列表数据结构，为后面 TS 做铺垫  

### Day 4：组件拆分 & props（已完成）

- 拆分页面成多个可复用组件  
- 使用 props 传递数据和文案  
- 设计通用组件：如 `SectionTitle`、`LessonCard`、`EmptyState`  
- 理解「页面组件负责组织结构，小组件负责展示」的分工  

### Day 5：React Router 与多页面应用（已完成）

- 安装并配置 `react-router-dom`  
- 使用 `BrowserRouter`、`Routes`、`Route` 组织多页面  
- 使用 `NavLink` 和 `Link` 实现导航和当前页高亮  
- 把 Day1、Day2、Day3 等练习拆分成独立路由页面  

### Day 6：组件通信与数据流（已完成）

- 理解 React 的单向数据流思想  
- 状态提升（Lifting State Up）：在父组件中集中管理状态  
- 父组件通过 props 把数据和回调函数传给子组件  
- 子组件通过调用回调函数，把修改请求「冒泡」回父组件  
- 用一个「个人信息预览 + 编辑」例子，串联这一整套模式  

### Day 7：可操作的 Todo 列表与不可变更新

- 设计并实现一个 Todo 列表页面  
- 添加 / 删除 / 切换完成状态等操作  
- 使用不可变方式更新数组：`map` / `filter` / 展开运算符 `...`  
- 抽离 `TodoItem` 子组件，页面只负责管理列表状态和业务逻辑  

### Day 8：TypeScript 基础（语言层面）

- 基本类型：`string`、`number`、`boolean`、数组和对象  
- `type` / `interface` 的使用和差异  
- 函数参数与返回值的类型标注  
- 可选属性、联合类型等在日常代码中的典型用法  

### Day 9：React + TypeScript 实战（给项目“加类型”）

- 为现有组件系统地补全 props 类型  
- 为 state 和事件处理函数声明合适的类型  
- 提炼出常用的类型别名（如 `User`、`Todo`、`Course` 等）并复用  
- 在 Day7 的 Todo 列表中加强类型约束，避免常见的类型错误  

### Day 10：Tailwind CSS、shadcn/ui 与 Tauri 概览

- Tailwind CSS 入门：安装配置、常用原子类、在 React 组件中使用  
- shadcn/ui 入门：安装、导入基础组件（Button、Input 等），美化一个小表单或页面  
- Tauri 概览：  
  - Tauri 是什么，与 Electron 的区别  
  - 使用现有 React 项目作为前端界面  
  - 了解 Tauri 项目结构和基本打包思路（概念为主，不强制实操）  

---

> 建议：从 `01-day1-react-and-jsx.md` 开始，按顺序往下学。每学完一天的作业，可以把你的代码贴给我，一起检查和改进；如果你觉得某一天的内容难度有点跳跃，我们可以再在后面插入补强课，而不推翻你之前已经完成的成果。

