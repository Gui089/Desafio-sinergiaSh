import CategoryItem from "./Category-item";

const categoryList = [
    {
        title:"Lanches",
        icon:"/img/burger (1).png",
    },
    {
        title:"Bolos",
        icon:"/img/cake.png",
    },
    {
        title: "Pizzas",
        icon:"/img/pizza.png",
    },
    {
        title:"Chás",
        icon:"/img/coffee-cup (3).png"
    },
    {
        title:"Sucos",
        icon:"/img/orange-juice.png"
    }
];

const color =' #9A9A9A';

const CategoryList = () => {
    return (
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden md:justify-center">
            {categoryList.map(item => 
                <CategoryItem icon={item.icon} title={item.title}  />
            )}
        </div>
    )
}

export default CategoryList;