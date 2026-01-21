# 09-TS 在 React 中的应用 ⚛️

## 👋 嗨！
React 和 TypeScript 简直是天作之合。React 的组件化思想和 TS 的类型系统配合起来，能让你在写代码时享受到“上帝视角”——还没运行就知道哪儿错了。

我们主要关注 **函数组件 (Functional Component)** 和 **Hooks**。

---

## 🧩 1. 组件 Props

在 React 里，组件就是一个函数，Props 就是参数。
所以，定义 Props 类型，就是给函数参数定义类型。

```tsx
// 1. 定义 Props 接口
interface ButtonProps {
  label: string;
  onClick: () => void; // 一个没有参数和返回值的函数
  disabled?: boolean;  // 可选
}

// 2. 直接解构 Props 并加上类型注解
const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
```

### 💡 关于 React.FC
你可能会在老教程里看到 `const Button: React.FC<Props> = ...`。
现在社区**不再推荐**这种写法了，因为它会自动带上 `children` 属性（有时候我们不想要），而且泛型写起来也麻烦。
**推荐直接给参数加类型（如上例）。**

---

## 🪝 2. Hooks

### useState
简单类型自动推断，复杂类型用泛型。

```tsx
// 自动推断为 number
const [count, setCount] = useState(0);

// 复杂类型
interface User {
  name: string;
}
const [user, setUser] = useState<User | null>(null);
```

### useRef
通常用于获取 DOM 元素。

```tsx
// 初始值给 null，泛型填 HTML 元素类型
const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
  // 注意：current 可能为 null，所以要用 ?.
  inputRef.current?.focus();
};

return <input ref={inputRef} />;
```

---

## 🖱️ 3. 事件处理

这是 React TS 里最让人头大的地方：**事件类型叫什么？**

不需要背！VS Code 会告诉你。
鼠标悬停在 `onChange` 或 `onClick` 属性上，它会提示你类型。

常用的有：
- `React.ChangeEvent<HTMLInputElement>`: 输入框变化
- `React.FormEvent`: 表单提交
- `React.MouseEvent`: 鼠标点击

```tsx
import { useState, ChangeEvent } from 'react';

const InputBox = () => {
  const [text, setText] = useState("");

  // 处理输入
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return <input value={text} onChange={handleChange} />;
};
```

---

## 📝 课后作业

同样是“代码填空”练习。假设我们要写一个 `UserCard.tsx` 组件。
1. 接收 `name` (string), `age` (number)。
2. 接收 `onLike` (函数，点击喜欢按钮时触发)。
3. 内部有一个 `input` 用于修改签名。

请补全代码：

```tsx
import { useState, ChangeEvent } from 'react';

// 1. 定义 Props
interface UserCardProps {
  // ...
}

export const UserCard = ({ name, age, onLike }: UserCardProps) => {
  const [sign, setSign] = useState<string>("");

  // 2. 补全事件处理函数的类型
  const handleSignChange = (e: /* 这里填什么？ */) => {
    setSign(e.target.value);
  };

  return (
    <div className="card">
      <h2>{name} ({age})</h2>
      <input value={sign} onChange={handleSignChange} />
      <button onClick={onLike}>Like</button>
    </div>
  );
};
```

---
**下节课预告：** 最后一课！我们将把之前学的所有东西串起来，布置一个终极实战任务：搭建你的第一个 TS 项目！🏆
