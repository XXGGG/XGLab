import { Link } from 'react-router-dom'

function Home() {
    const days = [
        { id: 1, name: 'Day1：自我介绍页' },
        { id: 2, name: 'Day2：组件状态 & 事件处理' },
        { id: 3, name: 'Day3：列表渲染 & 条件渲染' },
        { id: 6, name: 'Day6：组件通信与数据流' },
    ]

    return (
        <div>
            <h2>XGLab React 学习主页</h2>
            <p>欢迎来到我的 React 学习记录。</p>

            <nav>
                <ul>
                    {days.map((day) => (
                        <li key={day.id}>
                            <Link to={`/day${day.id}`}>{day.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Home