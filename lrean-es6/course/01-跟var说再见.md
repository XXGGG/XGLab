# 01-跟var说再见.md

👋 大家好！欢迎来到第一课。

今天我们要解决一个历史遗留问题：**怎么声明变量？**

在很久很久以前（大概 2015 年前），我们只有 `var`。这货有个大毛病，就是“不守规矩”（变量提升、没有块级作用域）。

现在，ES6 给了我们两个新保镖：`let` 和 `const`。

## 🐣 基础用法

### 1. `let`：我是个善变的人

如果你声明的变量**以后会变**，就用 `let`。

```javascript
let age = 18;
console.log(age); // 18

age = 19; // 过了个生日，变了
console.log(age); // 19
```

### 2. `const`：我是个专一的人

如果你声明的变量**以后绝不会变**，或者你**不想让它变**，就用 `const`。
注意：`const` 必须在声明的时候就赋值！

```javascript
const birthYear = 2000;
console.log(birthYear); // 2000

// birthYear = 2001; // ❌ 报错！Assignment to constant variable.
// 你不能改变你的出生年份，对吧？
```

### 🚨 特别注意：`const` 的“专一”是有限度的

如果 `const` 声明的是一个**对象**或**数组**，你可以修改它里面的内容，但不能把它换成另一个对象。

```javascript
const me = { name: "小明", age: 18 };

me.age = 19; // ✅ 可以！小明还是那个小明，只是长大了。
console.log(me); // { name: "小明", age: 19 }

// me = { name: "小红" }; // ❌ 报错！你不能变成另一个人。
```

## 🎭 场景实战

### Vue (Nuxt) 中的用法

在 Vue 3 的 `<script setup>` 里，我们经常用 `const` 来声明响应式数据（Refs）。

```javascript
<script setup>
import { ref } from 'vue';

// 这里的 count 本身是一个对象（RefImpl），所以用 const
const count = ref(0); 

function increment() {
  // 我们修改的是 count.value，而不是 count 本身
  count.value++; 
}
</script>
```

### React (Next) 中的用法

在 React 组件里，我们用 `const` 来定义组件和状态。

```javascript
import { useState } from 'react';

// 组件本身通常也是个常量函数
const MyComponent = () => {
  // useState 返回的 set 方法让我们去更新状态，但变量本身声明解构时常用 const
  const [count, setCount] = useState(0);

  // 事件处理函数通常也不会变
  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
};
```

## 🧠 总结

- 以后写代码，**默认用 `const`**。
- 只有当你明确知道这个变量需要被重新赋值（比如 `for` 循环里的 `i`，或者简单的计数器）时，才把 `const` 改成 `let`。
- 彻底忘掉 `var`，把它扫进历史的垃圾堆。🗑️

## ✍️ 课后作业

1.  把下面这段代码里的 `var` 全部改成 `let` 或 `const`：
    ```javascript
    var name = "Trae";
    var hobbies = ["Coding", "Sleeping"];
    var version = 1;
    version = 2;
    hobbies.push("Eating");
    ```
2.  思考一下：为什么我们在 Vue/React 里很少用到 `let`？

---
**下一课预告**：我们要去学习一种超级酷炫的函数写法，像射箭一样快！🏹

## 🟢 XXG作业：

```javascript
const name = "Trae";
const hobbies = ["Coding", "Sleeping"];
let version = 1;
version = 2;
hobbies.push("Eating");
```