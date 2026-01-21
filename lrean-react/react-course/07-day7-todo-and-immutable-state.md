# Day 7：可操作的 Todo 列表（慢慢来版）

> 💡 **今日目标**：在一个新页面里做出一个「可增删、可标记完成」的 Todo 列表。
>
> 我会尽量少用“看起来像公式”的写法，所有新符号都会用大白话解释。

今天主要是把你前面学的东西串起来：

- `useState` 管理列表
- `map` 渲染列表
- 事件处理（点击按钮）
- 父子组件之间通过 props 传数据、传函数

---

## 0. 先说几个你可能不熟悉的符号（看完再写代码）

在 React / TypeScript 代码里很常见这些符号：

1. `=>` 读作「变成」，比如：
   ```ts
   (x) => x + 1
   ```
   可以理解为「一个函数：拿到 x，返回 x + 1」。

2. `...`（展开运算符）
   ```ts
   const arr2 = [...arr1, 100]
   ```
   读作：「把 arr1 里面的东西一个个拿出来，再加上 100，变成一个新数组 arr2」。

3. 三元表达式 `条件 ? A : B`
   ```ts
   finished ? '已完成' : '未完成'
   ```
   读作：「如果 finished 是 true，就用 '已完成'，否则用 '未完成'」。

看不太懂没关系，**你可以先照着写**，用几天之后就会习惯了。

---

## 1. 新建页面：Day7TodoList

在 `src/pages` 目录下新建文件：`Day7TodoList.tsx`。

先写一个最简单的页面骨架：

```tsx
import SectionTitle from '../components/SectionTitle'

export default function Day7TodoList() {
  return (
    <div className="page-container">
      <SectionTitle title="Day 7：Todo 列表" />
      <p>这里将会放一个可操作的待办事项列表。</p>
    </div>
  )
}
```

然后：

1. 在 `App.tsx` 中引入并添加路由：
   ```tsx
   import Day7TodoList from './pages/Day7TodoList'
   // ...
   <Route path="/day7" element={<Day7TodoList />} />
   ```
2. 在导航栏里增加 Day7 链接。
3. 在 `Home.tsx` 的 days 数组里，已经有 Day7 的话就保持，有的话写成：
   ```ts
   { id: 7, name: 'Day7：可操作的 Todo 列表' }
   ```

确认：浏览器访问 `/day7` 能看到标题。

---

## 2. 在页面里先放一份“写死的” Todo 列表

先不用管添加 / 删除，先把「展示列表」做好。

在 `Day7TodoList` 组件里：

1. 定义一份**写死的**初始数据：

   ```tsx
   const initialTodos = [
     { id: 1, title: '看完 Day7 课程', finished: false },
     { id: 2, title: '实现一个可以勾选的 Todo 列表', finished: false },
     { id: 3, title: '把 Day7 作业提交给 AI 老师', finished: false },
   ]
   ```

2. 用 `useState` 把它放进状态里：

   ```tsx
   const [todos, setTodos] = useState(initialTodos)
   ```

3. 在 JSX 里用 `map` 渲染出来：

   ```tsx
   <ul>
     {todos.map((todo) => (
       <li key={todo.id}>
         [{todo.finished ? '已完成' : '未完成'}] {todo.title}
       </li>
     ))}
   </ul>
   ```

- `todos.map((todo) => (...))` 可以读作：「对 todos 里的每一项 todo，都画一行 `<li>`」。
- `key={todo.id}` 是 React 推荐的写法，我们 Day3 已经用过一次了。

此时页面应该能显示一串 Todo 列表，但还不能点。

---

## 3. 加一个输入框和“添加”按钮

我们希望可以在页面底部输入新的 Todo 文本，然后点击按钮把它加到列表里。

在 `Day7TodoList` 里继续写：

1. 为输入框内容准备一个状态：

   ```tsx
   const [input, setInput] = useState('')
   ```

2. 在 JSX 里加上输入框和按钮（放在列表下面）：

   ```tsx
   <div style={{ marginTop: '16px' }}>
     <input
       value={input}
       onChange={(e) => setInput(e.target.value)}
       placeholder="请输入新的待办事项"
     />
     <button style={{ marginLeft: '8px' }}>添加</button>
   </div>
   ```

3. 先确认输入框可以正常输入文字（`input` 状态会跟着变化）。

---

## 4. 实现“添加 Todo”的逻辑（一步步来）

我们希望点击「添加」按钮时：

1. 如果输入是空的，直接 `alert('请输入内容')`。
2. 否则：
   - 生成一个新的 todo 对象。
   - 把它加到 `todos` 数组的最后。
   - 然后清空输入框。

在组件里写一个函数（放在 `return` 上面）：

```tsx
const handleAdd = () => {
  if (!input.trim()) {
    alert('请输入内容再添加')
    return
  }

  const newTodo = {
    id: Date.now(), // 简单生成一个不重复的 id
    title: input,
    finished: false,
  }

  // 关键行：创建一个“新数组”，而不是在原数组上直接改
  setTodos([...todos, newTodo])

  setInput('')
}
```

然后把按钮改成：

```tsx
<button style={{ marginLeft: '8px' }} onClick={handleAdd}>
  添加
</button>
```

这里最重要的一句是：

```ts
setTodos([...todos, newTodo])
```

可以把它读作：
> 「新建一个数组，这个数组先放 `todos` 里原来的那些，再把 `newTodo` 加到最后，然后用这个新数组更新状态。」

这就是所谓的「不可变更新」，只是名字听起来高冷，实际上就是「不要原地改，重新建一个新的再替换」。

---

## 5. 提取 TodoItem 子组件（可选，但推荐）

现在列表逻辑都在 `Day7TodoList` 里，如果你觉得有点乱，我们可以把每一条 Todo 抽成一个小组件。

在 `src/components` 下新建文件：`TodoItem.tsx`：

```tsx
type TodoItemProps = {
  title: string
  finished: boolean
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ title, finished, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      <span>
        [{finished ? '已完成' : '未完成'}] {title}
      </span>
      <button style={{ marginLeft: '8px' }} onClick={onToggle}>
        切换状态
      </button>
      <button style={{ marginLeft: '8px' }} onClick={onDelete}>
        删除
      </button>
    </li>
  )
}
```

然后在 `Day7TodoList` 里引入并使用它：

```tsx
import TodoItem from '../components/TodoItem'
```

原来的：

```tsx
<li key={todo.id}>
  [{todo.finished ? '已完成' : '未完成'}] {todo.title}
</li>
```

改成：

```tsx
<TodoItem
  key={todo.id}
  title={todo.title}
  finished={todo.finished}
  onToggle={() => handleToggle(todo.id)}
  onDelete={() => handleDelete(todo.id)}
/>
```

> 注意：`onToggle={() => handleToggle(todo.id)}` 这里的 `() => ...` 可以理解为「先记住这个 id，等按钮被点了再执行 handleToggle」。

---

## 6. 实现“切换完成状态”和“删除”

### 6.1 删除 Todo

在 `Day7TodoList` 中添加一个函数：

```tsx
const handleDelete = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id))
}
```

解读：
- `todos.filter(...)` 的意思是「从 todos 里筛选出我想要保留的那几项」。
- 条件 `todo.id !== id` 读作：「把 id 和传入的不一样的都留下来」，也就是「把这个 id 对应的那一项删掉」。

### 6.2 切换完成状态

再加一个函数：

```tsx
const handleToggle = (id: number) => {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, finished: !todo.finished }
      }
      return todo
    })
  )
}
```

解读：
- `todos.map(...)`：对每个 todo 做一遍判断，得到一个新的数组。
- 如果是我们要找的那一条（`todo.id === id`）：
  - 用 `{ ...todo, finished: !todo.finished }` 创建一个新对象：
    - `...todo` 把原来的字段全都抄一遍。
    - `finished: !todo.finished` 把完成状态取反。
- 其他没被点到的 todo，就原样返回。

虽然看起来有点长，但逻辑其实是：
> 「把数组复制一份，只改其中一条的 finished 状态，最后用新数组替换旧的」。

---

## 7. 今日作业要求（比原来版本更“慢一点”，但更扎实）

1. 完成 `Day7TodoList` 页面：
   - 有一个列表展示 Todo。
   - 有输入框和「添加」按钮，可以添加新 Todo。
   - 每一项可以删除、可以切换完成状态。
2. 推荐抽出 `TodoItem` 组件，让列表更清爽。实在不想拆，也可以先把逻辑都写在一个组件里。 
3. 更新逻辑使用「新数组替换旧数组」的方式（`setTodos([...])`、`setTodos(todos.filter(...))`、`setTodos(todos.map(...))`）。

> 额外加分项：
> - 在列表上方显示统计信息，例如：「共 X 项，已完成 Y 项」。
> - 为已完成的 Todo 添加不同样式（如用浅色或加删除线）。

---

## ✅ 作业提交

完成后：

1. 在浏览器中访问 `/day7`，尝试：
   - 添加几条 Todo；
   - 切换完成状态；
   - 删除其中一条；
2. 确认页面没有报错，逻辑符合预期。
3. 然后像之前一样，对我说：**“Day7 完成”**。

我会帮你：
- 看看列表更新逻辑是否清晰；
- 提一点代码结构的小建议；
- 在 `scores.md` 中为 Day7 添加评分和评价。
