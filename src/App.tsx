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

      <div className="bg-red-600 mt-5 w-[350px] h-[150px] ml-8 rounded-md flex justify-between">

          <div className=" flex flex-col mt-3 items-center ml-3 h-[90px]">
              <p className="text-white ">até</p>
              <div className="flex justify-center items-center">
              <h1 className="text-white font-bold text-3xl">30%</h1>
              <p className="text-white" >de</p>
              </div>
              <h1 className="text-white font-bold text-3xl">Desconto</h1>
              <p className="text-white">em pizzas</p>
          </div>


        <img 
          className=""
          width={180}
          
          src="/img/promo-banner-1.png" 
          alt="Ate 30% de desconto em pizzas" />
      </div>
    </>
  )
}

export default App
