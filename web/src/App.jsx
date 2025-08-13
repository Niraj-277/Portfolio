import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="text-lg font-semibold tracking-tight">
            Niraj
          </NavLink>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/" className={({ isActive }) => `hover:text-brand-400 ${isActive ? 'text-brand-400' : 'text-neutral-300'}`}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `hover:text-brand-400 ${isActive ? 'text-brand-400' : 'text-neutral-300'}`}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `hover:text-brand-400 ${isActive ? 'text-brand-400' : 'text-neutral-300'}`}>Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
        <div className="border-t border-neutral-800 pt-6">
          © {new Date().getFullYear()} Niraj. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
