import Landingpage from "./components/Landingpage"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
      <div className="w-full h-screen text-white">
        <Navbar/>
        <Landingpage/>
        <Marque/>
      </div>
    </>
  )
}

export default App
