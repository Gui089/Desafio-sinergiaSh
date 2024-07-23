
import { Icon } from './icon/Icon';


interface CategoryProps {
  title: string;
  iconName: string;
}

const CategoryItem = ({ title, iconName }: CategoryProps) => {
  return (
    <div className="flex cursor-pointer h-[45px] items-center justify-center gap-2 mr-3 mt-5 px-8 border-[1px] border-gray-600 rounded-full">
      <Icon name={iconName} color='#EEEE'/>
      <span className="font-semibold text-gray-400">{title}</span>
    </div>
  );
};

export default CategoryItem;
