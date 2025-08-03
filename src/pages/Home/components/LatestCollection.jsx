import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { Typography } from "@material-tailwind/react";
import Title from "../../../components/Title";
import ProductItem from "../../../components/ProductItem";

export default function LatestCollection() {
  const { products, currency } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <>
      <section className="my-16 h-max container mx-auto p-4">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST"} text2={"COLLECTION"} />
          <Typography className="text-gray-700 font-outfit w-full md:w-3/4 mx-auto mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            magnam, veritatis nam atque quam, incidunt autem mollitia nostrum ab
            et voluptates odio culpa assumenda.
          </Typography>
        </div>

        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {latestProducts.map((item, index) => (
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
    </>
  );
}
