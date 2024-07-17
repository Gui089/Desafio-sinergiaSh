
interface CategoryProps {
    icon: string;
    title: string;
}

const CategoryItem = ({icon, title}: CategoryProps) => {
    return (
        <div className="flex cursor-pointer h-[45px] items-center justify-center gap-2 mr-3 mt-5 px-8 border-[1px] border-gray-600 rounded-full">
            <img src={icon} alt={title} height={25} width={25}/>

            <span className="font-semibold text-gray-400">{title}</span>
        </div>
    )
}


export default CategoryItem;