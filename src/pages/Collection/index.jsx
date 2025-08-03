import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "../../components/ProductItem";
import { assets } from "../../assets/assets";
import Title from "../../components/Title";

export default function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      setFilterProducts(products);
    }
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <section className="collection" id="collection">
        <div className="container mx-auto p-4 flex flex-col md:flex-row gap-1 md:gap-10 pt-10 border-t">
          {/* Filter Options */}
          <div className="min-w-[240px] md:block">
            {/* Filter Toggle Button (Visible below md) */}
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase md:hidden"
            >
              Filters
              <img
                src={assets.dropdown_icon}
                alt="Toggle Filters"
                className={`h-3 transition-transform duration-300 ${
                  showFilter ? "rotate-90" : ""
                }`}
              />
            </p>
            {/* Category Filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-6 ${
                showFilter ? "block" : "hidden"
              } md:block`}
            >
              <p className="uppercase mb-3 text-sm font-medium">Categories</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    value="Men"
                    onChange={toggleCategory}
                  />
                  Men
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    value="Women"
                    onChange={toggleCategory}
                  />
                  Women
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    value="Kids"
                    onChange={toggleCategory}
                  />
                  Kids
                </label>
              </div>
            </div>

            {/* Sub Category Filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 my-5 ${
                showFilter ? "block" : "hidden"
              } md:block`}
            >
              <p className="uppercase mb-3 text-sm font-medium">Type</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    value="Topwear"
                    onChange={toggleSubCategory}
                  />
                  Top-Wear
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    value="Bottomwear"
                    onChange={toggleSubCategory}
                  />
                  Bottom-Wear
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    value="Winterwear"
                    onChange={toggleSubCategory}
                  />
                  Winter-Wear
                </label>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            {/* Header Section with Title and Sort Dropdown */}
            <div className="md:flex md:flex-row flex-col md:justify-between lg:text-2xl text-xl my-4 w-full ">
              {/* Title */}
              <Title text1="ALL" text2="COLLECTION" />

              {/* Product Sort */}
              <select
                className="border border-gray-300 text-sm px-4 py-2 w-full md:w-auto rounded my-4"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                aria-label="Sort Products"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 place-items-center">
              {filterProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
