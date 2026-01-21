# 01-Vue是什么鬼 👻

## 👋 嘿，未来的代码魔法师！

欢迎来到 **Vue** 的世界！

你可能听说过 HTML（骨架）、CSS（皮肤）和 JavaScript（肌肉）。那 Vue 是什么呢？
**Vue 就是那个大脑！** 🧠 它指挥肌肉怎么动，皮肤怎么变色。

## 📦 什么是 .vue 文件？

在 Vue 的世界里，我们把一个功能（比如一个按钮、一个导航栏）写在一个文件里，后缀名是 `.vue`。我们叫它 **SFC** (Single File Component，单文件组件)。

把它想象成一个 **汉堡包** 🍔：

1.  **`<script setup>` (顶层面包)**：写逻辑的地方。这里定义数据和命令。
2.  **`<template>` (肉饼)**：写 HTML 的地方。这是用户看到的结构。
3.  **`<style>` (底层面包)**：写 CSS 的地方。让你的页面变漂亮。

## 📝 代码长这样

```html
<!-- 逻辑层：大脑 -->
<script setup>
  // 这里写 JS 代码
  // 比如定义一个变量
  const name = "小明";
</script>

<!-- 视图层：肉饼 -->
<template>
  <!-- 这里写 HTML -->
  <div class="card">
    <h1>你好，Vue！</h1>
  </div>
</template>

<!-- 样式层：皮肤 -->
<style>
  /* 这里写 CSS */
  .card {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
  }
</style>
```

## 🍬 什么是 setup 语法糖？

你看到上面的 `<script setup>` 了吗？
那个 `setup` 就像是一个 **魔法咒语** ✨。
只要写上它，Vue 就会自动帮你处理很多麻烦的事情。你只需要专注于写代码，不用管那些复杂的配置。
**在 Nuxt 开发中，我们 99% 的情况都用 `<script setup>`！**

## 🎒 课后小结

- Vue 文件 (`.vue`) 就像一个汉堡包：Script, Template, Style。
- `<script setup>` 是我们以后写代码的主要地方。
- 不需要去理解什么 `Options API` 或者 `this`，那是老古董了，我们要学就学最新的！🚀

下一节课，我们看看怎么把数据“变”到页面上！
