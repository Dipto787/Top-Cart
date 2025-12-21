'use client';

import Link from "next/link";

const ShopByCategory = ({ categories }) => {
  return (
    <section className="bg-white shadow-sm border-t border-b">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-lg font-semibold py-4 text-gray-800">
          Shop by Category
        </h2>

        {/* Category List */}
        <div className="
          flex gap-4 
          overflow-x-auto 
          scrollbar-hide 
          pb-4
          md:justify-between
        ">
          {categories?.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category?.category}`}
              className="
                min-w-[120px]
                text-center
                px-4 py-2
                rounded-full
                border
                text-sm
                font-medium
                capitalize
                text-gray-700
                hover:bg-[#ff9400]
                hover:text-black
                hover:border-[#ff9400]
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              {category.category}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopByCategory;
