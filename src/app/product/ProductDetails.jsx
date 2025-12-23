'use client';

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductDetailsClient = ({ product }) => {
  // Map your images array to the format react-image-gallery expects
  const images = product.images.map(img => ({
    original: img,
    thumbnail: img
  }));

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Image gallery */}
      <div className="md:w-1/2">
        <ImageGallery items={images} showPlayButton={false} />
      </div>

      {/* Product details */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl text-green-700">£{product.price}</p>
        <p><span className="font-semibold">Brand:</span> {product.brand}</p>
        <p><span className="font-semibold">Stock:</span> {product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        <p><span className="font-semibold">Discount:</span> {product.discount}</p>
        <p><span className="font-semibold">Category:</span> {product.category}</p>

        <div className="mt-4">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
