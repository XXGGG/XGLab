# Day 2：组件状态 & 事件处理

## 今天的目标

- 理解组件为什么需要「状态」。
- 掌握 `useState` 的基本用法。
- 学会在 React 中绑定事件，实现可交互组件。

---

## 1. 为什么需要状态？

页面需要随着用户操作变化，比如：

- 计数器数字增加/减少；
- 输入框输入内容，页面上实时显示；
- 切换 tab 时显示不同内容。

这些「会变」的值，就适合作为状态（state）来管理。

在 React 函数组件中，使用 `useState` 来声明状态。

---

## 2. `useState` 基本用法（TS 版）

一个最简单的计数器例子：

```tsx
import { useState } from 'react'

function Counter() {
  // count 是当前值，setCount 是修改它的函数
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>当前计数：{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Counter
```

要点：

- `useState<number>(0)` 里的 `0` 是初始值，`<number>` 告诉 TS 这是数字类型。
- 调用 `setCount(newValue)` 会触发组件重新渲染，界面上的 `{count}` 会自动更新。
- 不要直接修改 `count`，而是通过 `setCount`。

---

## 3. 把计数器放到 App 中

在 `App.tsx` 中使用这个 `Counter` 组件：

```tsx
import Counter from './Counter'

function App() {
  return (
    <div>
      <h1>XGLab React Day 2</h1>
      <Counter />
    </div>
  )
}

export default App
```

React 中一个组件可以引用另一个组件，就像在 Vue 中把子组件放到父组件的模板里一样。

---

## 4. 输入框 + 同步显示（对标 Vue 的 v-model）

在 Vue 中我们会用 `v-model`，在 React 中你需要自己组合：

- 状态：保存输入的值；
- `onChange` 事件：更新状态；
- 在 JSX/TSX 中显示状态。

示例（TS 版）：

```tsx
import { useState } from 'react'

function TextMirror() {
  const [text, setText] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="在这里输入点什么"
      />
      <p>你输入的是：{text}</p>
    </div>
  )
}

export default TextMirror
```

要点：

- `value={text}`：输入框的值由 state 决定（受控组件）。
- `onChange={handleChange}`：每次输入变化都会触发 `handleChange`。
- `event.target.value`：拿到当前输入框中的文本。

> 提示：上面用到了 `React.ChangeEvent<HTMLInputElement>` 这个类型，你只需知道：
> - 它是 React 为输入框 onChange 事件准备的类型；
> - 我们用它让 TypeScript 知道 `event.target` 上有哪些属性。

---

## 5. 今日实战练习（为以后多页面做准备）

从今天开始，我们约定一个习惯：**每一天的练习放在单独的「页面组件」里**，这样以后用路由时，可以直接把每一天的页面挂在不同的路由下，保留你的学习记录。

在你的项目中完成以下步骤：

1. 在 `src` 目录下新建 `Counter.tsx` 文件，写出上面的计数器组件。
2. 在 `src` 目录下新建 `TextMirror.tsx` 文件，写出输入框组件。
3. 在 `src` 目录下新建 `pages` 文件夹，并创建 `Day2StateAndEvents.tsx`，内容大致如下（你可以根据需要调整文案）：

   ```tsx
   import Counter from '../Counter'
   import TextMirror from '../TextMirror'

   function Day2StateAndEvents() {
     return (
       <div>
         <h1>XGLab React Day 2</h1>

         <section>
           <h2>计数器</h2>
           <Counter />
         </section>

         <section>
           <h2>输入同步显示</h2>
           <TextMirror />
         </section>
       </div>
     )
   }

   export default Day2StateAndEvents
   ```

4. 临时修改 `App.tsx`，只负责渲染今天的页面组件（将来我们会用路由来切换不同 Day 页面）：

   ```tsx
   import Day2StateAndEvents from './pages/Day2StateAndEvents'

   function App() {
     return <Day2StateAndEvents />
   }

   export default App
   ```

5. 启动项目（如果已经在运行就不必重启），在浏览器查看效果：
   - 点击「+1」按钮，数字是否会变化？
   - 输入框输入内容时，下方文字是否同步更新？

---

## 6. 今日作业

- 思考和实践：

  1. 给计数器再加一个「重置」按钮，点击后把 `count` 恢复为 0。
  2. 改进输入组件：
     - 当输入框为空时，下方显示「请开始输入」；
     - 当输入框有内容时，显示「你输入的是：xxx」。
       > 提示：可以用简单的 `if` 或三元运算符 `condition ? A : B`。

- 完成后你可以：
  - 把 `Counter.tsx`、`TextMirror.tsx` 和 `App.tsx` 的代码贴给我；
  - 我会帮你检查是否有可以优化的地方，并讲解你不理解的语法。
