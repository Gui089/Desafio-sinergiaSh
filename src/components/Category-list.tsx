import CategoryItem from "./Category-item";

const categoryList = [
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
        title:"Restaurantes",
        icon:"/img/restauran.png"
    }
];


const CategoryList = () => {
    return (
        <div className="flex overflow-x-scroll">
            {categoryList.map(item => 
                <CategoryItem icon={item.icon} title={item.title}  />
            )}
        </div>
    )
}

export default CategoryList;