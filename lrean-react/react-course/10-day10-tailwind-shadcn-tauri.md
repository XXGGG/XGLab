# Day 10：Tailwind + shadcn/ui + Tauri 概览（开眼界日）

> 💡 **今日目标**：
> - 知道 Tailwind 是什么，能在项目里用几个常见的样式类；
> - 大致了解 shadcn/ui 是什么，能用一个 Button 或 Input；
> - 知道 Tauri 大概是干嘛的，给以后做桌面应用留个印象；
>
> 不要求全部都学精，更像是「带你逛一圈」，以后想深入时不至于完全陌生。

---

## 1. Tailwind CSS：用类名堆出样式

Tailwind 的核心思想：

> 用很多有含义的类名，直接写在 `className` 里，就能完成布局和样式，而不是写传统的 `.css` 文件。

例如：

```tsx
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  提交
</button>
```

大致含义：
- `px-4`：左右 padding = 4 单位。
- `py-2`：上下 padding = 2 单位。
- `bg-blue-500`：背景颜色是蓝色 500 阶档。
- `text-white`：文字颜色白色。
- `rounded`：有圆角。

### 1.1 安装与配置（概念层面）

在真实项目中，你需要：

1. 按 Tailwind 官方文档安装依赖（一般是 `tailwindcss`、`postcss` 等）。
2. 创建并配置 `tailwind.config.js`。
3. 在入口 CSS 里引入：
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

由于你的项目当前重点还在 React + TS 上，这里我们不强制你立刻装 Tailwind，可以把这部分当成预习：
- 有一天你觉得写 CSS 太麻烦了，就可以回来看这节课，然后按官方文档一步步装。

### 1.2 在组件中使用 Tailwind（思路）

一旦配置好 Tailwind，你就可以在任意组件中写：

```tsx
function TailwindDemo() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Tailwind 示例</h1>
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        点我
      </button>
    </div>
  )
}
```

- `min-h-screen`：最小高度填满整个屏幕。
- `hover:bg-green-600`：鼠标悬停时背景变更深。

你可以尝试把 Day1 或 Home 页的样式改用 Tailwind 实现，这样会比纯手写 CSS 更快。

---

## 2. shadcn/ui：在 Tailwind 之上提供现成组件

shadcn/ui 是一个基于 Tailwind 的组件库，可以理解为：

> 有人帮你把 Button、Input、Dialog 等常见组件，提前用 Tailwind 写好，你只需要拿来用，再根据需要微调样式。

### 2.1 使用方式（概念）

典型步骤是：

1. 安装相关依赖。
2. 运行一个 CLI 命令，选择你想要的组件，比如 Button。
3. 它会把对应的组件源码复制到你的项目里（而不是像传统 UI 库那样“黑盒子”）。

这样你可以：
- 像用自己写的组件一样使用它；
- 同时也可以随时打开源码查看或调整细节。

### 2.2 一个 Button 的使用示例

假设你已经通过 shadcn/ui 引入了一个 Button 组件，你的代码可能长这样：

```tsx
import { Button } from "@/components/ui/button"

function ShadcnDemo() {
  return (
    <div className="p-4">
      <Button>普通按钮</Button>
      <Button variant="outline" className="ml-2">描边按钮</Button>
    </div>
  )
}
```

你可以先记住两个点：
- shadcn/ui 适合在项目已经有 Tailwind 的前提下使用。
- 它会帮你省掉大量写基础界面的时间，专注在业务逻辑上。

---

## 3. Tauri：让前端代码跑在桌面上

Tauri 是一个用来做桌面应用的框架，可以理解为：

> 用你已经会的前端技术（HTML / CSS / JS / React），包一层外壳，做成 Windows / macOS 应用程序。

和 Electron 比较：
- Electron 使用的是完整的 Chromium 和 Node.js，体积通常比较大。
- Tauri 利用系统自带的 WebView，体积往往更小，性能更好一些。

### 3.1 和 React 的关系

- 你可以把现在的 React 项目当成「界面层」。
- Tauri 负责：
  - 启动一个窗口；
  - 加载你的构建产物（例如 `dist/index.html`）。
- 后面如果想要访问系统能力（文件、通知等），可以通过 Tauri 提供的 API 完成。

### 3.2 你现在需要做到什么程度？

在当前阶段，我只希望你：

1. 知道「有 Tauri 这么个东西」。
2. 大致理解：
   - 以后想把现在的 React 学习项目“变成桌面应用”，Tauri 是一个可以考虑的方案；
   - 真正动手之前，需要先学一点 Rust 基础（因为 Tauri 的后端部分用的是 Rust），但这可以放在很后面。

不用现在就安装或上手，等你在 Web 端更熟练之后，再专门开一个「Tauri + Rust 入门」的系列会更合适。

---

## 4. 今日建议

因为 Day10 更偏向「开眼界」，你可以按自己的精力选择：

1. **必看部分**：
   - 理解 Tailwind / shadcn/ui / Tauri 各自解决什么问题。
2. **建议实操**：
   - 在当前项目里随便挑一个页面，尝试用 Tailwind 重写或增强一点样式（前提是你有精力并且愿意折腾配置）。
3. **可选阅读**：
   - shadcn/ui 的官方文档和 Tauri 官网，感受一下他们的 Demo。

---

## ✅ 这一整个 10 天之后，你学到了什么？

结合前面 9 天的内容，你现在已经：

- 会搭建并运行一个 React + TypeScript + Vite 项目；
- 掌握了：
  - JSX、组件和 props；
  - `useState` 状态管理；
  - 列表渲染与条件渲染；
  - 组件拆分和父子组件通信（包括状态提升）；
  - React Router 路由与多页面应用；
  - 使用 TypeScript 为数据和组件 props 加类型；
  - 实现一个可操作的 Todo 列表（增删改状态）。
- 对 Tailwind、shadcn/ui、Tauri 有了初步认识，知道以后可以往哪些方向继续深入。

这已经完全配得上「一个前端自学者的 React 入门」了。

后续如果你愿意，我们可以：
- 单独开一套关于 `useEffect` 和数据请求的课程；
- 再开一套 Tailwind + shadcn/ui 的实战美化课程；
- 最后再进入 Tauri + Rust，把你的前端技能带到桌面应用的世界里。
