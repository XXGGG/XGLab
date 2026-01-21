import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Day1Intro from './pages/Day1Intro'
import Day2StateAndEvents from './pages/Day2StateAndEvents'
import Day3ListsAndConditional from './pages/Day3ListsAndConditional'
import Day6DataFlow from './pages/Day6DataFlow'
import Day7TodoList from './pages/Day7TodoList'

function App() {
  const pathlist = [
    {
      path: '/',
      element: <Home />,
      title: 'Home'
    },
    {
      path: '/day1',
      element: <Day1Intro />,
      title: 'Day1'
    },
    {
      path: '/day2',
      element: <Day2StateAndEvents />,
      title: 'Day2'
    },
    {
      path: '/day3',
      element: <Day3ListsAndConditional />,
      title: 'Day3'
    },
    {
      path: '/day6',
      element: <Day6DataFlow />,
      title: 'Day6'
    },
    {
      path: '/day7',
      element: <Day7TodoList />,
      title: 'Day7'
    }
  ]
  return (
    <>
      <div className="app-container">
        <header>
          <h1>XGLab React</h1>
          <nav>
            {pathlist.map((item) => (
              <>
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {item.title}
                </NavLink>
                {' | '}
              </>
            ))}
          </nav>
        </header>

        <main>
          <Routes>
            {pathlist.map((item) => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
