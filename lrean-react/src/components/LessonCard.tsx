type LessonCardProps = {
  title: string
  description: string
}

function LessonCard({ title, description }: LessonCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default LessonCard