import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
    <div>
        <p>当前计数：{count}</p>
        <button onClick={handleClick}>+1</button>
        <button onClick={reset}>重置</button>
    </div>
    )
}

export default Counter
