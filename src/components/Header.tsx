import { MenuIcon } from "lucide-react";


const Header = () => {
    return (
        <div className="flex justify-between pt-6 px-5">
            <h1 className="text-red-600 font-bold">Sinergia Foods</h1>
            <button>
                <MenuIcon />
            </button>
        </div>
    );
}

export default Header;