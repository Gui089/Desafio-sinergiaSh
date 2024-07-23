import { useEffect, useState } from "react";
import ProductItem from "./Product-item";
import { ProductsTypeApi } from "../domain/products/products-types";
import { GetProducts } from "../domain/products/product-api";


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

  const [products, setProducts] = useState<ProductsTypeApi []>([]);

  const getProducts = async () => {
      const product = await GetProducts();

      setProducts(product.products);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex overflow-x-auto gap-4 scrollbar-hide xl:ml-[20%] lg:ml-[5%]">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          restaurant={product.restaurant}
          imageUrl={product.image_url}
          price={product.price}
        />
      ))}
    </div>
  );
};

export const ProductJuices =() => {
    return (
        <div className="flex overflow-x-auto gap-4 scrollbar-hide xl:ml-[20%] lg:ml-[5%]">
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
