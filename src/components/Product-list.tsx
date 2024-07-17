import ProductItem from "./Product-item";

const products = [
  {
    title: "Frango ao Molho",
    imageUrl: "/img/frango-molho.png",
    restaurant: "Bandejão cidade",
    category: "Pratos",
    price: "25",
  },
  {
    title: "Camarão Citrus",
    imageUrl: "/img/camarao.png",
    restaurant: "Japonês",
    category: "Porções",
    price: "30",
  },
  {
    title: "Picanha Suprema",
    imageUrl: "/img/picanha.png",
    restaurant: "Bandejão cidade",
    category: "Pratos",
    price: "45",
  },
  {
    title: "Ramen Clássico",
    imageUrl: "/img/ramen.png",
    restaurant: "Japonês",
    category: "Pratos",
    price: "35",
  },
  {
    title: "Combo hot hol",
    imageUrl: "/img/hot-hol.png",
    restaurant: "Japonês",
    category: "Combos",
    price: "65",
  },
  {
    title: "Tempura verde",
    imageUrl: "/img/tempero.png",
    restaurant: "Japonês",
    category: "Pratos",
    price: "38",
  },
];

const juices = [
    {
        title: "Suco de Laranja",
        imageUrl: "/img/suco-laranja.png",
        restaurant: "Bandejão cidade",
        category: "Sucos e Bebidas",
        price: "12",
    },
    {
        title: "Suco de Melancia",
        imageUrl: "/img/suco-melancia.png",
        restaurant: "Bandejão cidade",
        category: "Pratos",
        price: "12",
    },
    {
        title: "Suco de Abacaxi",
        imageUrl: "/img/suco-abacaxi.png",
        restaurant: "Bandejão cidade",
        category: "Pratos",
        price: "12",
    },
    {
        title: "Suco de Limão",
        imageUrl: "/img/suco-limao.png",
        restaurant: "Bandejão cidade",
        category: "Pratos",
        price: "12",
    },
    {
        title: "Frutas Cítricas",
        imageUrl: "/img/frutas-citricas.png",
        restaurant: "Bandejão cidade",
        category: "Pratos",
        price: "12",
    }
]

export const ProductList = () => {
  return (
    <div className="flex overflow-x-auto gap-4 scrollbar-hide">
      {products.map((product) => (
        <ProductItem
          key={product.title}
          title={product.title}
          restaurant={product.restaurant}
          imageUrl={product.imageUrl}
          price={product.price}
        />
      ))}
    </div>
  );
};

export const ProductJuices =() => {
    return (
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
      {juices.map((juice) => (
        <ProductItem
          key={juice.title}
          title={juice.title}
          restaurant={juice.restaurant}
          imageUrl={juice.imageUrl}
          price={juice.price}
        />
      ))}
    </div>
    )
}
