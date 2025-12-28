'use client';

import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaHeart } from "react-icons/fa";

const ProductDetailsClient = ({ product }) => {
  let [cart, setCart] = useState(1);
  console.log(product)
  // Map your images array to the format react-image-gallery expects
  const images = product.images.map(img => ({
    original: img,
    thumbnail: img
  }));

  let handleAddToCart = async (product) => {
    let addedCart = {
      name: product.title,
      image: product.images[0],
      price: product.price * cart,
      category: product.category,
      quantity: cart,
    };
    try {
      const res = await fetch("http://localhost:3000/api/product", {
        method: "POST", 
        body: JSON.stringify(addedCart),
      });

      const data = await res.json();
      console.log("Saved:", data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Image gallery */}
      <div className="md:w-1/2">
        <ImageGallery items={images} showPlayButton={false} />
      </div>

      {/* Product details */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div>
          <del className=" text-gray-500">£{product.price}</del>
          <p className="text-xl text-green-700">£{product.price - parseInt(200)}</p>
        </div>
        <p><span className="font-semibold">Brand:</span> {product.brand}</p>
        <p><span className="font-semibold">Stock:</span> {product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        <p><span className="font-semibold">Category:</span> {product.category}</p>
        <div className='flex  gap-2'>
          <button onClick={() => setCart(cart - 1)} disabled={cart === 1} className='bg-gray-300 cursor-pointer px-3'>-</button>
          <p>{cart}</p>
          <button onClick={() => setCart(cart + 1)} className='bg-gray-300 cursor-pointer px-3'>+</button>
        </div>
        <div className="mt-4 flex gap-2">
          <button onClick={() => handleAddToCart(product)} className="bg-black cursor-pointer rounded-full text-white px-6 py-2  hover:bg-gray-800">
            Add To Cart
          </button>
          <button className="bg-gray-400 cursor-pointer  text-white px-3  py-2 rounded-full hover:bg-gray-800">
            <FaHeart></FaHeart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
