import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";


const Search = () => {
    return (
        <div className="flex gap-2">
            <Input placeholder="Buscar Pratos" className="border-gray-600"/>
            <button className="bg-red-600 rounded-sm p-2">
                <SearchIcon color="white" size={20}/>
            </button>
        </div>
    )
}

export default Search;