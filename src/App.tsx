import CategoryList from "./components/Category-list"
import Header from "./components/Header"
import { ProductJuices, ProductList } from "./components/Product-list"

import Search from "./components/Search"


function App() {

  return (
    <>
       <Header />
       <div className="px-5 pt-6">
        <Search />
       </div>

       <CategoryList />

       <div className="flex md:flex-row md:justify-around sm:flex flex-col">
            <div className="bg-red-600 lg:h-[170px] mt-5 w-[350px] h-[150px] ml-8 rounded-md flex justify-between ">

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

          <div className="bg-[#FFB100] lg:h-[170px] mt-5 w-[350px] h-[150px] ml-8 rounded-md flex justify-between ">

            <div className=" flex flex-col mt-6 ml-4 items-center h-[90px]">
                <p className="text-white ">a partir de </p>
            <div className="flex justify-center items-center">
              <h1 className="text-white font-bold text-3xl">R$17,90</h1>
            </div>
              <p className="text-white" >em lanches</p>
           
            
            </div>


          <img 
            className="" 
            width={180}

            src="/img/burger.png" 
            alt="Ate 30% de desconto em pizzas" />

          </div>
       </div>


      <div className="pt-5">
        <div className="px-5">
          <h2 className="text-xl text-gray-300 font-semibold">Pratos Principais</h2>
        </div>
      </div>

      <div className="pt-6 mt-[-20px] xl:flex">
        <ProductList />
      </div>

      <div className="pt-5">
        <div className="px-5">
          <h2 className="text-xl text-gray-300 font-semibold">Sucos e Bebidas</h2>
        </div>
      </div>

      <div className="pt-6 mt-[-20px] pb-[40px]">
        <ProductJuices />
      </div>
    </>

    
  )
}

export default App
