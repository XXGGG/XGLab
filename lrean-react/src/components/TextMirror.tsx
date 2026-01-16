import { useState } from 'react'

function TextMirror() {
    const [text, setText] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} placeholder="在这里输入点什么" />

            <p>{text.length > 0 ? `你输入的是：${text}` : '请开始输入'}</p>
        </div>
    )
}

export default TextMirror