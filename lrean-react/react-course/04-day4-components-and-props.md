# Day 4：组件拆分 & props（顺便回答“文件会不会乱？”）

## 今天的目标

- 明确什么是「页面组件」和「普通组件」。
- 学会用 props 给组件传数据。
- 建立一个简单的 `components` 目录，开始整理小组件。
- 回答你关心的：Counter / TextMirror 放哪更合适？

---

## 1. 页面组件 vs 普通组件

在你目前的项目结构中：

- `src/pages/Day2StateAndEvents.tsx`、`Day3ListsAndConditional.tsx`：  
  属于「页面组件」——一般对应一个路由，比如 `/day2`、`/day3`。
- `Counter.tsx`、`TextMirror.tsx`：  
  属于「普通组件」/「UI 组件」——可以在多个页面中复用。

通常的推荐结构是：

- `src/pages/`：放页面级组件。
- `src/components/`：放可复用的小组件。

今天我们就从这里开始，把结构整理得更清晰一些。

---

## 2. 建立 components 目录并移动组件（动手前先看完）

今天的目标之一是：

- 新建 `src/components` 目录；
- 将 `Counter.tsx` 和 `TextMirror.tsx` 移动到 `src/components` 下。

> 注意：移动文件会导致导入路径变动，今天我们一边移动，一边修导入路径。

### 步骤 1：创建目录并移动文件

1. 在 `src` 目录下新建 `components` 文件夹。
2. 将：
   - `src/Counter.tsx` 移动到 `src/components/Counter.tsx`
   - `src/TextMirror.tsx` 移动到 `src/components/TextMirror.tsx`

移动后，你的 src 大致会变成这样：

- `src/components/Counter.tsx`
- `src/components/TextMirror.tsx`
- `src/pages/Day2StateAndEvents.tsx`
- `src/pages/Day3ListsAndConditional.tsx`
- `src/App.tsx`
- `src/main.tsx`

### 步骤 2：修复 Day2 页面里的导入路径

原来的 `Day2StateAndEvents.tsx` 大致是：

```tsx
import Counter from '../Counter'
import TextMirror from '../TextMirror'
```

移动文件后，需要改为：

```tsx
import Counter from '../components/Counter'
import TextMirror from '../components/TextMirror'
```

改完后重新运行项目，确认 Day2 页面仍然可以正常工作。

这样做的好处：

- 所有小组件集中在 `components` 下，文件再多也不容易乱；
- `pages` 目录只负责页面结构，思路更清晰。

---

## 3. props 基础：组件怎么接收数据？

现在我们来了解 props（properties 的缩写），它就是组件的「输入参数」。

比如一个简单的标题组件：

```tsx
type TitleProps = {
  text: string
}

function Title(props: TitleProps) {
  return <h2>{props.text}</h2>
}

export default Title
```

使用它：

```tsx
<Title text="这是一个小标题" />
```

可以看作：

- 组件 `Title` 通过参数 `props` 接收一个 `text`；
- 我们在使用组件时，通过 `text="..."` 把数据传进去；
- 在 TS 中，我们用 `type TitleProps = { text: string }` 明确了 props 的类型。

进一步简化写法（解构）：

```tsx
type TitleProps = {
  text: string
}

function Title({ text }: TitleProps) {
  return <h2>{text}</h2>
}
```

---

## 4. 新建一个 LessonCard 组件

我们做一个通用的「课程卡片」，以后可以在不同页面里复用它。

### 步骤 1：新建组件文件

- 新建文件：`src/components/LessonCard.tsx`

示例代码：

```tsx
type LessonCardProps = {
  title: string
  description: string
}

function LessonCard({ title, description }: LessonCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default LessonCard
```

### 步骤 2：在 Day3 页面中使用 LessonCard（示例）

打开 `src/pages/Day3ListsAndConditional.tsx`，在顶部引入：

```tsx
import LessonCard from '../components/LessonCard'
```

然后在组件返回的 JSX 中，合适的位置加上这样一段：

```tsx
<LessonCard
  title="Day3：列表与条件渲染"
  description="今天我练习了用 map 渲染列表，用条件渲染控制显示内容。以后拿到数组数据，就可以很自然地渲染到页面上。"
/>
```

这样 Day3 页面就有了一个「课程概要卡片」。

---

## 5. 今日实战练习

1. 按上面的步骤：
   - 创建 `src/components` 目录；
   - 把 `Counter.tsx` 和 `TextMirror.tsx` 移动到 `components` 下；
   - 修复 `Day2StateAndEvents.tsx` 中的导入路径；
   - 新建 `LessonCard.tsx` 并在 `Day3ListsAndConditional.tsx` 中使用。

2. 按自己的理解，为 LessonCard 写一段更「真实」的描述：
   - 可以写你 Day3 的学习心得；
   - 或者简单写「我今天学了 map 和 条件渲染」之类的话。

---

## 6. 今日作业

1. 在 `src/components` 下再新建一个小组件，比如：
   - `SectionTitle.tsx`：只负责渲染一个带样式的 `<h2>`；
   - 或 `EmptyState.tsx`：接收一条 `message`，当没有数据时显示这条提示。
2. 把这个新组件在 Day2 或 Day3 的页面中用起来，让你感受到「拆小组件」的好处。

完成后，你可以把：

- `src/components/LessonCard.tsx`
- 你自己新增的小组件文件
- 更新后的某个页面（例如 `Day3ListsAndConditional.tsx`）

贴给我，我会在 `scores.md` 中为 Day4 打分并写点评，同时继续帮你优化组件组织方式。 

