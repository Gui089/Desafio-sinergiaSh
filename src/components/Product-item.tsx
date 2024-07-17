
interface ProductProps {
    title: string;
    imageUrl:string;
    restaurant: string;
    price: string;
}

const ProductItem = ({title, imageUrl, restaurant, price}: ProductProps) => {
    return (
        <div className="space-y-2 w-[170px] min-w-[170px] flex flex-col items-center">
            <div className="h-[150px] w-full relative">
                <img src={imageUrl} alt={title} />
            </div>

            <div>
                <h2 className="text-gray-300">{title}</h2>
                <div>
                    <h3 className="text-gray-300 text-xl font-semibold">R${Intl.NumberFormat("pt-BR", {
                        currency:"BRL",
                        minimumFractionDigits:2,
                    }).format(Number(price))}</h3>
                </div>
                <h2 className="text-gray-500">{restaurant}</h2>
            </div>
            <button className="bg-red-600 hover:bg-red-800 text-white text-sm p-2 rounded-md">Adicionar ao cart</button>
        </div>
    )
}

export default ProductItem;