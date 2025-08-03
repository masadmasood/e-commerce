import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-default">
      <div className="overflow-hidden">
        {image && image.length > 0 && (
          <img
            src={image[0]}
            alt="product"
            className="object-cover hover:scale-110 transition-all ease-in"
          />
        )}
      </div>
      <div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}
