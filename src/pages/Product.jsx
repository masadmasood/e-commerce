import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

export default function Product() {
  const { productId } = useParams();
  const { products, currency, addCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return productData ? (
    <div className="container mx-auto p-4 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row items-center">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image &&
              productData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={productData.name}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item)}
                />
              ))}
          </div>
          {/* Selected Main Image */}
          <div className="w-full sm:w-[80%]">
            <img src={image} alt={productData.name} className="w-full h-auto" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star-icon" className="w-3" />
            <img src={assets.star_icon} alt="star-icon" className="w-3" />
            <img src={assets.star_icon} alt="star-icon" className="w-3" />
            <img src={assets.star_icon} alt="star-icon" className="w-3" />
            <img src={assets.star_dull_icon} alt="star-icon" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100${
                    item === size ? " border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addCart(productData._id, size)}
            className="bg-black uppercase text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            add to cart
          </button>

          <div className="mt-8 text-sm text-gray-500 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">
            <b>Description</b>
          </p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            perspiciatis corporis porro esse nobis expedita voluptas? Est
            similique asperiores cupiditate, quam quod culpa provident error,
            pariatur deleniti, omnis aspernatur soluta? Enim amet perferendis
            id, aliquid, ut blanditiis officiis voluptate provident nobis,
            accusamus eius ullam commodi. Culpa totam quae debitis illum iste
            corrupti, rem quod saepe aspernatur enim eos ratione veniam possimus
            suscipit sint ad neque, beatae perspiciatis tempore doloribus,
            explicabo quos commodi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            dolorem dignissimos laboriosam maxime itaque aliquid dolores harum,
            excepturi quas repellat, placeat suscipit natus veniam voluptas
            reprehenderit rem unde dolorum, possimus ex. Amet corporis, nulla
            sed ullam quasi eligendi cumque dolor natus nesciunt.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}
