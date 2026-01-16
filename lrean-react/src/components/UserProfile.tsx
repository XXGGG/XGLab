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
// 相当于：
// user:{
//     name,
//     bio,
//     avatarUrl,
// }

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