import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { Typography } from "@material-tailwind/react";
import Title from "../../../components/Title";
import ProductItem from "../../../components/ProductItem";

export default function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProducts = products.filter((product) => product.bestseller);
      setBestSeller(bestProducts.slice(0, 5));
      console.log(bestProducts);
    }
  }, []);

  return (
    <section className="h-max container mx-auto p-4">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <Typography className="text-gray-700 font-outfit w-full md:w-3/4 mx-auto mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos magnam,
          veritatis nam atque quam, incidunt autem mollitia nostrum ab et
          voluptates odio culpa assumenda.
        </Typography>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
