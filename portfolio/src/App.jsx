import About from "./Components/About"
import Banner from "./Components/Banner"
import Skills from "./Components/Skills"
import Nav from "./Components/nav"

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Banner />
      <About />
      <Skills/>
    </div> 
  )
}

export default App