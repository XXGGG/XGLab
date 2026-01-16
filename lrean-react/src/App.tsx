import './App.css'
import { Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Day1Intro from './pages/Day1Intro'
import Day2StateAndEvents from './pages/Day2StateAndEvents'
import Day3ListsAndConditional from './pages/Day3ListsAndConditional'
import Day6DataFlow from './pages/Day6DataFlow'

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <h1>XGLab React</h1>
          <nav>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink> |{' '}
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/day1">Day1</NavLink> |{' '}
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/day2">Day2</NavLink> |{' '}
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/day3">Day3</NavLink> |{' '}
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/day6">Day6</NavLink>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/day1" element={<Day1Intro />} />
            <Route path="/day2" element={<Day2StateAndEvents />} />
            <Route path="/day3" element={<Day3ListsAndConditional />} />
            <Route path="/day6" element={<Day6DataFlow />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
