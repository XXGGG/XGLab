# XGLab

个人前端学习实验室，用来系统学习并实践：

- React / TypeScript
- Next.js
- Tailwind CSS / shadcn/ui
- 以及之后可能接触的 Node.js、Tauri 等

当前阶段的重点是 **React + TypeScript 基础**，所有练习项目都会放在这个目录下，方便统一管理和回顾学习轨迹。

## 目录概览

- `lrean-react/`：当前正在进行的 React 学习项目
  - 使用 React + TypeScript + Vite
  - 内置按天拆分的课程 Markdown（在 `react-course/` 中）
  - 对应的代码页面位于 `src/pages/`

后续计划：

- 在 `XGLab` 下新增 `next-learning/`、`tauri-learning/` 等目录，用于不同技术栈的练习。
- 所有子项目共享同一个 Git 仓库，作为完整的学习时间线。

## 使用方式

1. 克隆仓库：

   ```bash
   git clone <this-repo-url>
   cd XGLab
   ```

2. 进入具体子项目目录，例如当前的 React 项目：

   ```bash
   cd lrean-react
   pnpm install
   pnpm dev
   ```

3. 在浏览器中访问本地开发地址（通常是 `http://localhost:5173`）。

## 目标

- 为自学者提供一个持续成长的「代码档案馆」。
- 每个子项目都尽量做到：
  - 有清晰的课程或练习目标；
  - 有可运行的代码；
  - 有简单的说明文档，便于日后复习。
