import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";


const Header = () => {

    const [showMenuBar, setShowMenuBar] = useState(false);

    return (
        <div className="flex justify-between pt-6 px-5">
            <h1 className="text-red-600 font-bold">Sinergia Foods</h1>


            
            <button className="sm:flex hidden bg-red-600 hover:bg-red-800 p-2 w-[160px] rounded-sm items-center justify-center ">
                <img width={25} src="/img/shopping-cart.png" className="mr-1" />
                <h1 className="text-white">Carrinho</h1>
            </button>

            <button onClick={() => setShowMenuBar(prev => !prev)} className="md:hidden lg:hidden ">
                {showMenuBar === true ? <MenuIcon /> : <XIcon />}
            </button>
        </div>
    );
}

export default Header;