import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import UserProfile, { type User } from '../components/UserProfile'
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