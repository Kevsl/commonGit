import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Movies from './views/Movies'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <ul className="flex mx-auto items-center w-1-2 bg-dark-blue justify-around text-white rounded-md">
        <Link to="">
          <li className="text-white">Users</li>
        </Link>
        <Link to="">
          <li className="text-white">Flags</li>
        </Link>
        <Link to="">
          <li className="text-white">Movies</li>
        </Link>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
