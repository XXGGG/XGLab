type TodoItemProps = {
    title: string
    finished: boolean
    onToggle: () => void
    onDelete: () => void
}

export default function TodoItem({ title, finished, onToggle, onDelete }: TodoItemProps) {
    return (
        <li>
            <span style={{ textDecoration: finished ? 'line-through' : 'none' }}>
                [{finished ? '已完成' : '未完成'}] {title}
            </span>
            <button style={{ marginLeft: '8px' }} onClick={onToggle}>
                切换状态
            </button>
            <button style={{ marginLeft: '8px' }} onClick={onDelete}>
                删除
            </button>
        </li>
    )
}