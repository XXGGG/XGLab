import { useState } from 'react'
import { type User } from './UserProfile'; // 复用刚才定义的 User 类型
 // 复用刚才定义的 User 类型

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