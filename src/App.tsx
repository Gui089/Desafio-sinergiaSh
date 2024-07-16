import CategoryList from "./components/Category-list"
import Header from "./components/Header"
import Search from "./components/Search"


function App() {

  return (
    <>
       <Header />
       <div className="px-5 pt-6">
        <Search />
       </div>

       <CategoryList />
    </>
  )
}

export default App
