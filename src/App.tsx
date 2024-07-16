import Header from "./components/Header"
import Search from "./components/Search"


function App() {

  return (
    <div className="bg-black h-full w-full pb-5">
       <Header />
       <div className="px-5 pt-6">
        <Search />
       </div>
    </div>
  )
}

export default App
