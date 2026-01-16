import LessonCard from '../components/LessonCard'
import SectionTitle from '../components/SectionTitle'
import EmptyState from '../components/EmptyState'

type Course = {
  name: string
  level: '已掌握' | '在学习'
}

const learnedSkills = ['HTML', 'CSS', 'JavaScript', 'Vue']

const learningCourses: Course[] = [
  { name: 'React', level: '在学习' },
  { name: 'TypeScript', level: '在学习' },
  { name: 'Tailwind', level: '在学习' },
  { name: 'Tauri', level: '在学习' },
]

type Todo = {
  id: number
  title: string
  finished: boolean
}

const todos: Todo[] = [
  { id: 1, title: '学习 React', finished: true },
  { id: 2, title: '学习 TypeScript', finished: false },
  { id: 3, title: '学习 Tailwind CSS', finished: false },
  { id: 4, title: '学习 Tauri', finished: false },
]

function Day3ListsAndConditional() {
  const hasSkills = learnedSkills.length > 0
  const hasCourses = learningCourses.length > 0
  const hasTodos = todos.length > 0
  
  return (
    <div>
      <h1>XGLab React Day 3</h1>
      <LessonCard title="Day3：列表与条件渲染" description="今天我练习了用 map 渲染列表，用条件渲染控制显示内容。以后拿到数组数据，就可以很自然地渲染到页面上。" />
      <section>
        <SectionTitle title="我已经掌握的技能" />
        {hasSkills ? (
          <ul>
            {learnedSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        ) : (
          <EmptyState message="暂时还没有技能，慢慢来。" />
        )}
      </section>

      <section>
        <SectionTitle title="我正在学习的课程" />
        {hasCourses ? (
          <ul>
            {learningCourses.map((course) => (
              <li key={course.name}>
                {course.name}（{course.level}）
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState message="目前还没有排课程。" />
        )}
      </section>

      <section>
        <SectionTitle title="待办事项" />
        {hasTodos ? (
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.title}
                        {todo.finished ? (
                            <span>已完成</span>
                        ) : (
                            <span>未完成</span>
                        )}
                    </li>
                ))}
            </ul>
        ) : (
            <EmptyState message="今天还没有安排任务" />
        )}
      </section>
    </div>
  )
}

export default Day3ListsAndConditional