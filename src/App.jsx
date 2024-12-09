import Sidebar from "./Components/Sidebar"
import Hero from "./Sections/Hero"
import Flash from "./Sections/Flash"
import Categories from "./Sections/Categories"
import Selling from "./Sections/Selling"
import Enhance from "./Sections/Enhance"
import Explore from "./Sections/Explore"
import Arrival from "./Sections/Arrival"
import Service from "./Sections/Service"


function App() {

  return (
    <>
      <div>
      <hr className="w-full" />
      </div>
      <div className="flex justify-between items-center">
        <div className="hidden md:block">
      <Sidebar/>
        </div>
      <Hero/>
      </div>  
      <Flash/>
      <Categories/>
      <Selling/>
      <Enhance/>
      <Explore/>
      <Arrival/>
      <Service/>
    </>
  )
}

export default App
