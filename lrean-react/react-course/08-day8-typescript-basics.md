# Day 8：TypeScript 基础（专门补课日）

> 💡 **今日目标**：听得懂 TypeScript 代码里在说什么，不会被一堆尖括号、冒号吓到。
>
> 今天先不追求写很高级的 TS，只要能看懂基本类型标注就已经赚到了。

---

## 1. TypeScript 是什么？

可以简单理解为：

> 在 JavaScript 上「多加了一层类型说明」，让编辑器在你写错的时候提前提醒你。

比如：

```ts
let name: string = 'XGLab 学员'
name = 123 // ❌ 这里 TS 就会报错：不能把数字赋值给 string
```

你已经在项目里用到过一点点：
- `useState<number>(0)`
- 为 props 声明类型，例如：
  ```ts
  type LessonCardProps = {
    title: string
    description: string
  }
  ```

今天就系统地把这些基础类型过一遍。

---

## 2. 基本类型：string / number / boolean

在 `react-course` 的学习文件外面，我们可以在任意一个 `.ts` 文件里写一些例子练习（你也可以直接在已有组件里试着写几行）。

```ts
let nickname: string = '小 X'
let age: number = 20
let isStudent: boolean = true
```

规则很简单：
- `: string` 就是「这个变量应该放字符串」。
- `: number` 就是「放数字」。
- `: boolean` 就是「放 true / false」。

如果你把别的类型塞进去，编辑器就会标红。

---

## 3. 数组和对象类型

### 3.1 数组

```ts
let scores: number[] = [90, 85, 100]
let tags: string[] = ['React', 'TypeScript']
```

- `number[]` 读作「数字数组」。
- `string[]` 读作「字符串数组」。

### 3.2 对象

最常见的写法是使用 `type` 或 `interface`：

```ts
type User = {
  name: string
  age: number
  isStudent: boolean
}

const me: User = {
  name: 'XGLab 学员',
  age: 20,
  isStudent: true,
}
```

注意：
- 定义类型时只写「长什么样」，不写具体的值。
- 真正用的时候才去写 `{ ... }` 的具体内容。

你在项目中已经用过类似的写法（比如 `User`、`Todo`）。

---

## 4. 函数参数和返回值类型

在 JavaScript 中你可能会这样写：

```ts
function add(a, b) {
  return a + b
}
```

在 TypeScript 里，可以加上类型说明：

```ts
function add(a: number, b: number): number {
  return a + b
}
```

解释：
- `a: number`：参数 a 必须是数字。
- `b: number`：参数 b 必须是数字。
- `): number`：这个函数最终会返回一个数字。

再看一个和 React 更接近的例子：

```ts
type Todo = {
  id: number
  title: string
  finished: boolean
}

function toggleTodo(todo: Todo): Todo {
  return { ...todo, finished: !todo.finished }
}
```

读法：
> 「toggleTodo 接收一个 Todo，返回一个新的 Todo」。

---

## 5. 可选属性与联合类型

### 5.1 可选属性

有些字段是可有可无的，可以在类型后面加一个 `?`：

```ts
type UserProfile = {
  name: string
  bio?: string // 可选：可以有，也可以没有
}

const u1: UserProfile = { name: 'A' }
const u2: UserProfile = { name: 'B', bio: 'Hello' }
```

### 5.2 联合类型

「这个值可能是几种类型之一」：

```ts
let id: number | string

id = 123
id = 'abc-123'
```

在 React 中也常见类似场景，例如某个 props 既可以是 `string`，也可以是 `null`。

---

## 6. 和 React 结合的简单例子

以一个简单的展示组件为例：

```tsx
type UserCardProps = {
  name: string
  age: number
}

function UserCard({ name, age }: UserCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>年龄：{age}</p>
    </div>
  )
}
```

这里你已经能看懂：
- 组件接收一个 `UserCardProps` 类型的 props。
- 里面必须有 `name` 和 `age` 两个字段，而且类型固定。

如果你在使用这个组件时写错：

```tsx
<UserCard name="小 X" age="二十" />
```

TS 会提醒你：`age` 应该是 `number`，而不是字符串。

---

## 7. 今日小练习

今天不强求你写很多代码，只要对 TS 语法「不再完全陌生」即可。

可以做这些小练习：

1. 在 `src` 里随便新建一个 `sandbox.ts` 文件：
   - 练习上面的示例：变量、数组、对象、函数类型、联合类型、可选属性。
2. 打开你之前的某个组件（比如 `LessonCard` 或 `UserProfile`），试着：
   - 找出它的 props 类型定义。
   - 用自己的话在脑海里解释一下每个字段的类型含义。
3. 如果你有精力，可以在 Day7 的 Todo 页面里手动补一个 `type Todo`，让 `todos` 的类型更清晰：

   ```ts
   type Todo = {
     id: number
     title: string
     finished: boolean
   }
   ```

---

## ✅ 今日目标回顾

只要你今天做到：

- 知道 `: string`、`: number`、`type Xxx = { ... }` 在干什么。
- 大致能看懂组件 props 类型，不再完全蒙圈。

那么 Day8 的目标就达成了。明天（Day9），我们会把这些类型系统地“装回”你的 React 组件里，让编辑器真正开始帮你抓 bug。
