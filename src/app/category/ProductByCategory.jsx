'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

const ProductByCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [defaultPriceRange, setDefaultPriceRange] = useState([0, 1000]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `http://localhost:3000/api/product?category=${category}`,
        { cache: "no-store" }
      );
      const data = await res.json();

      setProducts(data);
      setFilteredProducts(data);

      const uniqueBrands = [...new Set(data.map(p => p.brand))];
      setBrands(uniqueBrands);

      const prices = data.map(p => p.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
      setDefaultPriceRange([min, max]);
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    let temp = [...products];

    if (selectedBrand) temp = temp.filter(p => p.brand === selectedBrand);
    if (inStockOnly) temp = temp.filter(p => p.stock > 0);
    temp = temp.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    setFilteredProducts(temp);
  }, [selectedBrand, inStockOnly, priceRange, products]);

  const clearFilters = () => {
    setSelectedBrand(null);
    setInStockOnly(false);
    setPriceRange(defaultPriceRange);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold capitalize">{category} Collection</h1>
        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilter(true)}
          className="md:hidden bg-black text-white px-4 py-2 rounded-lg"
        >
          Filters
        </button>
      </div>

      <div className="flex gap-6 relative">
        {/* FILTER PANEL */}
        <aside
          className={`
            fixed md:static top-0 left-0 h-full md:h-auto w-72 md:w-1/4 
            bg-white z-40 border-r md:border rounded-xl p-4
            transition-transform duration-300
            ${showFilter ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          {/* FILTER HEADER */}
          <div className="flex items-center justify-between mb-4 border-b pb-3 md:pb-0">
            <h2 className="text-lg font-bold">Shop by Filter</h2>

            {/* Clear Button - visible on all screen */}
            <button
              onClick={clearFilters}
              className="text-sm text-red-500 hover:underline"
            >
              Clear
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={() => setShowFilter(false)}
              className="md:hidden text-gray-500 font-bold text-lg ml-2"
            >
              ✕
            </button>
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <div className="flex gap-2 mb-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
                className="w-1/2 border rounded px-2 py-1"
              />
              <input
                type="number"
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                className="w-1/2 border rounded px-2 py-1"
              />
            </div>
            <input
              type="range"
              min={defaultPriceRange[0]}
              max={defaultPriceRange[1]}
              value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], +e.target.value])}
              className="w-full"
            />
          </div>

          {/* Stock */}
          <div className="mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={true} 
              />
              In Stock Only
            </label>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-semibold mb-2">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrand === brand}
                    onChange={() =>
                      setSelectedBrand(selectedBrand === brand ? null : brand)
                    }
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* OVERLAY */}
        {showFilter && (
          <div
            onClick={() => setShowFilter(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

        {/* PRODUCTS */}
        <section className="flex-1">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 mt-20">No products found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div
                  key={product._id}
                  className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition"
                >
                  <div className="relative h-40 mb-3">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h2 className="text-sm font-semibold line-clamp-2">
                    {product.title}
                  </h2>

                  <p className="font-bold text-lg mt-1">£{product.price}</p>

                  <p className={`text-sm ${product.stock ? "text-green-600" : "text-red-500"}`}>
                    {product.stock ? "In Stock" : "Out of Stock"}
                  </p>
 
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductByCategory;
