import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { MenuBarMobile } from "./MenuBarMobile";

const menuItemList = [
    {
        title: "Destaques",
        icon:"/img/star.png",
    },
    {
        title:"Pratos",
        icon:"/img/restaurant.png",
    },
    {
        title: "Bebidas",
        icon:"/img/coffee-cup.png",
    },
    {
        title:"Porções",
        icon:"/img/restauran .png"
    }
];


const Header = () => {

    const [showMenuBar, setShowMenuBar] = useState(true);

    return (
        <div className="flex justify-between pt-6 px-5 xl:ml-[15%]">
            <h1 className="text-red-600 font-bold">Genêsis Cardápios</h1>


            <ul className="hidden md:hidden lg:flex">
                {menuItemList.map(item => 
                    <li className="ml-6 cursor-pointer hover:bg-red-800 bg-red-600 flex justify-center items-center p-2 rounded-md text-white" key={item.title}>
                        <img className="mr-2" src={item.icon} alt="icon" width={18} height={18} />
                        {item.title}
                    </li>)}
            </ul>

            
            <button className="sm:flex lg:flex md:hidden hidden bg-red-600 hover:bg-red-800 p-2 w-[160px] rounded-sm items-center justify-center ">
                <img width={25} src="/img/shopping-cart.png" className="mr-1" />
                <h1 className="text-white">Carrinho</h1>
            </button>

            <button onClick={() => setShowMenuBar(prev => !prev)} className="lg:hidden ml-[80%]">
                {showMenuBar === true ? <MenuIcon /> : <XIcon />}
            </button>
                <div className="mt-6">
                    {!showMenuBar && <MenuBarMobile />}
                </div> 
        </div>
    );
}

export default Header;