import { useEffect, useState } from "react";
import { CategoryTypes } from "../domain/categories/categories-types";
import { getCategoriesApi } from "../domain/categories/categories-api";
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

const CategoryList = () => {
    
    const [category, setCategory] = useState<CategoryTypes []>([]);

    const getCategories = async () => {
        const categories = await getCategoriesApi();

        setCategory(categories.categories);
    }

    useEffect(() => {
        getCategories();
    }, []);

    console.log(category);
    

    return (
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden md:justify-center">
            {category.map(item => 
                <CategoryItem iconName={item.icon_name} key={item.id} title={item.title}  />
            )}
        </div>
    )
}

export default CategoryList;