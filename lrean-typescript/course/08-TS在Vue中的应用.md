# 08-TS 在 Vue 中的应用 💚

## 👋 嗨！
如果你是 Vue 开发者，这节课就是为你准备的。
Vue 3 对 TypeScript 的支持简直是**完美**。特别是配合 `<script setup>`，写起来那叫一个丝滑。

我们将重点学习 **Composition API (组合式 API)** 下的写法。

---

## 🥗 1. defineProps (组件传参)

以前我们要写一堆 `type: String, required: true`，现在不用了！

### 推荐：泛型参数写法
直接定义一个 Interface，传给 `defineProps` 的泛型参数。

```vue
<script setup lang="ts">
// 1. 定义 Props 的形状
interface Props {
  title: string;
  count?: number; // 可选
  tags: string[];
}

// 2. 传给 defineProps
const props = defineProps<Props>();

// 3. 使用
console.log(props.title);
</script>
```

### 给可选参数设置默认值
TS 只能定义类型，不能定义运行时的默认值。我们需要 `withDefaults` 宏。

```vue
<script setup lang="ts">
interface Props {
  title?: string;
}

// 如果没传 title，默认是 "Hello Vue"
const props = withDefaults(defineProps<Props>(), {
  title: "Hello Vue"
});
</script>
```

---

## 📡 2. defineEmits (组件事件)

告诉父组件，我会抛出什么事件，带什么参数。

```vue
<script setup lang="ts">
// 定义事件类型：
// change 事件，带一个 number 参数
// update 事件，带一个 string 参数
const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();

const handleClick = () => {
  emit('change', 100); // ✅
  // emit('change', '100'); // ❌ 报错！参数必须是 number
  // emit('click'); // ❌ 报错！没有定义 click 事件
};
</script>
```

---

## 🧊 3. ref 和 reactive

### ref
大部分情况下，TS 能自动推断。

```typescript
const count = ref(0); // 自动推断为 Ref<number>
```

如果是复杂类型，或者初始值是 null，就需要泛型了：
```typescript
interface User {
  name: string;
  age: number;
}

const user = ref<User | null>(null);
```

### reactive
```typescript
const state = reactive<User>({
  name: "Trae",
  age: 18
});
```
*小贴士：新手建议多用 ref，坑少一点。*

---

## 🖱️ 4. 事件处理

在模板 `@change="handleChange"` 中，我们需要知道事件对象的类型。

```vue
<script setup lang="ts">
const handleChange = (event: Event) => {
  // 告诉 TS 这个 target 是个输入框
  const target = event.target as HTMLInputElement;
  console.log(target.value);
};
</script>

<template>
  <input @change="handleChange" />
</template>
```

---

## 📝 课后作业

这节课没有 `.ts` 文件可以运行，因为需要 Vue 环境。
请在你的大脑里（或者找个纸笔）完成这个“代码填空”：

假设我们要写一个 `TodoItem.vue` 组件。
1. 它接收一个 `todo` 对象（包含 `id`: number, `text`: string, `done`: boolean）。
2. 它接收一个可选的 `color` 字符串，默认为 `"blue"`。
3. 当点击时，它会抛出 `toggle` 事件，把 `id` 传出去。

请补全 `<script setup lang="ts">` 部分的代码：

```vue
<script setup lang="ts">
// 1. 定义 Todo 接口
interface Todo {
  // ... 补全这里
}

// 2. 定义 Props 接口
interface Props {
  // ... 补全这里
}

// 3. 使用 withDefaults 和 defineProps
// ...

// 4. 使用 defineEmits 定义 toggle 事件
// ...

// 5. 写一个 handleClick 函数触发 emit
// ...
</script>
```

*把答案写在 `homework-08.md` (自己建一个) 里，或者在脑海里跑一遍。*

---
**下节课预告：** React 玩家请进！TS 在 React (Next.js) 中怎么用？组件 Props 怎么写？Hooks 怎么写？⚛️
