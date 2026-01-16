# Day 6：组件通信与数据流 (Props and Data Flow)

> 💡 **今日目标**：理解 React 最核心的「单向数据流」概念，学会「状态提升」(Lifting State Up)，实现父子组件之间的数据传递和事件回调。

## 1. 核心概念：数据通过 Props 向下流，事件通过 Callback 向上冒泡

在 React 中：
1.  **父传子**：父组件把数据（state）通过 `props` 传给子组件，子组件只负责展示。
2.  **子传父**：父组件把一个函数（callback）通过 `props` 传给子组件，子组件在特定时机（比如点击按钮）调用这个函数，从而通知父组件修改数据。

这叫 **单向数据流**。数据永远是「自上而下」流动的，子组件不能直接修改父组件的数据，只能请求父组件修改。

---

## 2. 练习任务：个人信息编辑器

我们将创建一个「个人信息」页面，包含两个部分：
1.  **展示区**：显示用户的头像、昵称、签名。
2.  **编辑区**：可以修改昵称和签名。

这需要两个子组件共享同一份数据，所以我们需要把状态放在它们的**共同父组件**里。

### 步骤 1：创建子组件 `UserProfile` (只负责展示)

在 `src/components/UserProfile.tsx` 中：

```tsx
import './UserProfile.css' // 稍后我们可以加点样式

// 定义 User 数据结构，方便复用
export type User = {
  name: string
  bio: string
  avatarUrl: string
}

type UserProfileProps = {
  user: User
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="user-profile">
      <img src={user.avatarUrl} alt={user.name} className="avatar" />
      <div className="info">
        <h3>{user.name}</h3>
        <p>{user.bio || '这个人很懒，什么都没写'}</p>
      </div>
    </div>
  )
}
```

### 步骤 2：创建子组件 `EditProfile` (负责修改)

在 `src/components/EditProfile.tsx` 中：
注意：这里接收了一个 `onSave` 函数作为 prop，这就是子传父的关键。

```tsx
import { useState } from 'react'
import { User } from './UserProfile' // 复用刚才定义的 User 类型

type EditProfileProps = {
  user: User
  onSave: (updatedUser: User) => void // 父组件传下来的回调函数
}

export default function EditProfile({ user, onSave }: EditProfileProps) {
  // 这里我们需要内部 state 来控制表单输入，
  // 但最终保存时，是调用 onSave 把数据传回给父组件
  const [name, setName] = useState(user.name)
  const [bio, setBio] = useState(user.bio)

  const handleSave = () => {
    // 调用父组件给的函数，把新数据传出去
    onSave({
      ...user, // 保留原有的 avatarUrl 等其他字段
      name,
      bio
    })
    alert('保存成功！')
  }

  return (
    <div className="edit-profile">
      <h3>编辑资料</h3>
      <div className="form-group">
        <label>昵称：</label>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>签名：</label>
        <textarea 
          value={bio} 
          onChange={(e) => setBio(e.target.value)} 
        />
      </div>
      <button onClick={handleSave}>保存修改</button>
    </div>
  )
}
```

### 步骤 3：创建父页面 `Day6DataFlow` (状态提升)

在 `src/pages/Day6DataFlow.tsx` 中：
这里是「单一数据源」的存放地。

```tsx
import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import UserProfile, { User } from '../components/UserProfile'
import EditProfile from '../components/EditProfile'

// 初始数据
const initialUser: User = {
  name: 'XGLab 学员',
  bio: '正在死磕 React 数据流...',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix' // 随机头像 API
}

export default function Day6DataFlow() {
  // 状态提升：user 数据保存在父组件，而不是子组件里
  const [user, setUser] = useState<User>(initialUser)
  
  // 这个函数会传给 EditProfile
  const handleUserUpdate = (newUser: User) => {
    setUser(newUser) // 更新状态，React 会自动重新渲染 UserProfile
  }

  return (
    <div className="page-container">
      <SectionTitle title="Day 6: 数据流与状态提升" />
      
      <div className="split-view" style={{ display: 'flex', gap: '2rem', marginTop: '20px' }}>
        {/* 左边展示 */}
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h4>预览区域 (UserProfile)</h4>
          <UserProfile user={user} />
        </div>

        {/* 右边编辑 */}
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h4>编辑区域 (EditProfile)</h4>
          {/* 把 user 数据传下去，同时也把更新函数传下去 */}
          <EditProfile user={user} onSave={handleUserUpdate} />
        </div>
      </div>
    </div>
  )
}
```

### 步骤 4：配置路由

别忘了把新页面加到 `src/App.tsx` 和 `src/pages/Home.tsx` 中！

1.  在 `App.tsx` 中引入 `Day6DataFlow` 并添加 `<Route path="/day6" ... />`。
2.  在 `Home.tsx` 的列表数组里加一项 `{ id: 6, name: 'Day6：组件通信与数据流' }`。

---

## 3. 为什么这样做？ (The React Way)

你可能会想：“为什么不直接在 `EditProfile` 里改 `user`？”

如果 `EditProfile` 自己存了一份 `user`，`UserProfile` 也存了一份 `user`，那么当你修改编辑区时，展示区**不会自动更新**。这就造成了「数据不同步」。

通过**状态提升 (Lifting State Up)**：
1.  唯一的 `user` 状态在父组件 `Day6DataFlow` 中。
2.  `UserProfile` 只是读取它。
3.  `EditProfile` 只是请求修改它。
4.  当父组件执行 `setUser` 时，父组件重新渲染，两个子组件也随之收到最新的 props 并更新。

这就是 React 保证数据一致性的秘诀。

---

## ✅ 作业验证

1.  打开 `/day6` 页面。
2.  在右侧编辑框修改昵称，点击「保存」。
3.  观察左侧预览区的名字是否**立刻**变了？
4.  如果是，恭喜你！你已经掌握了 React 开发中最重要的数据流模式！

完成后，请告诉我 "Day6 完成"，我会为你检查代码并打分！
