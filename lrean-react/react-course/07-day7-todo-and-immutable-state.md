# Day 7：可操作的 Todo 列表与不可变数据

> 💡 **今日目标**：在一个页面里完成「增 / 删 / 标记完成」的 Todo 列表，真正体验 React 中列表状态更新和不可变数据的写法。

你会用到之前学过的所有东西：
- `useState` 管理状态
- 列表渲染 `map`
- 条件渲染
- 父子组件通信（通过 props 传递回调）
- 单向数据流 + 状态提升

---

## 1. 核心概念：为什么要“不可变更新”？

在 React 里更新列表，不推荐直接修改原数组，而是：
- 使用 `map` / `filter` / 展开运算符 `...` 创建一个 **新数组**，然后 `setTodos(newArray)`。

这样做的好处：
- React 更容易判断哪些地方需要重新渲染。
- 代码逻辑更清晰，不容易出现“改了但界面没更新”的问题。

比如：
- 添加：`setTodos([...todos, newTodo])`
- 删除：`setTodos(todos.filter(todo => todo.id !== id))`
- 切换完成状态：`setTodos(todos.map(todo => ...))`

---

## 2. 练习任务：一个可操作的 Todo 列表页

我们来做一个独立页面：`Day7TodoList`，支持：
1. 录入一个新待办（输入框 + 按钮）。
2. 显示待办列表（标题 + 完成状态）。
3. 每一项可以：
   - 点击按钮切换「已完成 / 未完成」。
   - 点击删除按钮，从列表中移除。

你会做两个层级：
- 页面组件：`src/pages/Day7TodoList.tsx`
- 子组件：`src/components/TodoItem.tsx`

> 提示：Day3 的静态 Todo 列表可以作为起点，这次把它变成真正的可操作列表。

---

## 3. 第一步：定义 Todo 类型和页面骨架

在 `src/pages/Day7TodoList.tsx` 中：

1. 定义 `Todo` 类型：
   - `id: number`
   - `title: string`
   - `finished: boolean`
2. 使用 `useState<Todo[]>` 保存 todo 列表。
3. 再用一个 `useState<string>` 保存输入框内容。

你可以先写出页面骨架：标题、输入框、按钮、列表区域，先用假数据渲染几个 Todo，确保页面结构 OK 再加交互。

---

## 4. 第二步：提取 `TodoItem` 子组件

在 `src/components/TodoItem.tsx` 中：

1. 接收的 props 建议包括：
   - `todo: Todo`
   - `onToggle: () => void`（切换完成状态）
   - `onDelete: () => void`（删除当前 Todo）
2. 根据 `todo.finished` 来决定样式或文字：
   - 比如「[已完成] 学习 React」/「[未完成] 学习 React」。
3. 渲染两个按钮：
   - 切换状态按钮（例如文案为「标记完成」或「标记未完成」）。
   - 删除按钮。

页面组件 `Day7TodoList` 中通过 `map` 渲染多个 `TodoItem`，并为每一项传入对应的 `onToggle`、`onDelete` 回调。

---

## 5. 第三步：实现添加 / 删除 / 切换逻辑

### 5.1 添加 Todo

在页面组件中：
1. 输入框通过 `value` + `onChange` 变成受控组件。
2. 点击「添加」按钮时：
   - 如果输入为空，给出简单提示（比如 `alert` 或在页面上显示一行文字）。
   - 如果不为空：
     - 构造一个新的 `Todo` 对象：
       - `id` 可以使用当前时间戳 `Date.now()` 或在已有最大 id 上加 1。
       - `title` 来自输入框。
       - `finished` 初始为 `false`。
     - 使用不可变更新：`setTodos([...todos, newTodo])`。
     - 清空输入框。

### 5.2 删除 Todo

1. 在页面组件中写一个函数 `handleDelete(id: number)`。
2. 实现方式：
   - `setTodos(todos.filter(todo => todo.id !== id))`
3. 把这个函数通过 props 传给 `TodoItem`，在 `onDelete` 中调用。

### 5.3 切换完成状态

1. 在页面组件中写一个函数 `handleToggle(id: number)`。
2. 实现方式：
   - `setTodos(todos.map(todo => todo.id === id ? { ...todo, finished: !todo.finished } : todo))`
3. 同样把它传进 `TodoItem`，在 `onToggle` 中调用。

这样你就完整体验了：父组件集中管理 `todos` 状态，子组件只负责展示和触发动作。

---

## 6. 接入路由和首页

和之前的 Day 页面一样：

1. 在 `src/pages` 下创建 `Day7TodoList.tsx`，导出默认组件。
2. 在 `App.tsx` 中添加路由：
   - `import Day7TodoList from './pages/Day7TodoList'`
   - 在 `<Routes>` 中添加：`<Route path="/day7" element={<Day7TodoList />} />`
   - 在导航栏中补充 Day7 链接。
3. 在 `Home.tsx` 中的 days 数组里添加一项：
   - 文案类似：`Day7：可操作的 Todo 列表`。

---

## 7. 今日作业要求

1. 完成 `Day7TodoList` 页面：
   - 可以添加 Todo。
   - 可以切换完成状态。
   - 可以删除 Todo。
2. 使用不可变方式更新列表（不要直接修改原数组）。
3. 使用独立的 `TodoItem` 组件，使页面结构清晰。

> 额外加分项：
> - 在列表顶部显示统计信息，例如「共 X 项，已完成 Y 项」。
> - 为已完成的 Todo 添加不同的样式（如加删除线或变浅色）。

---

## ✅ 作业提交

完成后，像之前一样：

1. 确保 `/day7` 路由可以正常访问。
2. 在页面上试一试：添加几个 Todo，切换状态、删除。
3. 没有报错、逻辑符合预期。
4. 然后对我说：`Day7 完成`。

我会帮你：
- 检查 `Todo` 类型和状态更新写法是否合理。
- 看你的组件拆分是否清晰。
- 在 `scores.md` 中为 Day7 添加评分和评价。
