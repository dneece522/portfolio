import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume/Resume'
import ProjectDetails from './pages/ProjectDetails'
import WebFont from 'webfontloader'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    })
  }, [])

  return (
    < >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='projects/:projectDetails' element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
