import './SectionTitle.css'

type SectionTitleProps = {
  title: string
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="SectionTitle">{title}</h2>
  )
}

export default SectionTitle