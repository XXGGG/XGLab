import Counter from '../components/Counter'
import TextMirror from '../components/TextMirror'
import SectionTitle from '../components/SectionTitle'

function Day2StateAndEvents() {
    return (
        <div>
            <h1>XGLab React Day 2</h1>

            <section>
            <SectionTitle title="计数器" />
            <Counter />
            </section>

            <section>
            <SectionTitle title="输入同步显示" />
            <TextMirror />
            </section>
        </div>
    )
}

export default Day2StateAndEvents