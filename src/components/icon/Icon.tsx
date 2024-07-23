import { IconBurger } from "../../icons/Burger";
import { IconCake } from "../../icons/Cake";
import { IconJuice } from "../../icons/Juice";
import { IconPizza } from "../../icons/Pizza";
import { IconTea } from "../../icons/Tea";


export interface IconProps{
    name: string;
    color? : string;
}

export const Icon = ({name, color ='black'}: IconProps) => {
    const IconSvg = iconRegistry[name];

    return (
        <IconSvg  color={color}/>
    )

}


const iconRegistry: { [key: string]: ({ color }: { color?: string }) => JSX.Element } = {
    burger: IconBurger,
    cake: IconCake,
    juice: IconJuice,
    pizza: IconPizza,
    cup:IconTea
};