# Day 9：React + TypeScript 实战（给现有组件“加类型”）

> 💡 **今日目标**：把你已经会写的 React 组件，用 TypeScript “标上标签”，让编辑器帮你挡掉更多低级错误。
>
> 不会有太多新概念，主要是把 Day8 的语法用在真实项目里。

---

## 1. 总体思路

今天我们不新建太多花哨的页面，而是：

1. 选几个你已经在用的组件（比如 `SectionTitle`、`LessonCard`、`TodoItem`）。
2. 给它们的 props 加上合适的类型。
3. 给 Day7 的 Todo 列表补上 `Todo` 类型，让列表状态更清晰。

这样做的好处是：
- 你不需要一边学语法一边想 UI，专心在「给已有代码加类型」这件事上。

---

## 2. 回顾：组件 props 类型的基本写法

最常用的写法就是：

```ts
type MyComponentProps = {
  title: string
  count: number
  highlight?: boolean
}

function MyComponent({ title, count, highlight }: MyComponentProps) {
  // ...
}
```

- `type XxxProps = { ... }`：为组件的 props 定义一个类型。
- 在函数参数里用解构拿到各字段。
- 可选字段用 `?`。

你之前在多个组件中都已经用过这一套，所以今天只是系统复习 + 应用。

---

## 3. 给 SectionTitle 补全和检查类型

打开 `src/components/SectionTitle.tsx`，检查：

1. 是否已经有类似这样的类型定义：
   ```ts
   type SectionTitleProps = {
     title: string
   }
   ```
2. 组件定义是否使用了这个类型：
   ```ts
   export default function SectionTitle({ title }: SectionTitleProps) {
     // ...
   }
   ```

如果已经是这样，就说明你对这部分已经掌握得不错，可以直接过。

---

## 4. 为 Todo 列表定义统一的 Todo 类型

打开 `Day7TodoList` 页面（`src/pages/Day7TodoList.tsx`）：

1. 在文件顶部（组件外面）加上：

   ```ts
   type Todo = {
     id: number
     title: string
     finished: boolean
   }
   ```

2. 把 `initialTodos` 的数组改成使用 `Todo` 类型：

   ```ts
   const initialTodos: Todo[] = [
     { id: 1, title: '看完 Day7 课程', finished: false },
     // ...
   ]
   ```

3. `useState` 里也可以显式写上类型（可选）：

   ```ts
   const [todos, setTodos] = useState<Todo[]>(initialTodos)
   ```

这样一来，只要你在列表里不小心少写了某个字段，或者写错类型，TS 都会立刻提醒你。

---

## 5. 为 TodoItem 组件加上强类型 props

打开 `src/components/TodoItem.tsx`，把 props 类型补充完整：

```tsx
type TodoItemProps = {
  title: string
  finished: boolean
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ title, finished, onToggle, onDelete }: TodoItemProps) {
  // ...
}
```

如果你愿意，也可以直接用 `Todo` 类型，而不是拆成独立字段：

```tsx
type TodoItemProps = {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  // 使用 todo.title / todo.finished
}
```

根据你自己的喜好选择一种，两种都对。

---

## 6. 检查事件处理函数的类型推断

在很多情况下，你不需要手动写事件函数的类型，TS 会自动帮你推断。

比如：

```tsx
const handleAdd = () => {
  // ...
}

<button onClick={handleAdd}>添加</button>
```

这里 `handleAdd` 的类型会自动被推断成「不接收参数，返回 `void` 的函数」，你不需要自己写 `(): void`。

只有在场景比较复杂（例如复用函数、从组件外传进来的回调）时，才会考虑手动写类型。

今天的目标更偏向于：
- 让 `Todo`、`User`、`LessonCard` 等这些「领域里的东西」有清晰的类型；
- 组件的 props 有自己的 `XxxProps` 类型。

---

## 7. 给其他组件也补上类型（选择性完成）

如果你完成得比较快，可以顺手把其他几个组件也检查一遍：

- `LessonCard`：标题、描述、可能的扩展信息。
- `EmptyState`：提示文案是否必填，是否有可选的图标字段等。
- `UserProfile` / `EditProfile`：确保 `User` 类型里每个字段都写清楚了类型。

做这些事情时，有一个简单判断标准：
> “如果我把这个组件给别人用，仅看类型就能猜出这个组件需要什么数据、会干什么事吗？”

如果答案是「大致能看懂」，那就已经很棒了。

---

## 8. 今日作业要求

1. 为 Day7 Todo 列表补上：
   - `type Todo` 类型定义；
   - `initialTodos: Todo[]`；
   - `useState<Todo[]>`（可选，但推荐）。
2. 为 `TodoItem` 补上 props 类型。
3. 至少挑 1–2 个其它组件（例如 `LessonCard`、`UserProfile`），检查并完善它们的 props 类型。

完成后，你的项目会变成一个：
- 组件有清晰职责；
- 数据有明确类型；
- 编辑器能帮你提前发现不少小错误；

的「小型 React + TypeScript 项目」。

---

## ✅ 今日目标回顾

只要你今天做到：

- 能读懂并写出简单的 `XxxProps` 类型；
- 能为列表数据（如 Todo）定义一个统一的类型；
- 感受到「加上类型后，IDE 能帮我纠错」这件事情；

那么你已经完成了从「React + 一点点 TS」到「真正意义上的 React + TypeScript 入门」的跨越。
