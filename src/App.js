import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Testimonials from './Components/Testimonials'
import AboutMe from './Components/AboutMe'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Testimonials />
      <AboutMe />
    </div>
  )
}

export default App
