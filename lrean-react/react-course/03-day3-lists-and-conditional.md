# Day 3：列表渲染 & 条件渲染（含 Day1 重构）

## 今天的目标

- 学会用 `map` 渲染列表，而不是一个个写 `<li>`。
- 理解 `key` 的作用，避免 React 发脾气。
- 用条件渲染（`&&` 和 三元运算）控制显示内容。
- 把 Day1 的技能 / 课程列表用 `map` 重写，为后面复用打基础。

---

## 1. 为什么要用 map 渲染列表？

在 Day1 里，我们是这么写技能的：

```tsx
<ul>
  <li>{skills[0]}</li>
  <li>{skills[1]}</li>
  <li>{skills[2]}</li>
  <li>{skills[3]}</li>
</ul>
```

这样写虽然简单，但有几个问题：

- 一旦数组长度变化，就必须手动加 / 删 `<li>`。
- 容易写错下标，代码重复。

在 React 中，推荐的写法是：

```tsx
const skills = ['HTML', 'CSS', 'JavaScript', 'Vue']

return (
  <ul>
    {skills.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
)
```

好处：

- 数组有多少项，就渲染多少项。
- 以后从服务器拿到一个数组，也可以直接用同样的写法。

---

## 2. key 是什么？为什么需要？

你可能会看到 React 的警告：

> Warning: Each child in a list should have a unique "key" prop.

意味着：

- 渲染列表时，每个兄弟元素都应该有一个 `key` 属性；
- `key` 帮助 React 在更新时知道「哪个元素对应哪条数据」，从而只更新必要的部分。

简单原则：

- 列表数据里如果有稳定的 id，就用 `item.id`；
- 没有 id 的小例子，可以先用字符串本身（比如 `skill`）。

不推荐用数组下标 `index` 作为 key（在元素增删时可能导致一些奇怪行为），但在非常简单 / 静态列表里勉强可以接受。我们在练习时先养成用「内容本身或者 id」的习惯。

---

## 3. 条件渲染的两种常见写法

### 3.1 使用 `&&`

适合「满足条件才显示」的场景：

```tsx
{isLoggedIn && <p>欢迎回来</p>}
```

当 `isLoggedIn` 为 `true` 时，这行会渲染 `<p>`；否则什么都不渲染。

### 3.2 使用三元运算符

适合「二选一」的场景：

```tsx
{items.length === 0 ? <p>暂无数据</p> : <ItemList items={items} />}
```

---

## 4. 新建 Day3 页面组件：Day3ListsAndConditional

今天我们延续 Day2 的结构，继续使用 `pages` 目录。

### 步骤 1：在 `src/pages` 下新建文件

- 新建文件：`src/pages/Day3ListsAndConditional.tsx`

示例代码（可以直接粘贴，然后按注释逐步修改）：

```tsx
type Course = {
  name: string
  level: '已掌握' | '在学习'
}

const learnedSkills = ['HTML', 'CSS', 'JavaScript', 'Vue']

const learningCourses: Course[] = [
  { name: 'React', level: '在学习' },
  { name: 'TypeScript', level: '在学习' },
  { name: 'Tailwind', level: '在学习' },
  { name: 'Tauri', level: '在学习' },
]

function Day3ListsAndConditional() {
  const hasSkills = learnedSkills.length > 0
  const hasCourses = learningCourses.length > 0

  return (
    <div>
      <h1>XGLab React Day 3</h1>

      <section>
        <h2>我已经掌握的技能</h2>
        {hasSkills ? (
          <ul>
            {learnedSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>暂时还没有技能，慢慢来。</p>
        )}
      </section>

      <section>
        <h2>我正在学习的课程</h2>
        {hasCourses ? (
          <ul>
            {learningCourses.map((course) => (
              <li key={course.name}>
                {course.name}（{course.level}）
              </li>
            ))}
          </ul>
        ) : (
          <p>目前还没有排课程。</p>
        )}
      </section>
    </div>
  )
}

export default Day3ListsAndConditional
```

> 注意：这里我们直接在组件外部定义了 `learnedSkills` 和 `learningCourses`，因为它们暂时不会变化，不需要用 `useState`。

### 步骤 2：临时让 App.tsx 渲染 Day3 页面

先暂时改成这样（之后学路由再切换回统一入口）：

```tsx
import './App.css'
import Day3ListsAndConditional from './pages/Day3ListsAndConditional'

function App() {
  return <Day3ListsAndConditional />
}

export default App
```

确认页面可以正常显示。

---

## 5. 今日实战练习

在 `Day3ListsAndConditional` 中完成以下目标：

1. 使用 `map` 渲染「已掌握技能」列表。
2. 使用 `map` 渲染「正在学习的课程」列表，课程项包含名字和状态（例如「在学习」）。
3. 使用条件渲染：
   - 当 `learnedSkills` 数组为空时，显示「暂时还没有技能，慢慢来。」；
   - 当 `learningCourses` 数组为空时，显示「目前还没有排课程。」。

你可以通过临时清空这两个数组，来测试条件渲染是否生效。

---

## 6. 今日作业

1. 在 `Day3ListsAndConditional` 中新增一个「Todo 列表」区域：
   - 定义一个 `todos` 数组，包含若干对象，每个对象至少有：
     - `id: number`
     - `title: string`
     - `finished: boolean`
   - 使用 `map` 渲染到页面上。
   - 使用条件渲染：
     - 如果没有 todo，显示「今天还没有安排任务」；
     - 如果有 todo，显示「今日任务列表」以及列表内容。
   - 在已完成的任务标题旁边加上标记，例如「（已完成）」或一个简单符号。

2. 将 Day1 的 `skills` 和 `courses` 数组（如果你还保留这段代码）思考一下：
   - 它们也可以放进一个页面组件里，用 `map` 渲染；
   - 将来我们会把它们整理成一个 `Day1Intro` 页面，与 Day3 一样，通过路由访问。

完成后，你可以把 `Day3ListsAndConditional.tsx` 的代码贴给我，我会继续在 `scores.md` 中为 Day3 打分并给出点评。 

