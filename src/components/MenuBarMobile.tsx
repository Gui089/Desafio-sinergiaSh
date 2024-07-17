
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


export const MenuBarMobile = () => {
    return (
        <div className="absolute bg-black right-2 w-[80%] h-[130%]">
            <ul className="flex flex-col mt-5 items-start ml-[85px]">
                {menuItemList.map(item => 
                    <li className="text-gray-200 font-semibold mt-5 flex items-center" key={item.title}>
                        <img className="mr-2" src={item.icon} alt="" width={22}/>
                        {item.title}
                    </li>)}
            </ul>

            <button className="flex ml-[85px] mt-[200px] bg-red-600 hover:bg-red-800 p-2 w-[160px] rounded-sm items-center justify-center ">
                <img width={25} src="/img/shopping-cart.png" className="mr-1" />
                <h1 className="text-white">Carrinho</h1>
            </button>
        </div>
    )
}