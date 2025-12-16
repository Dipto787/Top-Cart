'use client';

import Image from 'next/image';
import React from 'react';

const ShopNowBanner = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full">
        <Image
          src="/banner/Phoenix_10_A_modern_highquality_website_banner_showing_a_young_0.jpg"
          alt="Shop Now Banner"
          fill
          className="object-cover brightness-90"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#49271c]/90 via-[#49271c]/60 to-[#49271c]/90 flex justify-center items-center">
          {/* Content */}
          <div className="flex flex-col items-center text-center space-y-4 px-4 sm:px-8 md:px-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Shop on TopCart?
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl">
              Explore millions of products from trusted suppliers by signing up today!
            </p>
            <button className="mt-4 px-8 py-3 sm:px-10 sm:py-4 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold rounded-lg shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNowBanner;
