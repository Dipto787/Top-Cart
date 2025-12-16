'use client';

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = () => {
  const [mostSoldProduct, setMostSoldProduct] = useState([]);
  const [newArrivalProduct, setNewArrivalProduct] = useState([]);

  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      const res = await fetch('http://localhost:3000/api/product');
      const data = await res.json();

      const soldProducts = data
        .filter(p => p.sold !== undefined)
        .sort((a, b) => b.sold - a.sold);

      setMostSoldProduct(soldProducts);
      setNewArrivalProduct(data.slice(-20).reverse());
    };
    fetchFeaturedProduct();
  }, []);

  return (
    <section className="container mx-auto p-4 px-4 my-20">
      <h2 className="text-3xl font-bold  mb-10">
        Discover your next business opportunity
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 p-4 lg:grid-cols-3 gap-8">

        {/* ================= TOP RANKING ================= */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">🔥 Top Ranking</h3>

          <Swiper
            navigation
            loop={mostSoldProduct.length > 1}
            slidesPerView={1}
            spaceBetween={20}
            modules={[Navigation]}
          >
            {mostSoldProduct?.map(product => (
              <SwiperSlide key={product._id}>
                <div className="flex flex-col gap-4">

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Hot Selling</span>
                    <span className="font-semibold">${product.price}</span>
                  </div>

                  <p className="text-center text-gray-700 font-medium line-clamp-2">
                    {product.title}
                  </p>

                  <Image
                    src={product.images[0]}
                    width={300}
                    height={300}
                    alt={product.title}
                    className="mx-auto h-56 object-contain"
                  />

                  <button className="
                    w-full
                    bg-black
                    text-white
                    py-2
                    rounded-lg
                    hover:bg-[#ff9400]
                    hover:text-black
                    transition
                  ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= NEW ARRIVALS ================= */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">✨ New Arrivals</h3>
            <Link href="#" className="text-sm underline">
              View More
            </Link>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            {newArrivalProduct.length}+ products added recently
          </p>

          <div className="grid grid-cols-2 gap-4">
            {newArrivalProduct?.slice(0, 6).map(product => (
              <div
                key={product._id}
                className="bg-gray-100 rounded-xl p-3 flex items-center justify-center hover:shadow-md transition"
              >
                <Image
                  src={product.images[0]}
                  width={150}
                  height={150}
                  alt={product.title}
                  className="h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= FEATURED SELECTION ================= */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">🎯 Featured Selections</h3>
            <Link href="#" className="text-sm underline">
              View More
            </Link>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Deals on best sellers
          </p>

          <div className="space-y-6">
            <Image
              src="/banner/images (41).jpg"
              width={400}
              height={400}
              alt="Best Seller"
              className="rounded-xl"
            />
            <Image
              src="/banner/images (55).jpg"
              width={400}
              height={400}
              alt="Best Seller"
              className="rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
