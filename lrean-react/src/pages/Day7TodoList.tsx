import SectionTitle from '../components/SectionTitle'
import { useState } from 'react'
import TodoItem from '../components/TodoItem'


const initialTodos =[
    { id: 1, title: '看完 Day7 课程', finished: false },
    { id: 2, title: '实现一个可以勾选的 Todo 列表', finished: false },
    { id: 3, title: '把 Day7 作业提交给 AI 老师', finished: false },
]

export default function Day7TodoList() {
    const [todos, setTodos] = useState(initialTodos)
    const [input, setInput] = useState('')

    // 新增 Todo 项
    const handleAdd = () => {
        if (input.trim() === '') {
            alert('请输入内容')
            return
        }
        const newTodo = {
            id: Date.now(),
            title: input,
            finished: false,
        }
        setTodos([...todos, newTodo])
        setInput('')
    }

    // 切换 Todo 项状态
    const handleToggle = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, finished: !todo.finished } : todo))
    }

    // 删除 Todo 项
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div className="page-container">
        <SectionTitle title="Day 7：Todo 列表" />

        <div>共{todos.length}项，已完成{todos.filter((todo) => todo.finished).length}项</div>

        {/* 渲染 Todo 列表   */}
        <ul>{todos.map((todo)=>(
            <TodoItem
                key={todo.id}
                title={todo.title}
                finished={todo.finished}
                onToggle={() => handleToggle(todo.id)}
                onDelete={() => handleDelete(todo.id)}
            />
        ))}</ul>

        {/* 输入框和添加按钮 */}
        <div>
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} placeholder="输入新的 Todo 项" 
            />
            <button onClick={handleAdd} style={{ marginLeft: '8px' }}>添加</button>
        </div>

        </div>
    )
}