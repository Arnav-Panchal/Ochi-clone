import About from "./components/About"
import Eyes from "./components/Eyes"
import Featured from "./components/Featured"
import Landingpage from "./components/Landingpage"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
      <div className="w-full min-h-screen text-white bg-zinc-900">
        <Navbar/>
        <Landingpage/>
        <Marque/>
        <About/>
        <Eyes/>
        <Featured/>
      </div>
    </>
  )
}

export default App
