import LessonCard from '../components/LessonCard'
import SectionTitle from '../components/SectionTitle'

function Day1Intro() {
    const name = '谢夏戈'
    const skills = ['HTML', 'CSS', 'JavaScript', 'Vue']
    const title = 'XGLab React Day1'
    const courses = ['React','TypeScript','Tailwind','Tauri']

    return (
      <>
        <h1>{title}</h1>
        <SectionTitle title={`你好，我是${name}`} />
        <p>这是我在 XGLab 的 React 学习之旅。</p>
        
        <LessonCard title="Day1 介绍" description="这是 Day1 的介绍课程，我们将学习 React 的基础概念和语法。" />

        <SectionTitle title="我目前会的技能" />
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <SectionTitle title="我目前正在学习的课程" />
        <ul>
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
    </>
    )
}

export default Day1Intro